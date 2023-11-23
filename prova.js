//função
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

// variáveis
var continuar = true;
var usuariosColetados = 0;
var maiorIMC = -1;
var usuarioMaiorIMC;
var somaIMCs = 0;

while (continuar) {
    var peso = parseFloat(prompt("Digite seu peso em kg:"));

    // checar se o botão cancelar foi pressionado
    if (isNaN(peso)) {
        alert("Operação encerrada. Gerando resumo...");

        // verificar se é válido as solicitações dos usuários para gerar o resumo (no mínimo 1)
        if (usuariosColetados > 0) {
            var mediaIMC = somaIMCs / usuariosColetados;
            alert("Resumo:\n" +
                "Usuários coletados: " + usuariosColetados + "\n" +
                "Maior IMC: " + maiorIMC.toFixed(2) + " (Usuário: " + usuarioMaiorIMC + ")\n" +
                "Média dos IMCs: " + mediaIMC.toFixed(2));
        } else {
            alert("Nenhum usuário coletado. Programa inválido.");
        }

        continuar = false;
        break;
    }

    var altura = parseFloat(prompt("Digite sua altura em metros (usando ponto, ex: 1.74):"));

    // checar se o botão cancelar foi pressionado
    if (isNaN(altura)) {
        alert("Operação encerrada. Gerando resumo...");

        if (usuariosColetados > 0) {
            var mediaIMC = somaIMCs / usuariosColetados;
            alert("Resumo:\n" +
                "Usuários coletados: " + usuariosColetados + "\n" +
                "Maior IMC: " + maiorIMC.toFixed(2) + " (Usuário: " + usuarioMaiorIMC + ")\n" +
                "Média dos IMCs: " + mediaIMC.toFixed(2));
        } else {
            alert("Nenhum usuário coletado. Programa encerrado.");
        }

        continuar = false;
        break;
    }

    var imc = calcularIMC(peso, altura);

    if (imc > maiorIMC) {
        maiorIMC = imc;
        usuarioMaiorIMC = (usuariosColetados + 1);
    }

    somaIMCs += imc;
    usuariosColetados++;

    //classificações do imc
    
    if (imc < 18.5) {
        alert("Abaixo do peso normal");
    } else if (imc >= 18.5 && imc <= 24.9) {
        alert("Peso normal");
    } else if (imc >= 25 && imc <= 29.9) {
        alert("Excesso de peso");
    } else if (imc >= 30 && imc <= 34.9) {
        alert("Obesidade classe 1");
    } else if (imc >= 35 && imc <= 39.9) {
        alert("Obesidade classe 2");
    } else {
        alert("Obesidade classe 3");
    }
}
