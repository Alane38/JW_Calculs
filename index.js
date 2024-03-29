// Imports
const readline = require('readline')
const convertLength = require('convert-length')
const convertUnits = require('convert-units')
const color = require('cli-color')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '>'
})

// Variables : mesures de longueurs
const initDoigt = 1.85 //centimètres
const initPalme = 7.4 //centimètres
const initEmpan = 22.2 //centimètres
const initCoudeeCourte = 38 //centimètres
const initGrandeCoudee = 51.8 //centimètres
const initBrasse = 1.8 //mètres
const initRoseau = 2.67 //mètres
const initGrandRoseau = 3.11 //mètres
const initCoudee = 44.5 //centimètres
const initStadeRomain = 185 //mètres

// Variables : mesures de capacités pour les liquides
const initKor = 220 //litres
const initBath = 22 //litres
const initHin = 3.67 //litres
const initLog = 0.31 //litres

// Variables : mesures de capacités pour les matières sèches
const initHomer = 220 //litres
const initEpha = 22 //litres
const initSea = 7.33 //litres
const initOmer = 2.2 //litres
const initQab = 1.22 //litres
const initLitre = 1.08 //litres

// Variables : Monnaies grecques
const initDrachme = 0.002935 //euros
const initDidrachme = initDrachme * 2 //euros
const initTetradrachme = initDrachme * 4 //euros
const initMine = initDrachme * 100 //euros
const initTalent = initMine * 60 //euros
const initLivre = initDrachme * 96 //euros

// Variables : Monnaies hébraïques
const initSicle = initMine / 50 //euros
const initBeqa = initSicle / 2 //euros
const initGuera = initBeqa / 10 //euros
const initPim = (initSicle / 4) * 2 //euros
// const initDarique = ? //euros


// Fonctions : mesures de longueurs
function GrandRoseau(result) {
    rl.question('Quel est la taille de votre grand roseau ? ', (answerGrandRoseau) => {
        if (isNaN(answerGrandRoseau)) {
            console.log(color.redBright('Veuillez rentrer une valeur valide !'))
            setTimeout(() => { console.log(color.red('Chargement...\n')) }, 800);
            setTimeout(() => { Input() }, 1900);
        } else {
            result = (answerGrandRoseau) * initGrandRoseau
            resultConverted = convertLength(result, 'm', 'cm')
            console.log(`La longueur du grand roseau est donc de ` + color.green(`${result} mètres`))
            console.log(`Si nous convertissons cette valeur en centimètres, nous obtiendrons ` + color.cyan(`${resultConverted} centimètres\n`))
            setTimeout(() => { Input() }, 2000);
        }
    })
}

function Roseau(result) {
    rl.question('Quel est la taille de votre roseau ? ', (answerRoseau) => {
        if (isNaN(answerRoseau)) {
            console.log(color.redBright('Veuillez rentrer une valeur valide !'))
            setTimeout(() => { console.log(color.red('Chargement...\n')) }, 800);
            setTimeout(() => { Input() }, 1900);
        } else {
            result = (answerRoseau) * initRoseau
            resultConverted = convertLength(result, 'm', 'cm')
            console.log(`La longueur du roseau est donc de ` + color.green(`${result} mètres`))
            console.log(`Si nous convertissons cette valeur en centimètres, nous obtiendrons ` + color.cyan(`${resultConverted} centimètres\n`))
            setTimeout(() => { Input() }, 2000);
        }
    })
}

function Brasse(result) {
    rl.question('Quel est la taille de votre brasse ? ', (answerBrasse) => {
        if (isNaN(answerBrasse)) {
            console.log(color.redBright('Veuillez rentrer une valeur valide !'))
            setTimeout(() => { console.log(color.red('Chargement...\n')) }, 800);
            setTimeout(() => { Input() }, 1900);
        } else {
            result = (answerBrasse) * initBrasse
            resultConverted = convertLength(result, 'm', 'cm')
            console.log(`La longueur de la brasse est donc de ` + color.green(`${result} mètres`))
            console.log(`Si nous convertissons cette valeur en centimètres, nous obtiendrons ` + color.cyan(`${resultConverted} centimètres\n`))
            setTimeout(() => { Input() }, 2000);
        }
    })
}

