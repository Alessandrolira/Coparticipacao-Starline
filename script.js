function gerarPDF() {
    // Calcule a data de validade (10 dias após a data atual)
    const dataAtual = new Date();
    const dataValidade = new Date(dataAtual);
    dataValidade.setDate(dataValidade.getDate() + 10);

    // Formate a data de validade no formato desejado
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dataValidadeFormatada = dataValidade.toLocaleDateString('pt-BR', options);

    const element = document.getElementById('trechoParaPDF');

    // Adicione a data de validade ao conteúdo do PDF
    element.innerHTML += `<p>Data de validade: ${dataValidadeFormatada}</p>`;

    // Crie um elemento para a imagem do selo
    const seloImage = document.createElement('img');
    seloImage.src = './assets/Logo-Starline.png'; // Defina o caminho da imagem do selo
    seloImage.style.position = 'absolute';
    seloImage.style.width = '120px'
    seloImage.style.top = '20px'; // Ajuste a posição conforme necessário
    seloImage.style.right = '20px'; // Ajuste a posição conforme necessário

    // Adicione a imagem do selo ao conteúdo do elemento
    element.appendChild(seloImage);

    const optionsPDF = {
        filename: 'coparticipação.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(element).set(options).save().then(() => {
        // Remova os elementos de data de validade e selo após a geração do PDF
        element.removeChild(element.lastChild); // remove a imagem do selo
        element.lastChild.innerHTML = ''; // remove o parágrafo da data de validade
    });
}

