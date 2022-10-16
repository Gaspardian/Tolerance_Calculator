function valoriForo(dimensione, lettera, grado = ""){
    //filtraggio posizione idex per lettera albero
    let indexLettForo = "";
    if(lettera == "J" && grado == 6){
        indexLettForo = 11;
    }else if(lettera == "J" && grado == 7){
        indexLettForo = 12;
    }else if(lettera == "J" && grado == 8){
        indexLettForo = 13;
    }else if (lettera == "K" && grado <=8){
        indexLettForo = 14;
    }else if (lettera == "K" && grado >8){
        indexLettForo = 15;
    }else if (lettera == "M" && grado <=8){
        indexLettForo = 16;
    }else if (lettera == "M" && grado >8){
        indexLettForo = 17;
    }else if (lettera == "N" && grado <=8){
        indexLettForo = 18;
    }else if (lettera == "N" && grado >8){
        indexLettForo = 19;
    }else{
        indexLettForo = lett_foro_tabella.indexOf(lettera);
    }

    // selezione valore albero
    if(dimensione>1 && dimensione <=3){
        return valori_foro[0][indexLettForo];
    }
    if(dimensione>3 && dimensione <=6){
        return valori_foro[1][indexLettForo];
    }
    if(dimensione>6 && dimensione <=10){
        return valori_foro[2][indexLettForo];
    }
    if(dimensione>10 && dimensione <=14){
        return valori_foro[3][indexLettForo];
    }
    if(dimensione>14 && dimensione <=18){
        return valori_foro[4][indexLettForo];
    }
    if(dimensione>18 && dimensione <=24){
        return valori_foro[5][indexLettForo];
    }
    if(dimensione>24 && dimensione <=30){
        return valori_foro[6][indexLettForo];
    }
    if(dimensione>30 && dimensione <=40){
        return valori_foro[7][indexLettForo];
    }
    if(dimensione>40 && dimensione <=50){
        return valori_foro[8][indexLettForo];
    }
    if(dimensione>50 && dimensione <=65){
        return valori_foro[9][indexLettForo];
    }
    if(dimensione>65 && dimensione <=80){
        return valori_foro[10][indexLettForo];
    }
    if(dimensione>80 && dimensione <=100){
        return valori_foro[11][indexLettForo];
    }
    if(dimensione>100 && dimensione <=120){
        return valori_foro[12][indexLettForo];
    }
    if(dimensione>120 && dimensione <=140){
        return valori_foro[13][indexLettForo];
    }
    if(dimensione>140 && dimensione <=160){
        return valori_foro[14][indexLettForo];
    }
    if(dimensione>160 && dimensione <=180){
        return valori_foro[15][indexLettForo];
    }
    if(dimensione>180 && dimensione <=200){
        return valori_foro[16][indexLettForo];
    }
    if(dimensione>200 && dimensione <=225){
        return valori_foro[17][indexLettForo];
    }
    if(dimensione>225 && dimensione <=250){
        return valori_foro[18][indexLettForo];
    }
    if(dimensione>250 && dimensione <=280){
        return valori_foro[19][indexLettForo];
    }
    if(dimensione>280 && dimensione <=315){
        return valori_foro[20][indexLettForo];
    }
    if(dimensione>315 && dimensione <=355){
        return valori_foro[21][indexLettForo];
    }
    if(dimensione>355 && dimensione <=400){
        return valori_foro[22][indexLettForo];
    }
    if(dimensione>400 && dimensione <=450){
        return valori_foro[23][indexLettForo];
    }
    if(dimensione>450 && dimensione <=500){
        return valori_foro[24][indexLettForo];
    }
    if(dimensione>500 && dimensione <=560){
        return valori_foro[25][indexLettForo];
    }
    if(dimensione>560 && dimensione <=630){
        return valori_foro[26][indexLettForo];
    }
    if(dimensione>630 && dimensione <=710){
        return valori_foro[27][indexLettForo];
    }
    if(dimensione>710 && dimensione <=800){
        return valori_foro[28][indexLettForo];
    }
    if(dimensione>800 && dimensione <=900){
        return valori_foro[29][indexLettForo];
    }
    if(dimensione>900 && dimensione <=1000){
        return valori_foro[30][indexLettForo];
    }
    if(dimensione>1000 && dimensione <=1120){
        return valori_foro[31][indexLettForo];
    }
    if(dimensione>1120 && dimensione <=1250){
        return valori_foro[32][indexLettForo];
    }
    if(dimensione>1250 && dimensione <=1400){
        return valori_foro[33][indexLettForo];
    }
    if(dimensione>1400 && dimensione <=1600){
        return valori_foro[34][indexLettForo];
    }
    if(dimensione>1600 && dimensione <=1800){
        return valori_foro[35][indexLettForo];
    }
    if(dimensione>1800 && dimensione <=2000){
        return valori_foro[36][indexLettForo];
    }
    if(dimensione>2000 && dimensione <=2240){
        return valori_foro[37][indexLettForo];
    }
    if(dimensione>2240 && dimensione <=2500){
        return valori_foro[38][indexLettForo];
    }
    if(dimensione>2500 && dimensione <=2800){
        return valori_foro[39][indexLettForo];
    }
    if(dimensione>2800 && dimensione <=3150){
        return valori_foro[40][indexLettForo];
    }
};

