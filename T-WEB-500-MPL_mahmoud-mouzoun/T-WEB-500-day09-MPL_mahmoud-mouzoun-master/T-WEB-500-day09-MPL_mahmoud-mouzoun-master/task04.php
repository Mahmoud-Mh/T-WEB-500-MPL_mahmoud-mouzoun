<?php

function whoami() {
    $name = isset($_POST["name"]) && !empty(trim($_POST["name"])) ? $_POST["name"] : null;
    
    $age = isset($_POST["age"]) && is_numeric($_POST["age"]) && $_POST["age"] >= 0 ? $_POST["age"] : null;

    if ($name && $age) {
        echo "Hi, my name is " . htmlspecialchars($name) . " and I'm " . htmlspecialchars($age) . " years old.";
    } elseif ($name && !$age) {
        echo "Hi, my name is " . htmlspecialchars($name) . ".";
    } elseif (!$name && $age) {
        echo "Hi, I have no name and I'm " . htmlspecialchars($age) . " years old.";
    } else {
        echo "Hi, I have no name.";
    }
}

?>
