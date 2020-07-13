<?php

function calculateCoefficient($place, $amountOfPigeons)
{
    if (!$place || !$amountOfPigeons || $place == 0) {
        return 1000000;
    }

    return ($place * 100) / $amountOfPigeons;
}

function setPlace($place)
{
    if ($place != '-') {
        return $place;
    }

    return 1000000;
}
