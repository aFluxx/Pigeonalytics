<?php

function calculateCoefficient($place, $amountOfPigeons)
{
    // dump($place);
    // dd($amountOfPigeons);
    if (!$place || !$amountOfPigeons) {
        return 0;
    }

    return ($place * 100) / $amountOfPigeons;
}