function GrandeCoudee(result) {
    rl.question('Quel est la taille de votre grande coudée ? ', (answerGrandeCoudee) => {
        if (isNaN(answerGrandeCoudee)) {
            console.log(color.redBright('Veuillez rentrer une valeur valide !'))
            setTimeout(() => { console.log(color.red('Chargement...\n')) }, 800);
            setTimeout(() => { Input() }, 1900);
        } else {
            result = (answerGrandeCoudee) * initGrandeCoudee
            resultConverted = convertLength(result, 'cm', 'm')
            console.log(`La longueur de la grande coudée est donc de ` + color.green(`${result} centimètres`))
            console.log(`Si nous convertissons cette valeur en mètres, nous obtiendrons ` + color.cyan(`${resultConverted} mètres\n`))
            setTimeout(() => { Input() }, 2000);
        }
    })
}

function Coudee(result) {
    rl.question('Quel est la taille de votre coudée ? ', (answerCoudee) => {
        if (isNaN(answerCoudee)) {
            console.log(color.redBright('Veuillez rentrer une valeur valide !'))
            setTimeout(() => { console.log(color.red('Chargement...\n')) }, 800);
            setTimeout(() => { Input() }, 1900);
        } else {
            result = (answerCoudee) * initCoudee
            resultConverted = convertLength(result, 'cm', 'm')
            console.log(`La longueur de la coudée est donc de ` + color.green(`${result} centimètres`))
            console.log(`Si nous convertissons cette valeur en mètres, nous obtiendrons ` + color.cyan(`${resultConverted} mètres\n`))
            setTimeout(() => { Input() }, 2000);
        }
    })
}

function CoudeeCourte(result) {
    rl.question('Quel est la taille de votre coudée courte ? ', (answerCoudeeCourte) => {
        if (isNaN(answerCoudeeCourte)) {
            console.log(color.redBright('Veuillez rentrer une valeur valide !'))
            setTimeout(() => { console.log(color.red('Chargement...\n')) }, 800);
            setTimeout(() => { Input() }, 1900);
        } else {
            result = (answerCoudeeCourte) * initCoudeeCourte
            resultConverted = convertLength(result, 'cm', 'm')
            console.log(`La longueur de la coudée courte est donc de ` + color.green(`${result} centimètres`))
            console.log(`Si nous convertissons cette valeur en mètres, nous obtiendrons ` + color.cyan(`${resultConverted} mètres\n`))
            setTimeout(() => { Input() }, 2000);
        }
    })
}

function StadeRomain(result) {
    rl.question('Quel est la taille de votre stade romain ? ', (answerStadeRomain) => {
        if (isNaN(answerStadeRomain)) {
            console.log(color.redBright('Veuillez rentrer une valeur valide !'))
            setTimeout(() => { console.log(color.red('Chargement...\n')) }, 800);
            setTimeout(() => { Input() }, 1900);
        } else {
            result = (answerStadeRomain) * initStadeRomain
            resultConverted = convertLength(result, 'm', 'cm')
            console.log(`La longueur du stade romain est donc de ` + color.green(`${result} mètres`))
            console.log(`Si nous convertissons cette valeur en centimètres, nous obtiendrons ` + color.cyan(`${resultConverted} centimètres\n`))
            setTimeout(() => { Input() }, 2000);
        }
    })
}

