// animazione intro 
const intro = gsap.timeline({ defaults: { duration: 1 } });
intro.fromTo('.lingua', { opacity: 0, y: 100 }, { opacity: 1, y: 0, display: "flex" });

//animazione da intro a schermata
function animScherm() {
    const btnIT = gsap.timeline({ defaults: { duration: 0.5 } });
    btnIT.fromTo('.lingua', { opacity: 1, y: 0 }, { opacity: 0, y: 100, display: "none" });
    btnIT.fromTo('.schermata', { opacity: 0, y: 100 }, { opacity: 1, y: 0, display: "block" });
}

//animazione da schermata a intro
function animIntro() {
    const btnBack = gsap.timeline({ defaults: { duration: 0.5 } });
    btnBack.fromTo('.schermata', { opacity: 1, y: 0 }, { opacity: 0, y: 100, display: "none" });
    btnBack.fromTo('.lingua', { opacity: 0, y: 100 }, { opacity: 1, y: 0, display: "flex" });
}

//info
function info() {
    if (checkEN.checked == true) {
        alert(`INFO APP:
1. Enter the nominal size (value between 1 and 3150mm)
2. Choose the offset (from A to ZC)
3. Choose the degree of IT tolerance (from 1 to 18)
4. The values are reset with the reset button (orange button)
5. Use the back key (magenta button) to return to the language selection menu

App Version: 3.0
`);
    } else {
        alert(`INFO APP:
1. Inserire la dimensione nominale (valore compreso tra 1 e 3150mm)
2. Scegliere lo scostamento (dalla A alla ZC)
3. Scegliere il grado di tolleranza IT (da 1 a 18)
4. Con il tasto reset (tasto arancio) si resettano i valori
5. Con il tasto back (tasto magenta) si ritorna al menu di scelta lingua

Versione App: 3.0
`);
    }
}

//conversione lingua
tastoITA.addEventListener('click', () => {
    labelForo.innerHTML = "Foro";
    labelDimensione.innerHTML = "Dimensione";
    labelAlbero.innerHTML = "Albero";
    titolForo.innerHTML = "Calcolo Tolleranza Foro";
    titolAlbero.innerHTML = "Calcolo Tolleranza Albero";
    for (let i in descrizione) {
        descrizione[i].innerHTML = `
        <span>Dimensione nominale</span>
        <span>Limite Superiore</span>
        <span>Limite Inferiore</span>
        <span>Scostamento Sup.</span>
        <span>Scostamento Inf.</span>
        <span>Ampiezza Tolleranza</span>
        `;
    }
    checkEN.checked = false;
});

tastoENG.addEventListener('click', () => {
    labelForo.innerHTML = "Bore";
    labelDimensione.innerHTML = "Dimension";
    labelAlbero.innerHTML = "Shaft";
    titolForo.innerHTML = "Calculation Tolerance Bore";
    titolAlbero.innerHTML = "Calculation Tolerance Shaft";
    for (let i in descrizione) {
        descrizione[i].innerHTML = `
        <span>Nominal Dimension</span>
        <span>Upper Limit</span>
        <span>Lower Limit</span>
        <span>Upper Deviation</span>
        <span>Lower Deviation</span>
        <span>Amplitude Tolerance</span>
        `;
    }
    checkEN.checked = true;
});

//settaggio selectors
function selectForo() {
    let output = "";
    output += "<option selected>-</option>";
    for (let i in lettere_maius) {
        output += `<option>${lettere_maius[i]}</option>`
    };
    lettForo.innerHTML = output;
    lettForo.addEventListener("onchange", unlockForo);
};
selectForo();

function selectAlb() {
    let output = "";
    output += "<option selected>-</option>";
    for (let i in lettere_minus) {
        output += `<option>${lettere_minus[i]}</option>`
    };
    lettAlbero.innerHTML = output;
};
selectAlb();

function selectNum() {
    let output = "";
    output += "<option selected>-</option>";
    for (i in gradi) {
        output += `<option>${gradi[i]}</option>`
    };
    numForo.innerHTML = output;
    numAlbero.innerHTML = output;
};
selectNum();

//test get value
var reg = /^[0-9]*\.?[0-9]*$/;//regex per soli numeri per input 

