<?php

namespace App;

use App\Pigeon;
use Illuminate\Database\Eloquent\Model;

class PigeonImport extends Model
{
    public function iterate($pigeons)
    {
        $pigeons->each(function ($pigeonRow, $key) {
            $ringnumber = $this->constructRingnumber('BE', $pigeonRow['jaar'], $pigeonRow['ring']);

            $pigeonInSystem = Pigeon::where('ringnumber', $ringnumber)->first();

            if ($pigeonInSystem && $pigeonInSystem->gender == null) {
                $this->updateGender($pigeonInSystem, $pigeonRow);
            }

            if (!$pigeonInSystem) {
                $this->createPigeon($pigeonRow, $ringnumber);
            }
        });

        $pigeons->each(function ($pigeonRow, $key) {
            $this->createParentsRelation($pigeonRow);
        });

        return response()->json('Done', 200);
    }

    private function constructRingnumber($landcode, $jaar, $ring)
    {
        return $landcode . '-' . substr($jaar, 2, 2) . '-' . $ring;
    }

    private function updateGender($pigeonInSystem, $pigeon)
    {
        $pigeonInSystem->gender = $this->setGender($pigeon['geslacht']);
        $pigeonInSystem->save();
    }

    private function createPigeon($pigeonRow, $ringnumber)
    {
        if (strlen($ringnumber) == 13) {
            return Pigeon::create([
                'ringnumber' => $ringnumber,
                'gender' => $this->setGender($pigeonRow['geslacht'])
            ]);
        }
    }

    private function createParentsRelation($pigeonRow)
    {
        if ($pigeonRow['vjaar'] != null && $pigeonRow['vring'] != null) {
            $this->createFather($pigeonRow);
        }

        if ($pigeonRow['mjaar'] != null && $pigeonRow['mring'] != null) {
            $this->createMother($pigeonRow);
        }
    }

    private function createFather($pigeonRow)
    {
        $ringnumberFather = $this->constructRingnumber('BE', $pigeonRow['vjaar'], $pigeonRow['vring']);
        $ringnumberCurrent = $this->constructRingnumber('BE', $pigeonRow['jaar'], $pigeonRow['ring']);

        $father = Pigeon::where('ringnumber', $ringnumberFather)->first();
        $currentPigeon = Pigeon::where('ringnumber', $ringnumberCurrent)->first();

        if ($currentPigeon && $father) {
            $currentPigeon->father_id = $father->id;
            $currentPigeon->ringnumber_father = $father->ringnumber;
            $currentPigeon->save();
        }
    }

    private function createMother($pigeonRow)
    {
        $ringnumberMother = $this->constructRingnumber('BE', $pigeonRow['mjaar'], $pigeonRow['mring']);
        $ringnumberCurrent = $this->constructRingnumber('BE', $pigeonRow['jaar'], $pigeonRow['ring']);

        $mother = Pigeon::where('ringnumber', $ringnumberMother)->first();
        $currentPigeon = Pigeon::where('ringnumber', $ringnumberCurrent)->first();

        if ($currentPigeon && $mother) {
            $currentPigeon->mother_id = $mother->id;
            $currentPigeon->ringnumber_mother = $mother->ringnumber;
            $currentPigeon->save();
        }
    }

    private function setGender($geslacht)
    {
        if ($geslacht == 'M') {
            return 'm';
        } else if ($geslacht == 'V') {
            return 'f';
        }
    }
}
