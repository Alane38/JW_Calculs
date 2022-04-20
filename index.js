const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '>'
});

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
        console.log(`La longueur du grand roseau est donc de ${result} mètres`);
        process.exit(0);
    })
}


function Roseau(result) {
    rl.question('Quel est la taille de votre roseau ? ', (answerRoseau) => {
        result = (answerRoseau) * InitRoseau
        console.log(`La longueur du roseau est donc de ${result} mètres`);
        process.exit(0);
    })
}

function Brasse(result) {
    rl.question('Quel est la taille de votre brasse ? ', (answerBrasse) => {
        result = (answerBrasse) * InitBrasse
        console.log(`La longueur de la brasse est donc de ${result} mètres`);
        process.exit(0);
    })
}

function GrandeCoudee(result) {
    rl.question('Quel est la taille de votre grande coudée ? ', (answerGrandeCoudee) => {
        result = (answerGrandeCoudee) * InitGrandeCoudee
        console.log(`La longueur de la grande coudée est donc de ${result} centimètres`);
        process.exit(0);
    })
}

function Coudee(result) {
    rl.question('Quel est la taille de votre coudée ? ', (answerCoudee) => {
        result = (answerCoudee) * InitCoudee
        console.log(`La longueur de la coudée est donc de ${result} centimètres`);
        process.exit(0);
    })
}

function CoudeeCourte(result) {
    rl.question('Quel est la taille de votre coudée courte ? ', (answerCoudeeCourte) => {
        result = (answerCoudeeCourte) * InitCoudeeCourte
        console.log(`La longueur de la coudée courte est donc de ${result} centimètres`);
        process.exit(0);
    })
}


function StadeRomain(result) {
    rl.question('Quel est la taille de votre stade romain ? ', (answerStadeRomain) => {
        result = (answerStadeRomain) * InitStadeRomain
        console.log(`La longueur du stade romain est donc de ${result} mètres`);
        process.exit(0);
    })
}

function Doigt(result) {
    rl.question('Quel est la taille de votre doigt ? ', (answerDoigt) => {
        result = (answerDoigt) * InitDoigt
        console.log(`La longueur du doigt est donc de ${result} centimètres`);
        process.exit(0);
    })
}

function Palme(result) {
    rl.question('Quel est la taille de votre palme ? ', (answerPalme) => {
        result = (answerPalme) * InitPalme
        console.log(`La longueur de la palme est donc de ${result} centimètres`);
        process.exit(0);
    })
}

function Empan(result) {
    rl.question('Quel est la taille de votre empan romain ? ', (answerEmpan) => {
        result = (answerEmpan) * InitEmpan
        console.log(`La longueur de l'empan est donc de ${result} centimètres`);
        process.exit(0);
    })
}

rl.question('1 - Grand Roseau \n2 - Roseau \n3 - Brasse \n4 - Grande coudée \n5 - Coudée \n6 - Coudée courte \n7 - Stade romain \n8 - Doigt \n9 - Palme \n10 - Empan \n\nRéponse : ', (answerNumber) => {
    if (answerNumber == 1) {
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
    else if (answerNumber <10) {
        console.log('Veuillez rentrer une valeur valide.')
    }
})

rl.on('close', function () {
    console.log('Bye');
    process.exit(0);
})