//funzione scelta lettera foro
function unlockForo() {
    if (misura.value == "") {
        misura.value = "";
        lettForo.value = "-";
        if (checkEN.checked === false) {
            alert("Inserire un valore > 1 e <= 3150mm !");
            misura.focus();
        } else {
            alert("Insert a value > 1 and <= 3150mm !");
            misura.focus();
        }
    } else {
        if (numForo.value !== "-") {
            azzeraForo();
        };
        if (!reg.test(misura.value)) {
            misura.value = "";
            lettForo.value = "-";
            numForo.disabled = true;
            if (checkEN.checked === false) {
                alert("È consentito inserire sono numeri, non simboli e/o lettere");
            } else {
                alert("Only numeric format is allowed");
            }
        } else {
            if (((misura.value > 1 && misura.value <= 3150)) && lettForo.value !== "-") {
                //per scostamenti superiori a JS
                if (lettere_maius.indexOf(lettForo.value) > 10) {
                    numForo.removeAttribute("disabled");
                    // in seguito è il grado IT a decidere
                } else {
                    scostForo = valoriForo(misura.value, lettForo.value);
                    console.log(scostForo);
                    if (scostForo !== "n") {
                        numForo.removeAttribute("disabled");
                    } else {
                        scostForo = "";
                        lettForo.value = "-";
                        numForo.disabled = true;
                        numForo.value = "-";
                        if (checkEN.checked === false) {
                            alert("La dimensione nominale inserita non ha questo scostamento! Scegli un altro scostamento.");
                        } else {
                            alert("The nominal size inserted does not have this deviation! Please insert another deviation.");
                        }
                    }
                }
            } else {
                misura.value = "";
                lettForo.value = "-";
                misura.focus();
                if (checkEN.checked === false) {
                    alert("Inserisci un valore > 1 e <= 3150mm e scegli la tolleranza");
                } else {
                    alert("Enter a value > 1 and <= 3150mm and choose the tolerance");
                }
            }
        }
    }
};

//funzione scelta grado IT foro
function valueITForo() {
    valoreITForo = valoreIT(misura.value, numForo.value);
    if (lettForo.value === "J") {
        if (numForo.value < 6 || numForo.value > 8) {
            azzeraForo();
            if (checkEN.checked === false) {
                alert("Per lo scostamento J ci sono solo i seguenti gradi di tolleranza: IT6, IT7, IT8");
            } else {
                alert("For the deviation J there are only the following degrees of tolerance: IT6, IT7, IT8");
            }
        } else {
            scostForo = valoriForo(misura.value, lettForo.value, numForo.value);
            calcoloForo(scostForo, valoreITForo);
        }
    } else if ((misura.value > 3 && misura.value <= 500) && ((lettere_maius.indexOf(lettForo.value) > 12 && lettere_maius.indexOf(lettForo.value) <= 15 && (numForo.value > 2 && numForo.value < 9)) || (lettere_maius.indexOf(lettForo.value) > 15 && (numForo.value > 2 && numForo.value < 8)))) {
        if ((misura.value > 250 && misura.value <= 315) && lettForo.value == "M" && numForo.value == 6) {
            //settaggio tolleranza M6 per dimensioni da 250 a 315mm 
            scostForo = -18;
            delta = deltaIT(misura.value, numForo.value);
            scostForo += delta;
            calcoloForo(scostForo, valoreITForo);
        } else {
            scostForo = valoriForo(misura.value, lettForo.value, numForo.value);
            if (scostForo == "n") {
                if (checkEN.checked === false) {
                    alert(`Non esistono valori con tolleranza ${lettForo.value}${numForo.value} per la dimensione ${misura.value}mm. Scegli un'altra tolleranza.`);
                } else {
                    alert(`There are no values with the tolerance ${lettForo.value}${numForo.value} for the dimension ${misura.value}mm. Choose another tolerance.`);
                }
                azzeraForo();
                lettForo.value = "-";
            } else {
                delta = deltaIT(misura.value, numForo.value);
                scostForo += delta;
                calcoloForo(scostForo, valoreITForo);
            }
        }
    } else {
        scostForo = valoriForo(misura.value, lettForo.value, numForo.value);
        if (scostForo == "n") {
            if (checkEN.checked === false) {
                alert(`Non esistono valori con tolleranza ${lettForo.value}${numForo.value} per la dimensione ${misura.value}mm. Scegli un'altra tolleranza.`);
            } else {
                alert(`There are no values with the tolerance ${lettForo.value}${numForo.value} for the dimension ${misura.value}mm. Choose another tolerance.`);
            }
            azzeraForo();
            lettForo.value = "-";
        } else {
            calcoloForo(scostForo, valoreITForo);
        }
    };
    console.log(scostForo, valoreITForo);
};

