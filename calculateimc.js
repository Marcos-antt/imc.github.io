var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var female = document.getElementById("f");
var male = document.getElementById("m");

document.getElementById("submit").addEventListener("click", validadeForm);

function validadeForm() {
    if (age.value == '' || height.value == '' || weight.value == '' || (male.checked == false && female.checked == false)) {
        alert("Todos os campos devem ser preechidos!");
        document.getElementById("submit").removeEventListener("click", calculateIMC);
    } else {
        calculateIMC();
    }
}

function calculateIMC() {
    var arrayPerson = [age.value, height.value, weight.value];
    if (male.checked) {
        arrayPerson.push("female");
    } else if (female.checked) {
        arrayPerson.push("male");
    }

    var imc = Number(arrayPerson[2]) / (Number(arrayPerson[1]) / 100 * Number(arrayPerson[1]) / 100);


    var result = '';
    if (imc < 19) {
        result = 'Você esta abaixo do peso!';
    } else if (19.9 <= imc && imc <= 26) {
        result = 'Você esta no peso normal';
    } else if (26.1 <= imc && imc <= 27.55) {
        result = 'Você esta marginalmente acima do peso';
    } else if (27.55 <= imc && imc <= 31.7) {
        result = 'Você esta acima do peso';
    } else if (imc > 31.7) {
        result = 'Você esta obeso';

    }

    var h1 = document.createElement('h1');
    var h2 = document.createElement('h2');

    var t = document.createTextNode(result);
    var b = document.createTextNode('IMC: ');
    var r = document.createTextNode(parseFloat(imc).toFixed(2) + ' kg/m²');

    h1.appendChild(t);
    h2.appendChild(b);
    h2.appendChild(r);

    document.body.appendChild(h1);
    document.body.appendChild(h2);

    document.getElementById("submit").removeEventListener("click", calculateIMC);
    document.getElementById("submit").removeEventListener("click", validadeForm);
}

document.getElementById("submit").addEventListener("click", calculateIMC);