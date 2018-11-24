<?php
    $number=1;
    $number_str= "./rec_data/" . str_pad($number, 4, 0, STR_PAD_LEFT);
    // まだ使われていないナンバーを検索
    while(file_exists($number_str)) {
        $number +=1;
        $number_str= "./rec_data/" . str_pad($number, 4, 0, STR_PAD_LEFT);
    }
    $path = $number_str;
    if(mkdir($path, 0777)){
        //作成に成功した時の処理
        echo "作成に成功しました";
    }else{
        //作成に失敗した時の処理
        echo "作成に失敗しました";
    }
    // ユーザー情報のテキストデータの保存
    $datafile = $path . "/usrdata.txt";
    file_put_contents($datafile, $_POST["name"]);
    
    // 音声データの保存
    $doname = $path . "/do.wav";
    $dodata = file_get_contents($_POST["dowav"]);
    file_put_contents($doname, $dodata);
    $rename = $path . "/re.wav";
    $redata = file_get_contents($_POST["rewav"]);
    file_put_contents($rename, $redata);
    $miname = $path . "/mi.wav";
    $midata = file_get_contents($_POST["miwav"]);
    file_put_contents($miname, $midata);
    $faname = $path . "/fa.wav";
    $fadata = file_get_contents($_POST["fawav"]);
    file_put_contents($faname, $fadata);
    $soname = $path . "/so.wav";
    $sodata = file_get_contents($_POST["sowav"]);
    file_put_contents($soname, $sodata);
    $laname = $path . "/la.wav";
    $ladata = file_get_contents($_POST["lawav"]);
    file_put_contents($laname, $ladata);
    $tiname = $path . "/ti.wav";
    $tidata = file_get_contents($_POST["tiwav"]);
    file_put_contents($tiname, $tidata);
    $hidoname = $path . "/hido.wav";
    $hidodata = file_get_contents($_POST["hidowav"]);
    file_put_contents($hidoname, $hidodata);
    ?>