// funzione per calcolare e compilare i valori per il foro
function calcoloForo(lettera, grado) {
    let indexMaiuscolo = lettere_maius.indexOf(lettForo.value);
    let es = "";
    let ei = "";
    let assoluto = "";
    let valoreNominale = "";
    if (indexMaiuscolo > 11) {
        es = lettera / 1000;
        ei = (lettera - grado) / 1000;
    } //inserisco calcolo con tolleranza js
    else if (indexMaiuscolo == 11) {
        es = (grado / 2) / 1000;
        ei = -es;
    } else {
        ei = lettera / 1000;
        es = (lettera + grado) / 1000;
    }
    valoreNominale = Number(misura.value);
    dimForo.innerHTML = `${valoreNominale.toFixed(3)} mm`;
    limSupForo.innerHTML = `${(valoreNominale + es).toFixed(3)} mm`;
    limInfForo.innerHTML = `${(valoreNominale + ei).toFixed(3)} mm`;
    scostSupForo.innerHTML = `${es.toFixed(3)} mm`;
    scostInfForo.innerHTML = `${ei.toFixed(3)} mm`;
    assoluto = Math.abs(es - ei)
    ampTollForo.innerHTML = `${assoluto.toFixed(3)} mm`;
};

//funzione scelta lettera albero
function unlockAlbero() {
    if (misura.value == "") {
        misura.value = "";
        lettAlbero.value = "-";
        if (checkEN.checked === false) {
            alert("Inserire un valore > 1 e <= 3150mm !");
            misura.focus();
        } else {
            alert("Insert a value > 1 and <= 3150mm !");
            misura.focus();
        }
    } else {
        if (numAlbero.value != "-") {
            azzeraAlbero();
        };
        if (!reg.test(misura.value)) {
            misura.value = "";
            lettAlbero.value = "-";
            numAlbero.disabled = true;
            if (checkEN.checked === false) {
                alert("È consentito inserire sono numeri, non simboli e/o lettere");
            } else {
                alert("Only numeric format is allowed");
            }
        } else {
            if (((misura.value > 1 && misura.value <= 3150)) && lettAlbero.value !== "-") {
                if (lettAlbero.value === "js" || lettAlbero.value === "j" || lettAlbero.value === "k") {
                    numAlbero.removeAttribute("disabled");
                    // in seguito è il grado IT a decidere
                } else {
                    scostAlb = valoriAlbero(misura.value, lettAlbero.value);
                    console.log(scostAlb);
                    if (scostAlb !== "n") {
                        numAlbero.removeAttribute("disabled");
                    } else {
                        scostAlb = "";
                        lettAlbero.value = "-";
                        numAlbero.disabled = true;
                        numAlbero.value = "-";
                        if (checkEN.checked === false) {
                            alert("La dimensione nominale inserita non ha questo scostamento! Scegli un altro scostamento.");
                        } else {
                            alert("The nominal size inserted does not have this deviation! Please insert another deviation.");
                        }
                    }
                }
            } else {
                misura.value = "";
                lettAlbero.value = "-";
                misura.focus();
                if (checkEN.checked === false) {
                    alert("Inserisci un valore > 1 e <= 3150mm e scegli la tolleranza");
                } else {
                    alert("Enter a value > 1 and <= 3150mm and choose the tolerance");
                }
            }
        }
    }
};