function Doigt(result) {
    rl.question('Quel est la taille de votre doigt ? ', (answerDoigt) => {
        if (isNaN(answerDoigt)) {
            console.log(color.redBright('Veuillez rentrer une valeur valide !'))
            setTimeout(() => { console.log(color.red('Chargement...\n')) }, 800);
            setTimeout(() => { Input() }, 1900);
        } else {
            result = (answerDoigt) * initDoigt
            resultConverted = convertLength(result, 'cm', 'm')
            console.log(`La longueur du doigt est donc de ` + color.green(`${result} centimètres`))
            console.log(`Si nous convertissons cette valeur en mètres, nous obtiendrons ` + color.cyan(`${resultConverted} mètres\n`))
            setTimeout(() => { Input() }, 2000);
        }
    })
}

function Palme(result) {
    rl.question('Quel est la taille de votre palme ? ', (answerPalme) => {
        if (isNaN(answerPalme)) {
            console.log(color.redBright('Veuillez rentrer une valeur valide !'))
            setTimeout(() => { console.log(color.red('Chargement...\n')) }, 800);
            setTimeout(() => { Input() }, 1900);
        } else {
            result = (answerPalme) * initPalme
            resultConverted = convertLength(result, 'cm', 'm')
            console.log(`La longueur de la palme est donc de ` + color.green(`${result} centimètres`))
            console.log(`Si nous convertissons cette valeur en mètres, nous obtiendrons ` + color.cyan(`${resultConverted} mètres\n`))
            setTimeout(() => { Input() }, 2000);
        }
    })
}

function Empan(result) {
    rl.question('Quel est la taille de votre empan ? ', (answerEmpan) => {
        if (isNaN(answerEmpan)) {
            console.log(color.redBright('Veuillez rentrer une valeur valide !'))
            setTimeout(() => { console.log(color.red('Chargement...\n')) }, 800);
            setTimeout(() => { Input() }, 1900);
        } else {
            result = (answerEmpan) * initEmpan
            resultConverted = convertLength(result, 'cm', 'm')
            console.log(`La longueur de l'empan est donc de ` + color.green(`${result} centimètres`))
            console.log(`Si nous convertissons cette valeur en mètres, nous obtiendrons ` + color.cyan(`${resultConverted} mètres\n`))
            setTimeout(() => { Input() }, 2000);
        }
    })
}

// Fonctions : mesures de capacités pour les liquides
function Kor(result) {
    rl.question('Quelle est la valeur de votre Kor ? ', (answerKor) => {
        if (isNaN(answerKor)) {
            console.log(color.redBright('Veuillez rentrer une valeur valide !'))
            setTimeout(() => { console.log(color.red('Chargement...\n')) }, 800);
            setTimeout(() => { Input() }, 1900);
        } else {
            result = (answerKor) * initKor
            resultConverted = convertUnits(result).from('l').to('ml')
            console.log(`Si nous convertissons cette valeur en millilitres, nous obtiendrons ` + color.cyan(`${resultConverted} ml\n`))
            setTimeout(() => { Input() }, 2000);
        }
    })
}

function Bath(result) {
    rl.question('Quelle est la valeur de votre Bath ? ', (answerBath) => {
        if (isNaN(answerBath)) {
            console.log(color.redBright('Veuillez rentrer une valeur valide !'))
            setTimeout(() => { console.log(color.red('Chargement...\n')) }, 800);
            setTimeout(() => { Input() }, 1900);
        } else {
            result = (answerBath) * initBath
            resultConverted = convertUnits(result).from('l').to('ml')
            console.log(`Si nous convertissons cette valeur en millilitres, nous obtiendrons ` + color.cyan(`${resultConverted} ml\n`))
            setTimeout(() => { Input() }, 2000);
        }
    })
}

