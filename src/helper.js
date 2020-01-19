export function obtenerDiferenciaYears(year) {
    return new Date().getFullYear() - year
}

export function calcularMarca(marca) {
    //Americano 15%
    //Asiatico 5%
    //Europeo 30%

    let incremento;

    switch (marca) {
        case "americano":
            incremento = 1.15;
            break;
        case "europeo":
            incremento = 1.30;
            break;
        case "asiatico":
            incremento = 1.05;
            break;
        default:
            break;
    }

    return incremento;
}

export function obtenerPlan(plan) {
    //Basico aumenta 20%
    //Completo aumenta 50%
    return(plan === 'basico') ? 1.20 : 1.50;
}

export function capitalize(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}