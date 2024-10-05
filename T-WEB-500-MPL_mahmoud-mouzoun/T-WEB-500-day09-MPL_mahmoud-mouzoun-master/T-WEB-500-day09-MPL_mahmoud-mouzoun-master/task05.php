<?php
 
function form_is_submitted() {
    return isset($_POST['submit']);
}
 
function whoami() {
 
    if (isset($_POST['name']) && !empty(trim($_POST['name']))) {
        $name = " my name is " . htmlspecialchars(trim($_POST['name']));
    } else {
        $name = " I have no name";
    }
 
    if (isset($_POST['age']) && is_numeric($_POST['age']) && $_POST['age'] > 0) {
        $age = " and I'm " . (int)$_POST['age'] . " years old";
    } else {
        $age = "";
    }
 
    $valid_curriculums = ['pge', 'msc', 'coding', 'wac'];
 
    if (isset($_POST['curriculum']) && in_array($_POST['curriculum'], $valid_curriculums)) {
        $curriculum = $_POST['curriculum'];
    } else {
        $curriculum = null;
    }
 
    $curriculum_names = [
        'pge' => 'PGE (Programme Grande Ecole)',
        'msc' => 'MSc Pro',
        'coding' => 'Coding Academy',
        'wac' => 'Web@cademie'
    ];
   
    $message = "Hi," . $name;
 
    if ($age) {
        $message .= $age;
    }
 
    if ($curriculum && isset($curriculum_names[$curriculum])) {
        $message .= ". I'm a student of " . $curriculum_names[$curriculum];
    }
 
    return $message . ".";
}
 
if (form_is_submitted()) {
    echo whoami();
}