function Hin(result) {
    rl.question('Quelle est la valeur de votre Hin ? ', (answerHin) => {
        if (isNaN(answerHin)) {
            console.log(color.redBright('Veuillez rentrer une valeur valide !'))
            setTimeout(() => { console.log(color.red('Chargement...\n')) }, 800);
            setTimeout(() => { Input() }, 1900);
        } else {
            result = (answerHin) * initHin
            resultConverted = convertUnits(result).from('l').to('ml')
            console.log(`Si nous convertissons cette valeur en millilitres, nous obtiendrons ` + color.cyan(`${resultConverted} ml\n`))
            setTimeout(() => { Input() }, 2000);
        }
    })
}

function Log(result) {
    rl.question('Quelle est la valeur de votre Log ? ', (answerLog) => {
        if (isNaN(answerLog)) {
            console.log(color.redBright('Veuillez rentrer une valeur valide !'))
            setTimeout(() => { console.log(color.red('Chargement...\n')) }, 800);
            setTimeout(() => { Input() }, 1900);
        } else {
            result = (answerLog) * initLog
            resultConverted = convertUnits(result).from('l').to('ml')
            console.log(`Si nous convertissons cette valeur en millilitres, nous obtiendrons ` + color.cyan(`${resultConverted} ml\n`))
            setTimeout(() => { Input() }, 2000);
        }
    })
}

// Fonctions : mesures de capacités pour les matières sèches
function Homer(result) {
    rl.question('Quelle est la valeur de votre Homer ? ', (answerHomer) => {
        if (isNaN(answerHomer)) {
            console.log(color.redBright('Veuillez rentrer une valeur valide !'))
            setTimeout(() => { console.log(color.red('Chargement...\n')) }, 800);
            setTimeout(() => { Input() }, 1900);
        } else {
            result = (answerHomer) * initHomer
            resultConverted = convertUnits(result).from('l').to('ml')
            console.log(`Si nous convertissons cette valeur en millilitres, nous obtiendrons ` + color.cyan(`${resultConverted} ml\n`))
            setTimeout(() => { Input() }, 2000);
        }
    })
}

function Epha(result) {
    rl.question('Quelle est la valeur de votre Epha ? ', (answerEpha) => {
        if (isNaN(answerEpha)) {
            console.log(color.redBright('Veuillez rentrer une valeur valide !'))
            setTimeout(() => { console.log(color.red('Chargement...\n')) }, 800);
            setTimeout(() => { Input() }, 1900);
        } else {
            result = (answerEpha) * initEpha
            resultConverted = convertUnits(result).from('l').to('ml')
            console.log(`Si nous convertissons cette valeur en millilitres, nous obtiendrons ` + color.cyan(`${resultConverted} ml\n`))
            setTimeout(() => { Input() }, 2000);
        }
    })
}

function Sea(result) {
    rl.question('Quelle est la valeur de votre Sea ? ', (answerSea) => {
        if (isNaN(answerSea)) {
            console.log(color.redBright('Veuillez rentrer une valeur valide !'))
            setTimeout(() => { console.log(color.red('Chargement...\n')) }, 800);
            setTimeout(() => { Input() }, 1900);
        } else {
            result = (answerSea) * initSea
            resultConverted = convertUnits(result).from('l').to('ml')
            console.log(`Si nous convertissons cette valeur en millilitres, nous obtiendrons ` + color.cyan(`${resultConverted} ml\n`))
            setTimeout(() => { Input() }, 2000);
        }
    })
}

function Omer(result) {
    rl.question('Quelle est la valeur de votre Omer ? ', (answerOmer) => {
        if (isNaN(answerOmer)) {
            console.log(color.redBright('Veuillez rentrer une valeur valide !'))
            setTimeout(() => { console.log(color.red('Chargement...\n')) }, 800);
            setTimeout(() => { Input() }, 1900);
        } else {
            result = (answerOmer) * initOmer
            resultConverted = convertUnits(result).from('l').to('ml')
            console.log(`Si nous convertissons cette valeur en millilitres, nous obtiendrons ` + color.cyan(`${resultConverted} ml\n`))
            setTimeout(() => { Input() }, 2000);
        }
    })
}

