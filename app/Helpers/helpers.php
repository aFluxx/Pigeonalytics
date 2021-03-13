<?php

if (!function_exists('calculateCoefficient')) {
    function calculateCoefficient($place, $amountOfPigeons)
    {
        if (!$place || !$amountOfPigeons || $place == 0) {
            return 1000000;
        }

        return ($place * 100) / $amountOfPigeons;
    }
}

if (!function_exists('setPlace')) {
    function setPlace($place)
    {
        if ($place != '-') {
            return $place;
        }

        return 1000000;
    }
}

if (!function_exists('calculateYearDifference')) {
    function calculateYearDifference($van_jaar, $tot_jaar)
    {
        $diff = $tot_jaar - $van_jaar;
        $currentJaar = $van_jaar;
        $years = [];
        $counter = 0;

        while ($counter <= $diff) {
            $years[] = $currentJaar;
            $currentJaar++;
            $counter++;
        }

        return $years;
    }
}
