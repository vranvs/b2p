<?php

require_once 'apikey.php';

$summoner_name = "swive";

$url_one = "https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/" . $summoner_name . "?api_key=" . $api_key;

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_URL, $url_one);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $result_one = curl_exec($ch);
    curl_close($ch);

$json_array = json_decode($result_one, true);

$summoner_id = $json_array[$summoner_name]['id'];

$url_two = "https://na.api.pvp.net/api/lol/na/v2.2/matchhistory/" . $summoner_id .  "?rankedQueues=RANKED_SOLO_5x5,RANKED_TEAM_5x5&beginIndex=0&endIndex=10&api_key=" . $api_key;

    $ch2 = curl_init();
    curl_setopt($ch2, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch2, CURLOPT_URL, $url_two);
    curl_setopt($ch2, CURLOPT_RETURNTRANSFER, true);
    $result_two = curl_exec($ch2);
    curl_close($ch2);

echo($result_two);

?>