function Qab(result) {
    rl.question('Quelle est la valeur de votre Qab ? ', (answerQab) => {
        if (isNaN(answerQab)) {
            console.log(color.redBright('Veuillez rentrer une valeur valide !'))
            setTimeout(() => { console.log(color.red('Chargement...\n')) }, 800);
            setTimeout(() => { Input() }, 1900);
        } else {
            result = (answerQab) * initQab
            resultConverted = convertUnits(result).from('l').to('ml')
            console.log(`Si nous convertissons cette valeur en millilitres, nous obtiendrons ` + color.cyan(`${resultConverted} ml\n`))
            setTimeout(() => { Input() }, 2000);
        }
    })
}

function Litre(result) {
    rl.question('Quelle est la valeur de votre Litre ? ', (answerLitre) => {
        if (isNaN(answerLitre)) {
            console.log(color.redBright('Veuillez rentrer une valeur valide !'))
            setTimeout(() => { console.log(color.red('Chargement...\n')) }, 800);
            setTimeout(() => { Input() }, 1900);
        } else {
            result = (answerLitre) * initLitre
            resultConverted = convertUnits(result).from('l').to('ml')
            console.log(`Si nous convertissons cette valeur en millilitres, nous obtiendrons ` + color.cyan(`${resultConverted} ml\n`))
            setTimeout(() => { Input() }, 2000);
        }
    })
}

// Fonctions : Monnaies grecques
function Drachme(result) {
    rl.question('Quelle est la valeur de votre Drachme ? ', (answerDrachme) => {
        if (isNaN(answerDrachme)) {
            console.log(color.redBright('Veuillez rentrer une valeur valide !'))
            setTimeout(() => { console.log(color.red('Chargement...\n')) }, 800);
            setTimeout(() => { Input() }, 1900);
        } else {
            result = (initDrachme) * answerDrachme
            console.log(`Si nous convertissons cette valeur en euros, nous obtiendrons ` + color.cyan(`${result} €\n`))
            setTimeout(() => { Input() }, 2000);
        }
    })
}

function Didrachme(result) {
    rl.question('Quelle est la valeur de votre Didrachme ? ', (answerDidrachme) => {
        if (isNaN(answerDidrachme)) {
            console.log(color.redBright('Veuillez rentrer une valeur valide !'))
            setTimeout(() => { console.log(color.red('Chargement...\n')) }, 800);
            setTimeout(() => { Input() }, 1900);
        } else {
            result = (initDidrachme) * answerDidrachme
            console.log(`Si nous convertissons cette valeur en euros, nous obtiendrons ` + color.cyan(`${result} €\n`))
            setTimeout(() => { Input() }, 2000);
        }
    })
}

function Tetradrachme(result) {
    rl.question('Quelle est la valeur de votre Tetradrachme ? ', (answerTetradrachme) => {
        if (isNaN(answerTetradrachme)) {
            console.log(color.redBright('Veuillez rentrer une valeur valide !'))
            setTimeout(() => { console.log(color.red('Chargement...\n')) }, 800);
            setTimeout(() => { Input() }, 1900);
        } else {
            result = (initTetradrachme) * answerTetradrachme
            console.log(`Si nous convertissons cette valeur en euros, nous obtiendrons ` + color.cyan(`${result} €\n`))
            setTimeout(() => { Input() }, 2000);
        }
    })
}

function Mine(result) {
    rl.question('Quelle est la valeur de votre Mine ? ', (answerMine) => {
        if (isNaN(answerMine)) {
            console.log(color.redBright('Veuillez rentrer une valeur valide !'))
            setTimeout(() => { console.log(color.red('Chargement...\n')) }, 800);
            setTimeout(() => { Input() }, 1900);
        } else {
            result = (initMine) * answerMine
            console.log(`Si nous convertissons cette valeur en euros, nous obtiendrons ` + color.cyan(`${result} €\n`))
            setTimeout(() => { Input() }, 2000);
        }
    })
}

