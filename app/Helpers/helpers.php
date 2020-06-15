<?php

function calculateCoefficient($place, $amountOfPigeons)
{
    if (!$place || !$amountOfPigeons) {
        return 1000000;
    }

    return ($place * 100) / $amountOfPigeons;
}
