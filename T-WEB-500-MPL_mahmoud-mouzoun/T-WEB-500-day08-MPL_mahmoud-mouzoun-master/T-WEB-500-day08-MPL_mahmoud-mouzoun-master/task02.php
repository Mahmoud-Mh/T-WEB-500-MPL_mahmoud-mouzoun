<?php
function dog_bark(int $woof_nb) {
    if ($woof_nb <= 0) {
        echo "\n";
    } else {
        echo implode(" ", array_fill(0, $woof_nb, "woof")) . "\n";
    }
}