function Talent(result) {
    rl.question('Quelle est la valeur de votre Talent ? ', (answerTalent) => {
        if (isNaN(answerTalent)) {
            console.log(color.redBright('Veuillez rentrer une valeur valide !'))
            setTimeout(() => { console.log(color.red('Chargement...\n')) }, 800);
            setTimeout(() => { Input() }, 1900);
        } else {
            result = (initTalent) * answerTalent
            console.log(`Si nous convertissons cette valeur en euros, nous obtiendrons ` + color.cyan(`${result} €\n`))
            setTimeout(() => { Input() }, 2000);
        }
    })
}

function Livre(result) {
    rl.question('Quelle est la valeur de votre Livre ? ', (answerLivre) => {
        if (isNaN(answerLivre)) {
            console.log(color.redBright('Veuillez rentrer une valeur valide !'))
            setTimeout(() => { console.log(color.red('Chargement...\n')) }, 800);
            setTimeout(() => { Input() }, 1900);
        } else {
            result = (initLivre) * answerLivre
            console.log(`Si nous convertissons cette valeur en euros, nous obtiendrons ` + color.cyan(`${result} €\n`))
            setTimeout(() => { Input() }, 2000);
        }
    })
}

// Fonctions : Monnaies hébraiques
function Guera(result) {
    rl.question('Quelle est la valeur de votre Guera ? ', (answerGuera) => {
        if (isNaN(answerGuera)) {
            console.log(color.redBright('Veuillez rentrer une valeur valide !'))
            setTimeout(() => { console.log(color.red('Chargement...\n')) }, 800);
            setTimeout(() => { Input() }, 1900);
        } else {
            result = (initGuera) * answerGuera
            console.log(`Si nous convertissons cette valeur en euros, nous obtiendrons ` + color.cyan(`${result} €\n`))
            setTimeout(() => { Input() }, 2000);
        }
    })
}

function Beqa(result) {
    rl.question('Quelle est la valeur de votre Beqa ? ', (answerBeqa) => {
        if (isNaN(answerBeqa)) {
            console.log(color.redBright('Veuillez rentrer une valeur valide !'))
            setTimeout(() => { console.log(color.red('Chargement...\n')) }, 800);
            setTimeout(() => { Input() }, 1900);
        } else {
            result = (initBeqa) * answerBeqa
            console.log(`Si nous convertissons cette valeur en euros, nous obtiendrons ` + color.cyan(`${result} €\n`))
            setTimeout(() => { Input() }, 2000);
        }
    })
}

function Pim(result) {
    rl.question('Quelle est la valeur de votre Pim ? ', (answerPim) => {
        if (isNaN(answerPim)) {
            console.log(color.redBright('Veuillez rentrer une valeur valide !'))
            setTimeout(() => { console.log(color.red('Chargement...\n')) }, 800);
            setTimeout(() => { Input() }, 1900);
        } else {
            result = (initPim) * answerPim
            console.log(`Si nous convertissons cette valeur en euros, nous obtiendrons ` + color.cyan(`${result} €\n`))
            setTimeout(() => { Input() }, 2000);
        }
    })
}

function Sicle(result) {
    rl.question('Quelle est la valeur de votre Sicle ? ', (answerSicle) => {
        if (isNaN(answerSicle)) {
            console.log(color.redBright('Veuillez rentrer une valeur valide !'))
            setTimeout(() => { console.log(color.red('Chargement...\n')) }, 800);
            setTimeout(() => { Input() }, 1900);
        } else {
            result = (initSicle) * answerSicle
            console.log(`Si nous convertissons cette valeur en euros, nous obtiendrons ` + color.cyan(`${result} €\n`))
            setTimeout(() => { Input() }, 2000);
        }
    })
}

