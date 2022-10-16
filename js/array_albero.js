function valoriAlbero(dimensione, lettera, grado = ""){
    //filtraggio posizione idex per lettera albero
    let indexLettAlb = "";
    if(lettera == "j" && (grado == 5 || grado == 6)){
        indexLettAlb = 11;
    }else if(lettera == "j" && grado == 7){
        indexLettAlb = 12;
    }else if(lettera == "j" && grado == 8){
        indexLettAlb = 13;
    }else if (lettera == "k" && (grado >=4 && grado <= 7)){
        indexLettAlb = 14;
    }else if (lettera == "k" && (grado < 4 || grado > 7)){
        indexLettAlb = 15;
    }else{
        indexLettAlb = lett_alb_tabella.indexOf(lettera);
    }

    // selezione valore albero
    if(dimensione>1 && dimensione <=3){
        return valori_albero[0][indexLettAlb];
    }
    if(dimensione>3 && dimensione <=6){
        return valori_albero[1][indexLettAlb];
    }
    if(dimensione>6 && dimensione <=10){
        return valori_albero[2][indexLettAlb];
    }
    if(dimensione>10 && dimensione <=14){
        return valori_albero[3][indexLettAlb];
    }
    if(dimensione>14 && dimensione <=18){
        return valori_albero[4][indexLettAlb];
    }
    if(dimensione>18 && dimensione <=24){
        return valori_albero[5][indexLettAlb];
    }
    if(dimensione>24 && dimensione <=30){
        return valori_albero[6][indexLettAlb];
    }
    if(dimensione>30 && dimensione <=40){
        return valori_albero[7][indexLettAlb];
    }
    if(dimensione>40 && dimensione <=50){
        return valori_albero[8][indexLettAlb];
    }
    if(dimensione>50 && dimensione <=65){
        return valori_albero[9][indexLettAlb];
    }
    if(dimensione>65 && dimensione <=80){
        return valori_albero[10][indexLettAlb];
    }
    if(dimensione>80 && dimensione <=100){
        return valori_albero[11][indexLettAlb];
    }
    if(dimensione>100 && dimensione <=120){
        return valori_albero[12][indexLettAlb];
    }
    if(dimensione>120 && dimensione <=140){
        return valori_albero[13][indexLettAlb];
    }
    if(dimensione>140 && dimensione <=160){
        return valori_albero[14][indexLettAlb];
    }
    if(dimensione>160 && dimensione <=180){
        return valori_albero[15][indexLettAlb];
    }
    if(dimensione>180 && dimensione <=200){
        return valori_albero[16][indexLettAlb];
    }
    if(dimensione>200 && dimensione <=225){
        return valori_albero[17][indexLettAlb];
    }
    if(dimensione>225 && dimensione <=250){
        return valori_albero[18][indexLettAlb];
    }
    if(dimensione>250 && dimensione <=280){
        return valori_albero[19][indexLettAlb];
    }
    if(dimensione>280 && dimensione <=315){
        return valori_albero[20][indexLettAlb];
    }
    if(dimensione>315 && dimensione <=355){
        return valori_albero[21][indexLettAlb];
    }
    if(dimensione>355 && dimensione <=400){
        return valori_albero[22][indexLettAlb];
    }
    if(dimensione>400 && dimensione <=450){
        return valori_albero[23][indexLettAlb];
    }
    if(dimensione>450 && dimensione <=500){
        return valori_albero[24][indexLettAlb];
    }
    if(dimensione>500 && dimensione <=560){
        return valori_albero[25][indexLettAlb];
    }
    if(dimensione>560 && dimensione <=630){
        return valori_albero[26][indexLettAlb];
    }
    if(dimensione>630 && dimensione <=710){
        return valori_albero[27][indexLettAlb];
    }
    if(dimensione>710 && dimensione <=800){
        return valori_albero[28][indexLettAlb];
    }
    if(dimensione>800 && dimensione <=900){
        return valori_albero[29][indexLettAlb];
    }
    if(dimensione>900 && dimensione <=1000){
        return valori_albero[30][indexLettAlb];
    }
    if(dimensione>1000 && dimensione <=1120){
        return valori_albero[31][indexLettAlb];
    }
    if(dimensione>1120 && dimensione <=1250){
        return valori_albero[32][indexLettAlb];
    }
    if(dimensione>1250 && dimensione <=1400){
        return valori_albero[33][indexLettAlb];
    }
    if(dimensione>1400 && dimensione <=1600){
        return valori_albero[34][indexLettAlb];
    }
    if(dimensione>1600 && dimensione <=1800){
        return valori_albero[35][indexLettAlb];
    }
    if(dimensione>1800 && dimensione <=2000){
        return valori_albero[36][indexLettAlb];
    }
    if(dimensione>2000 && dimensione <=2240){
        return valori_albero[37][indexLettAlb];
    }
    if(dimensione>2240 && dimensione <=2500){
        return valori_albero[38][indexLettAlb];
    }
    if(dimensione>2500 && dimensione <=2800){
        return valori_albero[39][indexLettAlb];
    }
    if(dimensione>2800 && dimensione <=3150){
        return valori_albero[40][indexLettAlb];
    }
};

