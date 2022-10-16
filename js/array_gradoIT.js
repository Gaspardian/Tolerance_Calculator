function valoreIT(dimensione, grado){
    if(dimensione>1 && dimensione <=3){
        return grado_it[0][grado-1];
    }
    if(dimensione>3 && dimensione <=6){
        return grado_it[1][grado-1];
    }
    if(dimensione>6 && dimensione <=10){
        return grado_it[2][grado-1];
    }
    if(dimensione>10 && dimensione <=18){
        return grado_it[3][grado-1];
    }
    if(dimensione>18 && dimensione <=30){
        return grado_it[4][grado-1];
    }
    if(dimensione>30 && dimensione <=50){
        return grado_it[5][grado-1];
    }
    if(dimensione>50 && dimensione <=80){
        return grado_it[6][grado-1];
    }
    if(dimensione>80 && dimensione <=120){
        return grado_it[7][grado-1];
    }
    if(dimensione>120 && dimensione <=180){
        return grado_it[8][grado-1];
    }
    if(dimensione>180 && dimensione <=250){
        return grado_it[9][grado-1];
    }
    if(dimensione>250 && dimensione <=315){
        return grado_it[10][grado-1];
    }
    if(dimensione>315 && dimensione <=400){
        return grado_it[11][grado-1];
    }
    if(dimensione>400 && dimensione <=500){
        return grado_it[12][grado-1];
    }
    if(dimensione>500 && dimensione <=630){
        return grado_it[13][grado-1];
    }
    if(dimensione>630 && dimensione <=800){
        return grado_it[14][grado-1];
    }
    if(dimensione>800 && dimensione <=1000){
        return grado_it[15][grado-1];
    }
    if(dimensione>1000 && dimensione <=1250){
        return grado_it[16][grado-1];
    }
    if(dimensione>1250 && dimensione <=1600){
        return grado_it[17][grado-1];
    }
    if(dimensione>1600 && dimensione <=2000){
        return grado_it[18][grado-1];
    }
    if(dimensione>2000 && dimensione <=2500){
        return grado_it[19][grado-1];
    }
    if(dimensione>2500 && dimensione <=3150){
        return grado_it[20][grado-1];
    }
};

