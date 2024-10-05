<?php
function calc_average(array $numbers) {
    // Check if the array is not empty to avoid division by zero
    if (count($numbers) == 0) {
        return 0;
    }

    // Calculate the sum of the numbers
    $sum = array_sum($numbers);

    // Calculate the average
    $average = $sum / count($numbers);

    // Return the average rounded to the nearest 1/10th
    return round($average, 1);
}
?>
