<?php
function get_shortest(array $str) {

    $shortest = $str[0];

    foreach ($str as $s) {
        if (strlen($s) < strlen($shortest)) {
            $shortest = $s;
        }
    }
    return $shortest;
}
?>