//DADOS
const valoresProcedimentos = {
    Omint: {
        CS1: {
            Consulta: 75,
            Exames_Especiais: 170,
            Exames_Simples: 70,
            Internação: 500,
            Pronto_Socorro: 140,
            Terapia: 70
        },
        C16: {
            Consulta: 150,
            Exames_Especiais: 200,
            Exames_Simples: 80,
            Internação: 570,
            Pronto_Socorro: 320,
            Terapia: 90
        },
        C19: {
            Consulta: 170,
            Exames_Especiais: 350,
            Exames_Simples: 90,
            Internação: 700,
            Pronto_Socorro: 350,
            Terapia: 150
        }
    },
    Amil: {
        Amil_Fácil_110: {
            Consulta: 25,
            Exames_Especiais: 100,
            Exames_Simples: 20,
            Internação: 180,
            Pronto_Socorro: 50,
            Terapia: 50
        },
        Amil_Fácil_S60_e_S80: {
            Consulta: 25,
            Exames_Especiais: 100,
            Exames_Simples: 20,
            Internação: 180,
            Pronto_Socorro: 50,
            Terapia: 50
        },
        Amil_One_S2500: {
            Consulta: 70,
            Exames_Especiais: 150,
            Exames_Simples: 45,
            Internação: 450,
            Pronto_Socorro: 140,
            Terapia: 90
        },
        Amil_One_S6500_R1: {
            Consulta: 70,
            Exames_Especiais: 150,
            Exames_Simples: 45,
            Internação: 450,
            Pronto_Socorro: 140,
            Terapia: 100
        }, 
        Amil_S380: {
            Consulta: 30,
            Exames_Especiais: 110,
            Exames_Simples: 25,
            Internação: 200,
            Pronto_Socorro: 60,
            Terapia: 60
        },
        Amil_S450_e_S580: {
            Consulta: 30,
            Exames_Especiais: 110,
            Exames_Simples: 25,
            Internação: 220,
            Pronto_Socorro: 60,
            Terapia: 60
        },
        Amil_S750: {
            Consulta: 35,
            Exames_Especiais: 130,
            Exames_Simples: 35,
            Internação: 370,
            Pronto_Socorro: 70,
            Terapia: 70
        }
    },
    Bradesco: {
        FCEX_E_e_FCQX_A_: {
            Consulta: 30,
            Exames_Especiais: 120,
            Exames_Simples: 45,
            Internação: 210,
            Pronto_Socorro: 90,
            Terapia: 30
        },
        TNI1_E_e_TNI2_A_: {
            Consulta: 35,
            Exames_Especiais: 140,
            Exames_Simples: 52.50,
            Internação: 245,
            Pronto_Socorro: 105,
            Terapia: 35
        },
        TNME_E_e_TNMQ_A_: {
            Consulta: 30,
            Exames_Especiais: 120,
            Exames_Simples: 45,
            Internação: 210,
            Pronto_Socorro: 90,
            Terapia: 30
        },
        TNNI_E_TNMI_A_TNMM_A_e_TNMN_A_: {
            Consulta: 40,
            Exames_Especiais: 160,
            Exames_Simples: 60,
            Internação: 280,
            Pronto_Socorro: 120,
            Terapia: 40
        },
        TNP4_A_TNP6_A_e_TNP8_A_: {
            Consulta: 160,
            Exames_Especiais: 320,
            Exames_Simples: 160,
            Internação: 480,
            Pronto_Socorro: 320,
            Terapia: 160
        },
        TNWE_E_e_TNWQ_A_: {
            Consulta: 30,
            Exames_Especiais: 120,
            Exames_Simples: 45,
            Internação: 210,
            Pronto_Socorro: 90,
            Terapia: 30
        }
    },
    Porto_Seguro: {
        Bronze_Pro: {
            Consulta: 32,
            Exames_Especiais: 100,
            Exames_Simples: 30,
            Internação: 250,
            Pronto_Socorro: 102,
            Terapia: 40
        },
        Diamente_Pro_20_por_cento: {
            Consulta: 48,
            Exames_Especiais: 102,
            Exames_Simples: 49,
            Internação: 267,
            Pronto_Socorro: 128,
            Terapia: 51
        },
        Ouro_Pro: {
            Consulta: 44,
            Exames_Especiais: 125,
            Exames_Simples: 44,
            Internação: 400,
            Pronto_Socorro: 136,
            Terapia: 60
        },
        Prata_Pro: {
            Consulta: 34,
            Exames_Especiais: 109,
            Exames_Simples: 32,
            Internação: 300,
            Pronto_Socorro: 106,
            Terapia: 48
        }
    },
    Seguros_Unimed: {
        COMPACTO: {
            Consulta: 38,
            Exames_Especiais: 140,
            Exames_Simples: 50,
            Internação: 210,
            Pronto_Socorro: 90,
            Terapia: 60
        },
        COMPLETO: {
            Consulta: 45,
            Exames_Especiais: 150,
            Exames_Simples: 60,
            Internação: 280,
            Pronto_Socorro: 110,
            Terapia: 70
        },
        EFETIVO: {
            Consulta: 38,
            Exames_Especiais: 140,
            Exames_Simples: 50,
            Internação: 230,
            Pronto_Socorro: 90,
            Terapia: 60
        },
        SÊNIOR: {
            Consulta: 150,
            Exames_Especiais: 250,
            Exames_Simples: 80,
            Internação: 450,
            Pronto_Socorro: 300,
            Terapia: 140
        },
        SUPERIOR: {
            Consulta: 60,
            Exames_Especiais: 170,
            Exames_Simples: 70,
            Internação: 320,
            Pronto_Socorro: 130,
            Terapia: 80
        },
        SUPERIOR_PLUS: {
            Consulta: 60,
            Exames_Especiais: 170,
            Exames_Simples: 70,
            Internação: 360,
            Pronto_Socorro: 160,
            Terapia: 80
        }
    },
    Sulamerica: {
        Clássico: {
            Consulta: 40,
            Exames_Especiais: 150,
            Exames_Simples: 60,
            Internação: 320,
            Pronto_Socorro: 125,
            Terapia: 60
        },
        Direto: {
            Consulta: 40,
            Exames_Especiais: 150,
            Exames_Simples: 60,
            Internação: 320,
            Pronto_Socorro: 125,
            Terapia: 60
        },
        Especial: {
            Consulta: 75,
            Exames_Especiais: 170,
            Exames_Simples: 70,
            Internação: 500,
            Pronto_Socorro: 140,
            Terapia: 70
        },
        Exato: {
            Consulta: 40,
            Exames_Especiais: 150,
            Exames_Simples: 60,
            Internação: 320,
            Pronto_Socorro: 125,
            Terapia: 60
        },
        Executivo: {
            Consulta: 150,
            Exames_Especiais: 200,
            Exames_Simples: 80,
            Internação: 570,
            Pronto_Socorro: 320,
            Terapia: 90
        },
        Prestigie: {
            Consulta: 170,
            Exames_Especiais: 350,
            Exames_Simples: 90,
            Internação: 700,
            Pronto_Socorro: 350,
            Terapia: 150
        }
    }
}

