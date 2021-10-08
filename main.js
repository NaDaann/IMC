const inputs = document.querySelectorAll(".input");
const CalcularIMC = document.getElementById('CalcularIMC');
const limparIMC = document.getElementById('limpar');


function CalcularIMCjuliana () {
    const nome = document.getElementById('nome').value;
    const calcularAltura = document.getElementById('calcularAltura').value;
    const calcularPeso = document.getElementById('calcularPeso').value;
    const resultado = document.getElementById('resultado');
    const resultado2 = document.getElementById('resultado2');

    if (nome !== '' && calcularAltura !== '' && calcularPeso !== '') {

        const calculoFInalIMC = (calcularPeso/(calcularAltura**2)).toFixed(2);
        
        let IMCfinal = '';

        if (calculoFInalIMC < 18.5){
			resultado2.style.color = "orange";
            IMCfinal = 'abaixo do peso.';
        }else if (calculoFInalIMC < 25) {
		resultado2.style.color = "green";
            IMCfinal = 'com o peso ideal. Parabéns!';
        }else if (calculoFInalIMC < 30){
			resultado2.style.color = "orange";
            IMCfinal = 'levemente acima do peso.';
        }else if (calculoFInalIMC < 35){
			resultado2.style.color = "Red";
            IMCfinal = 'com obesidade grau I.' ;
        }else if (calculoFInalIMC < 40){
			resultado2.style.color = "Red";
            IMCfinal = 'com obesidade grau II.';
        }else { 
			resultado2.style.color = "Red";
            IMCfinal = 'com obesidade grau III.';
        }
        resultado.textContent = `Olá, ${nome}!`;
        resultado2.textContent = `No momento presente, você está ${IMCfinal}`;


    }

}
CalcularIMC.addEventListener('click', CalcularIMCjuliana);


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
