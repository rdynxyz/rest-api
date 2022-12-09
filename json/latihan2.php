<?php

    $data = file_get_contents('test.json');
    $profile = json_decode($data, true);
    var_dump($profile) ;
    echo $profile[0]['nama']; //radyan
    echo $profile[1]['nama']; //bintang

?>