// Input
function Input() {
    rl.question(color.cyan('0 - Quitter\n') + '---------Longueurs---------\n1 - Grand Roseau \n2 - Roseau \n3 - Brasse \n4 - Grande coudée \n5 - Coudée \n6 - Coudée courte \n7 - Stade romain \n8 - Doigt \n9 - Palme \n10 - Empan\n---------Litres pour liquides---------\n11 - Kor \n12 - Bath \n13 - Hin \n14 - Log\n---------Litres pour matières sèches---------\n15 - Homer \n16 - Epha \n17 - Sea \n18 - Omer \n19 - Qab \n20 - Litre\n---------Monnaies Grecques---------\n21 - Drachme \n22 - Didrachme \n23 - Tétradrachme \n24 - Mine \n25 - Talent  \n26 - Livre\n---------Monnaies Hébraïques---------\n27 - Guera \n28 - Beqa \n29 - Pim \n30 - Sicle  \n\nRéponse : ', (answerNumber) => {
        if (answerNumber == 0) {
            console.log(color.green('Passez une bonne journée !'))
            setTimeout(() => { process.exit(0) }, 800);
        }
        else if (answerNumber == 1) {
            GrandRoseau()
        }
        else if (answerNumber == 2) {
            Roseau()
        }
        else if (answerNumber == 3) {
            Brasse()
        }
        else if (answerNumber == 4) {
            GrandeCoudee()
        }
        else if (answerNumber == 5) {
            Coudee()
        }
        else if (answerNumber == 6) {
            CoudeeCourte()
        }
        else if (answerNumber == 7) {
            StadeRomain()
        }
        else if (answerNumber == 8) {
            Doigt()
        }
        else if (answerNumber == 9) {
            Palme()
        }
        else if (answerNumber == 10) {
            Empan()
        }
        else if (answerNumber == 11) {
            Kor()
        }
        else if (answerNumber == 12) {
            Bath()
        }
        else if (answerNumber == 13) {
            Hin()
        }
        else if (answerNumber == 14) {
            Log()
        }
        else if (answerNumber == 15) {
            Homer()
        }
        else if (answerNumber == 16) {
            Epha()
        }
        else if (answerNumber == 17) {
            Sea()
        }
        else if (answerNumber == 18) {
            Omer()
        }
        else if (answerNumber == 19) {
            Qab()
        }
        else if (answerNumber == 20) {
            Litre()
        }
        else if (answerNumber == 21) {
            Drachme()
        }
        else if (answerNumber == 22) {
            Didrachme()
        }
        else if (answerNumber == 23) {
            Tetradrachme()
        }
        else if (answerNumber == 24) {
            Mine()
        }
        else if (answerNumber == 25) {
            Talent()
        }
        else if (answerNumber == 26) {
            Livre()
        }
        else if (answerNumber == 27) {
            Guera()
        }
        else if (answerNumber == 28) {
            Beqa()
        }
        else if (answerNumber == 29) {
            Pim()
        }
        else if (answerNumber == 30) {
            Sicle()
        }
        else if (answerNumber > 10) {
            console.log(color.redBright('Veuillez rentrer une valeur valide !'))
            setTimeout(() => { console.log(color.red('Chargement...\n')) }, 800);
            setTimeout(() => { Input() }, 1900);
        }
        else if (answerNumber < 0) {
            console.log(color.redBright('Veuillez rentrer une valeur valide !'))
            setTimeout(() => { console.log(color.red('Chargement...\n')) }, 800);
            setTimeout(() => { Input() }, 1900);
        }
        else if (isNaN()) {
            console.log(color.redBright('Veuillez rentrer une valeur valide !'))
            setTimeout(() => { console.log(color.red('Chargement...\n')) }, 800);
            setTimeout(() => { Input() }, 1900);
        }
    })
}

// Appel de l'Input
Input()

// Closed if Error
rl.on('close', function () {
    console.log('Bye')
    process.exit(0)
})