const planosPorOperadora = {
    Omint: ["CS1", "C16", "C19"],
    Amil: ["Amil_Fácil_110", "Amil_Fácil_S60_e_S80", "Amil_One_S2500", "Amil_One_S6500_R1", "Amil_S380", "Amil_S450_e_S580", "Amil_S750"],
    Bradesco: ["FCEX_E_e_FCQX_A_", "TNI1_E_e_TNI2_A_", "TNME_E_e_TNMQ_A_", "TNNI_E_TNMI_A_TNMM_A_e_TNMN_A_", "TNP4_A_TNP6_A_e_TNP8_A_", "TNWE_E_e_TNWQ_A_"],
    Porto: ["Bronze_Pro", "Diamente_Pro_20_por_cento", "Ouro_Pro", "Prata_Pro",],
    Unimed: ["COMPACTO", "COMPLETO", "EFETIVO", "SÊNIOR", "SUPERIOR", "SUPERIOR_PLUS"],
    Sulmaerica: ["Clássico", "Direto", "Especial", "Exato", "Executivo", "Prestigie"]

}

function mostrarPlanos() {
    const planosContainer = document.getElementById("planosContainer");
    const planosCheckbox = document.getElementById("planosCheckbox");

    planosContainer.style.display = "block";
    planosCheckbox.innerHTML = "";

    const selectedOperadoras = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
        selectedOperadoras.push(checkbox.id.replace("checkbox", ""));
    });

    const planosToShow = [];

    selectedOperadoras.forEach(Operadora => {
        if (Operadora in planosPorOperadora) {
            planosToShow.push(...planosPorOperadora[Operadora]);
        }
    });

    const uniquePlanosToShow = [...new Set(planosToShow)];

    uniquePlanosToShow.forEach(plano => {
        const planoElement = document.createElement("input");
        planoElement.type = "checkbox";
        planoElement.value = plano;
        planoElement.id = plano;
        plano = plano.replace(/_/g, " ").replace(" por cento", "%")
        console.log(plano)
        const label = document.createElement("label");
        label.htmlFor = plano;
        label.className = "checkboxLabel"
        label.appendChild(document.createTextNode(plano));
        planosCheckbox.appendChild(planoElement);
        planosCheckbox.appendChild(label);
        planosCheckbox.appendChild(document.createElement("br"));
    });

    if(uniquePlanosToShow.length === 0){
        planosContainer.style.display = "none";
    }
}


function calcularCustoTotal(plano, consultas, examesEspeciais, examesSimples, internacoes, prontoSocorros, terapias) {
    let operadoraEncontrada = null;
    let procedimentos = null;

    // Pesquisa em todas as operadoras para encontrar o plano correspondente
    for (const operadora in valoresProcedimentos) {
        if (plano in valoresProcedimentos[operadora]) {
            operadoraEncontrada = operadora;
            procedimentos = valoresProcedimentos[operadora][plano];
            break;
        }
    }

    if (!operadoraEncontrada) {
        return "Plano não encontrado em nenhuma operadora.";
    }

    const custoConsultas = procedimentos.Consulta * consultas;
    const custoExamesEspeciais = procedimentos.Exames_Especiais * examesEspeciais;
    const custoExamesSimples = procedimentos.Exames_Simples * examesSimples;
    const custoInternacoes = procedimentos.Internação * internacoes;
    const custoProntoSocorros = procedimentos.Pronto_Socorro * prontoSocorros;
    const custoTerapias = procedimentos.Terapia * terapias;

    const custoTotal = custoConsultas + custoExamesEspeciais + custoExamesSimples + custoInternacoes + custoProntoSocorros + custoTerapias;

    console.log('teste: ' + procedimentos.Consulta)

    return {
        operadora: operadoraEncontrada,
        consulta: custoConsultas.toFixed(2),
        exames_especiais: custoExamesEspeciais.toFixed(2),
        exames_simples: custoExamesSimples.toFixed(2),
        internacao: custoInternacoes.toFixed(2),
        pronto_socorro: custoProntoSocorros.toFixed(2),
        terapias: custoTerapias.toFixed(2),
        custoTotal: custoTotal.toFixed(2),
        valorConsulta: procedimentos.Consulta.toFixed(2),
        valorExamesEspeciais: procedimentos.Exames_Especiais.toFixed(2),
        valorExamesSimples: procedimentos.Exames_Simples.toFixed(2),
        valorInternacao: procedimentos.Internação.toFixed(2),
        valorProntoSocorro: procedimentos.Pronto_Socorro.toFixed(2),
        valorTerapias: procedimentos.Terapia.toFixed(2)
    };
}

let tabelasAnteriores = []

