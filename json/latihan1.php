<?php

$profile = [
    [
        "nama" => "Radyan",
        "umur" => 20,
        "email" => "radyan6661@gmail.com",
        "hobi" => ["baca", "coding", "gaming"]
    ],
    [
        "nama" => "Radyan",
        "umur" => 20,
        "email" => "radyan6661@gmail.com",
        "hobi" => ["baca", "coding", "gaming"]
    ]
];

    // var_dump($profile);
    $data = json_encode($profile); 
    echo $data;