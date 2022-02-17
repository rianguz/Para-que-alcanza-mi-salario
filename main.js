// Comparación de salario y artículos:

let resultado = document.getElementById("results");

function calculateEmpanadas(){
    let salario = (document.getElementById("inputSalary")).value;
    salario = parseInt(salario);
    const result = Math.round(salario / 1500);
    resultado.innerText = "Con tu salario de: " + salario + " podrías comprar " + result + " empanadas";
}

function calculateBurguers(){
    let salario = (document.getElementById("inputSalary")).value;
    salario = parseInt(salario);
    const result = Math.round(salario / 12000);
    resultado.innerText = "Con tu salario de: " + salario + " podrías comprar " + result + " hamburguesas";
}

function calculatePasajes(){
    let salario = (document.getElementById("inputSalary")).value;
    salario = parseInt(salario);
    const result = Math.round(salario / 2650);
    resultado.innerText = "Con tu salario de: " + salario + " podrías comprar " + result + " pasajes de Transmilenio";
}

function calculatePetacos(){
    let salario = (document.getElementById("inputSalary")).value;
    salario = parseInt(salario);
    let result = Math.round(salario / 65000);
    resultado.innerText = "Con tu salario de: " + salario + " podrías comprar " + result + " petacos de cerveza";
}

// Aspiraciones

function calculateCasa(){
    let percent = parseInt(document.getElementById("percentSalary").value);
    let costCasa = 165000000;
    const years = parseInt(document.getElementById("timeToPay").value);
    const interesAnual = 11 / 100;
    let printResult = (document.getElementById("needToEarn"));

    let valorInteres = (costCasa * interesAnual) * years;
    let cuotaMensual = (costCasa / (years * 12)) + (valorInteres / (years * 12));
    cuotaMensual = Math.round(cuotaMensual);
    console.log(cuotaMensual);
    costCasa = costCasa + valorInteres;
    let salarioAGanar = (costCasa / (years * 12)) / (percent / 100);
    salarioAGanar = Math.round(salarioAGanar);

    printResult.innerHTML = "Para poder comprar una casa de 165 millones* a un interés del 11% anual, en un plazo de " + years + " años, ahorrando solo el " + percent + " % de tu sueldo, deberás tener un salario de " + salarioAGanar + " al mes y pagarías una cuota de aproximadamente " + cuotaMensual + " mensual.";
}

function calculateCarro(){
    let percent = parseInt(document.getElementById("percentSalary").value);
    let costCar = 49990000;
    const years = parseInt(document.getElementById("timeToPay").value);
    const interesAnual = 10 / 100;
    let printResult = (document.getElementById("needToEarn"));

    let valorInteres = (costCar * interesAnual) * years;
    let cuotaMensual = (costCar / (years * 12)) + (valorInteres / (years * 12));
    cuotaMensual = Math.round(cuotaMensual);
    console.log(cuotaMensual);
    costCar = costCar + valorInteres;
    let salarioAGanar = (costCar / (years * 12)) / (percent / 100);
    salarioAGanar = Math.round(salarioAGanar);

    printResult.innerHTML = "Para poder comprar un carro Chevrolet Joy Sedan 2022** a un interés del 10% anual, en un plazo de " + years + " años, ahorrando solo el " + percent + " % de tu sueldo, deberás tener un salario de " + salarioAGanar + " al mes y pagarías una cuota de aproximadamente " + cuotaMensual + " mensual.";
}

function calculateViajeParis(){
    let percent = parseInt(document.getElementById("percentSalary").value);
    let costParisTravel = 8000000;
    const years = parseInt(document.getElementById("timeToPay").value);
    let printResult = (document.getElementById("needToEarn"));
    let cuotaMensual = costParisTravel / (years * 12);
    cuotaMensual = Math.round(cuotaMensual);
    console.log(cuotaMensual);
    let salarioAGanar = (costParisTravel / (years * 12)) / (percent / 100);
    salarioAGanar = Math.round(salarioAGanar);

    printResult.innerHTML = "Para poder llevar a cabo un viaje a París desde Colombia, aparte de tener tu pasaporte y los documentos necesesarios para la llegada a Francia deberás disponer de al menos 8 millones. Si tienes pensado ahorrar por " + years + " años para el viaje y quieres ahorrar para ello el " + percent + " % de tu sueldo, deberás tener un salario de " + salarioAGanar + " al mes, y pagar una cuota de " + cuotaMensual + " mensual.";
}