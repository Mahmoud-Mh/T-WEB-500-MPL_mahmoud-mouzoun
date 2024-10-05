<?php
function sequence($nbRep) {
    $current = "1";
    $results = [];
 
    for ($i = 0; $i <= $nbRep; $i++) {
        $results[] = $current;
        $current = generateNext($current);
    }
 
    foreach ($results as $result) {
        echo $result . PHP_EOL;
    }
}
 
 
function generateNext($current) {
    $result = "";
    $count = 1;
    $length = strlen($current);
    $isSameCharacter = false;
 
    for ($i = 0; $i < $length; $i++) {
        $nextIndex = $i + 1;
        if( $i >= $length -1){
            $isLaastCharacter = true;
        }
        else {
            $isLaastCharacter = false;
        }

        if (!$isLaastCharacter) {

            if ($current[$i] == $current[$nextIndex]){
                $isSameCharacter = true;
            }
            else {
                $isSameCharacter = false; 
            }
        }
        else { 
            $isSameCharacter = false;
        }
    
 
        if ($isSameCharacter) {
            $count++;
        } else {
            $result = $result . $count . $current[$i];
            $count = 1;
        }
    }
 
    return $result;
}
?>
 