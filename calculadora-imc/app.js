const form = document.getElementById('form');

form.addEventListener('submit', function(evento){

    evento.preventDefault();

    const weight = document.getElementById('peso').value;
    const height = document.getElementById('altura').value;

    //console.log(`Valor de peso: ${weight}`);

    const valorIMC = ((weight)/(height*height)).toFixed(1);

    //alert(`Seu IMC é: ${valorIMC}`);

    document.getElementById('peso').value= ''; 
    document.getElementById('altura').value= ''; 

    if (valorIMC < 18.5){
        alert(`Seu peso: ${valorIMC}
               Está abaixo do normal
        `);
    }
    else if(valorIMC > 18.5 && valorIMC < 24.9){
        alert(`Seu peso: ${valorIMC}
              Está normal
        `);
    }
    else if(valorIMC <24.9 && valorIMC < 30){
        alert(`Seu peso: ${valorIMC}
               Sobrepeso
        `);
    }
    else
        alert('Sobrepeso');
})