<?php

function calculateCoefficient($place, $amountOfPigeons)
{
    if (!$place || !$amountOfPigeons || $place == 0) {
        return 1000000;
    }

    return ($place * 100) / $amountOfPigeons;
}
