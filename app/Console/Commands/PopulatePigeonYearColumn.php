<?php

namespace App\Console\Commands;

use App\Pigeon;
use DateTime;
use Illuminate\Console\Command;

class PopulatePigeonYearColumn extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'populate:year';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $pigeons = Pigeon::all();

        foreach ($pigeons as $pigeon) {
            if ($pigeon->ringnumber) {
                $subbedYear = substr($pigeon->ringnumber, 3, 2);
                $year = DateTime::createFromFormat('y', $subbedYear);
                $pigeon->year = $year->format('Y');
                $pigeon->save();
            }
        }
    }
}