//funzione scelta grado IT albero
function valueITAlb() {
    valoreITAlbero = valoreIT(misura.value, numAlbero.value);
    if (lettAlbero.value === "j") {
        if (numAlbero.value < 5 || numAlbero.value > 8) {
            azzeraAlbero();
            if (checkEN.checked === false) {
                alert("Per lo scostamento j ci sono solo i seguenti gradi di tolleranza: IT5, IT6, IT7, IT8");
            } else {
                alert("For the deviation j there are only the following degrees of tolerance: IT5, IT6, IT7, IT8");
            }
        } else if (misura.value > 3 && numAlbero.value == 8) {
            azzeraAlbero();
            if (checkEN.checked === false) {
                alert("Per lo scostamento j le dimensioni superiori ai 3mm non hanno i gradi di tolleranza IT8");
            } else {
                alert("For the deviation j the size bigger than 3 mm have not degrees of tolerance IT8");
            }
        } else {
            scostAlb = valoriAlbero(misura.value, lettAlbero.value, numAlbero.value);
            calcoloAlbero(scostAlb, valoreITAlbero);
        }
    } else if (lettAlbero.value === "k") {
        scostAlb = valoriAlbero(misura.value, lettAlbero.value, numAlbero.value);
        calcoloAlbero(scostAlb, valoreITAlbero);
    } else {
        calcoloAlbero(scostAlb, valoreITAlbero);
    }
};
// funzione per calcolare e compilare i valori per l'albero
function calcoloAlbero(lettera, grado) {
    let indexMinuscolo = lettere_minus.indexOf(lettAlbero.value);
    let es = "";
    let ei = "";
    let assoluto = "";
    let valoreNominale = "";
    if (indexMinuscolo < 11) {
        es = lettera / 1000;
        ei = (lettera - grado) / 1000;
    } //inserisco calcolo con tolleranza js
    else if (indexMinuscolo == 11) {
        es = (grado / 2) / 1000;
        ei = -es;
    } else {
        ei = lettera / 1000;
        es = (lettera + grado) / 1000;
    }
    valoreNominale = Number(misura.value);
    dimAlbero.innerHTML = `${valoreNominale.toFixed(3)} mm`;
    limSupAlbero.innerHTML = `${(valoreNominale + es).toFixed(3)} mm`;
    limInfAlbero.innerHTML = `${(valoreNominale + ei).toFixed(3)} mm`;
    scostSupAlbero.innerHTML = `${es.toFixed(3)} mm`;
    scostInfAlbero.innerHTML = `${ei.toFixed(3)} mm`;
    assoluto = Math.abs(es - ei)
    ampTollAlbero.innerHTML = `${assoluto.toFixed(3)} mm`;
};

//funzione reset ed azzeramenti 
misura.addEventListener('keydown', () => { //durante typing input
    azzera();
});
function reset() {
    azzera();
    misura.value = "";
};
function azzera() {
    lettForo.value = "-";
    lettAlbero.value = "-";
    numAlbero.disabled = true;
    numForo.disabled = true;
    numForo.value = "-";
    numAlbero.value = "-";
    dimForo.innerHTML = "---";
    limSupForo.innerHTML = "---";
    limInfForo.innerHTML = "---";
    scostSupForo.innerHTML = "---";
    scostInfForo.innerHTML = "---";
    ampTollForo.innerHTML = "---";
    dimAlbero.innerHTML = "---";
    limSupAlbero.innerHTML = "---";
    limInfAlbero.innerHTML = "---";
    scostSupAlbero.innerHTML = "---";
    scostInfAlbero.innerHTML = "---";
    ampTollAlbero.innerHTML = "---";
};
function azzeraForo() {
    numForo.value = "-";
    numForo.disabled = true;
    dimForo.innerHTML = "---";
    limSupForo.innerHTML = "---";
    limInfForo.innerHTML = "---";
    scostSupForo.innerHTML = "---";
    scostInfForo.innerHTML = "---";
    ampTollForo.innerHTML = "---";
};
function azzeraAlbero() {
    numAlbero.value = "-";
    numAlbero.disabled = true;
    dimAlbero.innerHTML = "---";
    limSupAlbero.innerHTML = "---";
    limInfAlbero.innerHTML = "---";
    scostSupAlbero.innerHTML = "---";
    scostInfAlbero.innerHTML = "---";
    ampTollAlbero.innerHTML = "---";
};
