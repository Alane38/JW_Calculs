// Imports
const readline = require('readline')
const convert = require('convert-length')
const color = require('cli-color')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '>'
})

// Variables
const InitRoseau = 2.67 //mètres
const InitGrandRoseau = 3.11 //mètres
const InitBrasse = 1.8 //mètres
const InitGrandeCoudee = 51.8 //centimètres
const InitCoudee = 44.5 //centimètres
const InitCoudeeCourte = 38 //centimètres
const InitStadeRomain = 185 //mètres
const InitDoigt = 1.85 //centimètres
const InitPalme = 7.4 //centimètres
const InitEmpan = 22.2 //centimètres

function GrandRoseau(result) {
    rl.question('Quel est la taille de votre grand roseau ? ', (answerGrandRoseau) => {
        result = (answerGrandRoseau) * InitGrandRoseau
        resultConverted = convert(result, 'm', 'cm')
        console.log(`La longueur du grand roseau est donc de ` + color.green(`${result} mètres`))
        console.log(`Si nous convertissons cette valeur en centimètres, nous obtiendront ` + color.cyan(`${resultConverted} centimètres`))
        setTimeout(() => {Input()}, 2000);
    })
}

function Roseau(result) {
    rl.question('Quel est la taille de votre roseau ? ', (answerRoseau) => {
        result = (answerRoseau) * InitRoseau
        resultConverted = convert(result, 'm', 'cm')
        console.log(`La longueur du roseau est donc de ` + color.green(`${result} mètres`))
        console.log(`Si nous convertissons cette valeur en centimètres, nous obtiendront ` + color.cyan(`${resultConverted} centimètres`))
        setTimeout(() => {Input()}, 2000);
    })
}

function Brasse(result) {
    rl.question('Quel est la taille de votre brasse ? ', (answerBrasse) => {
        result = (answerBrasse) * InitBrasse
        resultConverted = convert(result, 'm', 'cm')
        console.log(`La longueur de la brasse est donc de ` + color.green(`${result} mètres`))
        console.log(`Si nous convertissons cette valeur en centimètres, nous obtiendront ` + color.cyan(`${resultConverted} centimètres`))
        setTimeout(() => {Input()}, 2000);
    })
}

function GrandeCoudee(result) {
    rl.question('Quel est la taille de votre grande coudée ? ', (answerGrandeCoudee) => {
        result = (answerGrandeCoudee) * InitGrandeCoudee
        resultConverted = convert(result, 'cm', 'm')
        console.log(`La longueur de la grande coudée est donc de ` + color.green(`${result} centimètres`))
        console.log(`Si nous convertissons cette valeur en mètres, nous obtiendront ` + color.cyan(`${resultConverted} mètres`))
        setTimeout(() => {Input()}, 2000);
    })
}

function Coudee(result) {
    rl.question('Quel est la taille de votre coudée ? ', (answerCoudee) => {
        result = (answerCoudee) * InitCoudee
        resultConverted = convert(result, 'cm', 'm')
        console.log(`La longueur de la coudée est donc de ` + color.green(`${result} centimètres`))
        console.log(`Si nous convertissons cette valeur en mètres, nous obtiendront ` + color.cyan(`${resultConverted} mètres`))
        setTimeout(() => {Input()}, 2000);
    })
}

function CoudeeCourte(result) {
    rl.question('Quel est la taille de votre coudée courte ? ', (answerCoudeeCourte) => {
        result = (answerCoudeeCourte) * InitCoudeeCourte
        resultConverted = convert(result, 'cm', 'm')
        console.log(`La longueur de la coudée courte est donc de ` + color.green(`${result} centimètres`))
        console.log(`Si nous convertissons cette valeur en mètres, nous obtiendront ` + color.cyan(`${resultConverted} mètres`))
        setTimeout(() => {Input()}, 2000);
    })
}

function StadeRomain(result) {
    rl.question('Quel est la taille de votre stade romain ? ', (answerStadeRomain) => {
        result = (answerStadeRomain) * InitStadeRomain
        resultConverted = convert(result, 'm', 'cm')
        console.log(`La longueur du stade romain est donc de ` + color.green(`${result} mètres`))
        console.log(`Si nous convertissons cette valeur en centimètres, nous obtiendront ` + color.cyan(`${resultConverted} centimètres`))
        setTimeout(() => {Input()}, 2000);
    })
}

function Doigt(result) {
    rl.question('Quel est la taille de votre doigt ? ', (answerDoigt) => {
        result = (answerDoigt) * InitDoigt
        resultConverted = convert(result, 'cm', 'm')
        console.log(`La longueur du doigt est donc de ` + color.green(`${result} centimètres`))
        console.log(`Si nous convertissons cette valeur en mètres, nous obtiendront ` + color.cyan(`${resultConverted} mètres`))
        setTimeout(() => {Input()}, 2000);
    })
}

function Palme(result) {
    rl.question('Quel est la taille de votre palme ? ', (answerPalme) => {
        result = (answerPalme) * InitPalme
        resultConverted = convert(result, 'cm', 'm')
        console.log(`La longueur de la palme est donc de ` + color.green(`${result} centimètres`))
        console.log(`Si nous convertissons cette valeur en mètres, nous obtiendront ` + color.cyan(`${resultConverted} mètres`))
        setTimeout(() => {Input()}, 2000);
    })
}

function Empan(result) {
    rl.question('Quel est la taille de votre empan ? ', (answerEmpan) => {
        result = (answerEmpan) * InitEmpan
        resultConverted = convert(result, 'cm', 'm')
        console.log(`La longueur de l'empan est donc de ` + color.green(`${result} centimètres`))
        console.log(`Si nous convertissons cette valeur en mètres, nous obtiendront ` + color.cyan(`${resultConverted} mètres`))
        setTimeout(() => {Input()}, 2000);
    })
}

// Input
function Input() {
    rl.question(color.cyan('0 - Quitter\n') + '1 - Grand Roseau \n2 - Roseau \n3 - Brasse \n4 - Grande coudée \n5 - Coudée \n6 - Coudée courte \n7 - Stade romain \n8 - Doigt \n9 - Palme \n10 - Empan \n\nRéponse : ', (answerNumber) => {
        if (answerNumber == 0) {
            process.exit(0)
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
        else if (answerNumber > 10) {
            console.log(color.redBright('Veuillez rentrer une valeur valide !'))
            setTimeout(() => {console.log(color.red('Chargement...\n'))}, 800);
            setTimeout(() => {Input()}, 1900);
        }
        else if (answerNumber < 0) {
            console.log(color.redBright('Veuillez rentrer une valeur valide !'))
            setTimeout(() => {console.log(color.red('Chargement...\n'))}, 800);
            setTimeout(() => {Input()}, 1900);
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