function EnviarDados() {
    qtdConsultas = document.getElementById('qtd-consultas').value;
    qtdExamesEspeciais = document.getElementById('qtd-exames_especiais').value;
    qtdExamesSimples = document.getElementById('qtd-exames_simples').value;
    qtdInternacao = document.getElementById('qtd-internacao').value;
    qtdProntoSocorro = document.getElementById('qtd-pronto_socorro').value;
    qtdTerapia = document.getElementById('qtd-terapia').value;

    if (VerificaSeENumero(qtdConsultas) || VerificaSeENumero(qtdExamesEspeciais) || VerificaSeENumero(qtdExamesSimples) || VerificaSeENumero(qtdInternacao) || VerificaSeENumero(qtdProntoSocorro) || VerificaSeENumero(qtdTerapia)) {
        alert("Existe uma quantidade invalida (não é numero)")
        return;
    }

    document.getElementById('qtd-consultas-enviada').innerHTML = qtdConsultas;
    document.getElementById('qtd-exames_especiais-enviada').innerHTML = qtdExamesEspeciais;
    document.getElementById('qtd-exames_simples-enviada').innerHTML = qtdExamesSimples;
    document.getElementById('qtd-internacao-enviada').innerHTML = qtdInternacao;
    document.getElementById('qtd-pronto_socorro-enviada').innerHTML = qtdProntoSocorro;
    document.getElementById('qtd-terapia-enviada').innerHTML = qtdTerapia;

    // Seleciona todos os checkboxes dentro do formulário
    const checkboxes = document.querySelectorAll('#Operadoras input[type="checkbox"]:checked');

    // Cria um array para armazenar os valores dos checkboxes marcados
    let checkedValues = [];

    // Percorre a lista de checkboxes marcados e adiciona seus valores ao array
    checkboxes.forEach((checkbox) => {
        checkedValues.push(checkbox.value);
    });

    if (checkedValues.length > 5) {
        alert("Só é Permitido Até 5 Operadoras para apresentar o comparativo")
    }

    for (y = 0; y < tabelasAnteriores.length; y++){
        document.getElementById('tabelas' + y).innerHTML = ''
    }

    for (x = 0; x < checkedValues.length; x++) {

        console.log(checkboxes[0].value)

        const resultado = calcularCustoTotal(checkboxes[x].value, consultas, examesEspeciais, examesSimples, internacoes, prontoSocorros, terapias)

        const valorPagoConsulta = (qtdConsultas * resultado.valorConsulta).toFixed(2)
        const valorPagoExamesEspeciais = (qtdExamesEspeciais * resultado.valorExamesEspeciais).toFixed(2)
        const valorPagoExamesSimples = (qtdExamesSimples * resultado.valorExamesSimples).toFixed(2)
        const valorPagoInternacao = (qtdInternacao * resultado.valorInternacao).toFixed(2)
        const valorPagoProntoSocorro = (qtdProntoSocorro * resultado.valorProntoSocorro).toFixed(2)
        const valorPagoTerapias = (qtdTerapia * resultado.valorTerapias).toFixed(2)

        const TotalGasto = parseFloat(valorPagoConsulta) + parseFloat(valorPagoExamesEspeciais) + parseFloat(valorPagoExamesSimples) + parseFloat(valorPagoInternacao) + parseFloat(valorPagoProntoSocorro) + parseFloat(valorPagoTerapias)


        document.getElementById('tabelas' + x).innerHTML = `
        <table class="TabelaValores--Operadora">
                <div class="cabecalho-tabela">
                    <div class="cabecalho-tabela-texto">
                        <h1 class="Titulo__tabela-Operadora">${resultado.operadora.replace(/_/g, " ")}</h1>
                        <h2 class="Titulo__tabela-Plano">${checkboxes[x].value.replace(/_/g, " ").replace(" por cento", "%")}</h2>
                    </div>
                    <h1 class="valorTotalGasto">Total Gasto: R$ ${TotalGasto.toFixed(2).replace(".", ",")}</h1>
                </div>
                <tr class="
                ">
                    <td
                        class="TabelaValores--Operadora_Linhas-Procedimento-QTD-Cabecalho TabelaValores--Operadora_Linhas-Procedimento-Cabecalho-Procedimento">
                        Procedimentos</td>
                    <td
                        class="TabelaValores--Operadora_Linhas-Procedimento-QTD-Cabecalho TabelaValores--Operadora_Linhas-Procedimento-Cabecalho">
                        Valor Unitário</td>
                    <td
                        class="TabelaValores--Operadora_Linhas-Procedimento-QTD-Cabecalho TabelaValores--Operadora_Linhas-Procedimento-Cabecalho">
                        Valor Pago</td>
                </tr>
                <tr class="TabelaValores--Operadora_Linhas">
                    <td
                        class="TabelaValores--Operadora_Linhas-Procedimento-QTD TabelaValores--Operadora_Linhas-Procedimento">
                        Consultas</td>
                    <td class="TabelaValores--Operadora_Linhas-Procedimento-QTD TabelaValores--Operadora_Linhas-QTD">R$
                        ${resultado.valorConsulta.replace(".", ",")}</td>
                    <td class="TabelaValores--Operadora_Linhas-Procedimento-QTD TabelaValores--Operadora_Linhas-QTD">R$ ${valorPagoConsulta.replace(".", ",")}
                    </td>
                </tr>
                <tr class="TabelaValores--Operadora_Linhas">
                    <td
                        class="TabelaValores--Operadora_Linhas-Procedimento-QTD TabelaValores--Operadora_Linhas-Procedimento">
                        Exames Especiais</td>
                    <td class="TabelaValores--Operadora_Linhas-Procedimento-QTD TabelaValores--Operadora_Linhas-QTD">R$
                        ${resultado.valorExamesEspeciais.replace(".", ",")}</td>
                    <td class="TabelaValores--Operadora_Linhas-Procedimento-QTD TabelaValores--Operadora_Linhas-QTD">R$ ${valorPagoExamesEspeciais.replace(".", ",")}
                    </td>
                </tr>
                <tr class="TabelaValores--Operadora_Linhas">
                    <td
                        class="TabelaValores--Operadora_Linhas-Procedimento-QTD TabelaValores--Operadora_Linhas-Procedimento">
                        Exames Simples</td>
                    <td class="TabelaValores--Operadora_Linhas-Procedimento-QTD TabelaValores--Operadora_Linhas-QTD">R$
                        ${resultado.valorExamesSimples.replace(".", ",")}</td>
                    <td class="TabelaValores--Operadora_Linhas-Procedimento-QTD TabelaValores--Operadora_Linhas-QTD">R$ ${valorPagoExamesSimples.replace(".", ",")}
                    </td>
                </tr>
                <tr class="TabelaValores--Operadora_Linhas">
                    <td
                        class="TabelaValores--Operadora_Linhas-Procedimento-QTD TabelaValores--Operadora_Linhas-Procedimento">
                        Internação</td>
                    <td class="TabelaValores--Operadora_Linhas-Procedimento-QTD TabelaValores--Operadora_Linhas-QTD">R$
                        ${resultado.valorInternacao.replace(".", ",")}</td>
                    <td class="TabelaValores--Operadora_Linhas-Procedimento-QTD TabelaValores--Operadora_Linhas-QTD">R$ ${valorPagoInternacao.replace(".", ",")}
                    </td>
                </tr>
                <tr class="TabelaValores--Operadora_Linhas">
                    <td
                        class="TabelaValores--Operadora_Linhas-Procedimento-QTD TabelaValores--Operadora_Linhas-Procedimento">
                        Pronto Socorro</td>
                    <td class="TabelaValores--Operadora_Linhas-Procedimento-QTD TabelaValores--Operadora_Linhas-QTD">R$
                        ${resultado.valorProntoSocorro.replace(".", ",")}</td>
                    <td class="TabelaValores--Operadora_Linhas-Procedimento-QTD TabelaValores--Operadora_Linhas-QTD">R$ ${valorPagoProntoSocorro.replace(".", ",")}
                    </td>
                </tr>
                <tr class="TabelaValores--Operadora_Linhas">
                    <td
                        class="TabelaValores--Operadora_Linhas-Procedimento-QTD TabelaValores--Operadora_Linhas-Procedimento">
                        Terapia</td>
                    <td class="TabelaValores--Operadora_Linhas-Procedimento-QTD TabelaValores--Operadora_Linhas-QTD">R$
                        ${resultado.valorTerapias.replace(".", ",")}</td>
                    <td class="TabelaValores--Operadora_Linhas-Procedimento-QTD TabelaValores--Operadora_Linhas-QTD">R$ ${valorPagoTerapias.replace(".", ",")}
                    </td>
                </tr>
            </table>
            <hr class="separadorDetabelas">`
    }

    tabelasAnteriores = checkedValues
}

function VerificaSeENumero(valor) {
    if (isNaN(valor)) {
        return true
    } else {
        return false
    }
}



// Exemplo de uso:
const plano = 'FCEX_E_e_FCQX_A_';
const consultas = 2;
const examesEspeciais = 4;
const examesSimples = 6;
const internacoes = 8;
const prontoSocorros = 9;
const terapias = 10;
