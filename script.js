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
    Alice: {
        Equilíbrio: {
            Consulta: 45,
            Exames_Especiais: 90,
            Exames_Simples: 10,
            Internação: 210,
            Pronto_Socorro: 60,
            Terapia: 35
        },
        Conforto: {
            Consulta: 70,
            Exames_Especiais: 100,
            Exames_Simples: 15,
            Internação: 280,
            Pronto_Socorro: 70,
            Terapia: 45
        },
        Exclusivo: {
            Consulta: 100,
            Exames_Especiais: 150,
            Exames_Simples: 30,
            Internação: 440,
            Pronto_Socorro: 110,
            Terapia: 60
        }
    },
    Omint: {
        SC1: {
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
        FECXespcFCER_E_e_FQCXespcFCQR_A_: {
            Consulta: 30,
            Exames_Especiais: 120,
            Exames_Simples: 45,
            Internação: 210,
            Pronto_Socorro: 90,
            Terapia: 30
        },
        TN1IespcTERI_E_e_TN2IespcTQRI_A_: {
            Consulta: 35,
            Exames_Especiais: 140,
            Exames_Simples: 52.50,
            Internação: 245,
            Pronto_Socorro: 105,
            Terapia: 35
        },
        TENMespcTRME_E_e_TQNMespcTRMQ_A_: {
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
        TPN4_A_TPN6_A_e_TCN6_A_e_TCN8_A_e_TPN8_A_e_TCNX_A_: {
            Consulta: 160,
            Exames_Especiais: 320,
            Exames_Simples: 160,
            Internação: 480,
            Pronto_Socorro: 320,
            Terapia: 160
        },
        TNEWespcTRWE_E_e_TNQWespcTRWQ_A_: {
            Consulta: 30,
            Exames_Especiais: 120,
            Exames_Simples: 45,
            Internação: 210,
            Pronto_Socorro: 90,
            Terapia: 30
        }
    },
    Porto_Seguro: {
        LINHA_PRO_Bronze_Pro_10_por_cento: {
            Consulta: 11,
            Exames_Especiais: 34,
            Exames_Simples: 20,
            Internação: 125,
            Pronto_Socorro: 34,
            Terapia: 27
        },
        LINHA_PRO_Bronze_Pro_20_por_cento: {
            Consulta: 22,
            Exames_Especiais: 68,
            Exames_Simples: 20,
            Internação: 167,
            Pronto_Socorro: 67,
            Terapia: 27
        },
        LINHA_PRO_Bronze_Pro_30_por_cento: {
            Consulta: 32,
            Exames_Especiais: 102,
            Exames_Simples: 30,
            Internação: 250,
            Pronto_Socorro: 100,
            Terapia: 40
        },
        LINHA_PRO_Diamente_Pro_10_por_cento: {
            Consulta: 24,
            Exames_Especiais: 64,
            Exames_Simples: 49,
            Internação: 200,
            Pronto_Socorro: 51,
            Terapia: 51
        },
        LINHA_PRO_Diamente_Pro_20_por_cento: {
            Consulta: 48,
            Exames_Especiais: 128,
            Exames_Simples: 49,
            Internação: 267,
            Pronto_Socorro: 102,
            Terapia: 51
        },
        LINHA_PRO_Ouro_Pro_10_por_cento: {
            Consulta: 15,
            Exames_Especiais: 45,
            Exames_Simples: 30,
            Internação: 200,
            Pronto_Socorro: 42,
            Terapia: 40
        },
        LINHA_PRO_Ouro_Pro_20_por_cento: {
            Consulta: 29,
            Exames_Especiais: 91,
            Exames_Simples: 30,
            Internação: 267,
            Pronto_Socorro: 83,
            Terapia: 40
        },
        LINHA_PRO_Ouro_Pro_30_por_cento: {
            Consulta: 44,
            Exames_Especiais: 136,
            Exames_Simples: 44,
            Internação: 400,
            Pronto_Socorro: 125,
            Terapia: 60
        },
        LINHA_PRO_Prata_Pro_10_por_cento: {
            Consulta: 12,
            Exames_Especiais: 36,
            Exames_Simples: 22,
            Internação: 150,
            Pronto_Socorro: 36,
            Terapia: 32
        },
        LINHA_PRO_Prata_Pro_20_por_cento: {
            Consulta: 23,
            Exames_Especiais: 71,
            Exames_Simples: 22,
            Internação: 200,
            Pronto_Socorro: 72,
            Terapia: 32
        },
        LINHA_PRO_Prata_Pro_30_por_cento: {
            Consulta: 34,
            Exames_Especiais: 106,
            Exames_Simples: 32,
            Internação: 300,
            Pronto_Socorro: 109,
            Terapia: 48
        },
        LINHA_TRADICIONAL_Bronze_20_por_cento: {
            Consulta: 22,
            Exames_Especiais: 67,
            Exames_Simples: 20,
            Internação: 167,
            Pronto_Socorro: 68,
            Terapia: 27
        },
        LINHA_TRADICIONAL_Bronze_30_por_cento: {
            Consulta: 32,
            Exames_Especiais: 100,
            Exames_Simples: 30,
            Internação: 250,
            Pronto_Socorro: 102,
            Terapia: 40
        },
        LINHA_TRADICIONAL_Prata_20_por_cento: {
            Consulta: 23,
            Exames_Especiais: 72,
            Exames_Simples: 22,
            Internação: 200,
            Pronto_Socorro: 71,
            Terapia: 32
        },
        LINHA_TRADICIONAL_Prata_30_por_cento: {
            Consulta: 34,
            Exames_Especiais: 109,
            Exames_Simples: 32,
            Internação: 300,
            Pronto_Socorro: 106,
            Terapia: 48
        },
        LINHA_TRADICIONAL_Ouro_Mais_20_por_cento: {
            Consulta: 29,
            Exames_Especiais: 83,
            Exames_Simples: 30,
            Internação: 267,
            Pronto_Socorro: 91,
            Terapia: 40
        },
        LINHA_TRADICIONAL_Ouro_Mais_30_por_cento: {
            Consulta: 44,
            Exames_Especiais: 125,
            Exames_Simples: 44,
            Internação: 400,
            Pronto_Socorro: 136,
            Terapia: 60
        },
        LINHA_TRADICIONAL_Ouro_Max_20_por_cento: {
            Consulta: 48,
            Exames_Especiais: 102,
            Exames_Simples: 49,
            Internação: 267,
            Pronto_Socorro: 128,
            Terapia: 51
        },
        LINHA_TRADICIONAL_Ouro_Max_30_por_cento: {
            Consulta: 73,
            Exames_Especiais: 153,
            Exames_Simples: 73,
            Internação: 400,
            Pronto_Socorro: 192,
            Terapia: 76
        },
        LINHA_TRADICIONAL_Diamante_R1_20_por_cento: {
            Consulta: 74,
            Exames_Especiais: 151,
            Exames_Simples: 66,
            Internação: 367,
            Pronto_Socorro: 220,
            Terapia: 80
        },
        LINHA_TRADICIONAL_Diamante_R1_30_por_cento: {
            Consulta: 111,
            Exames_Especiais: 227,
            Exames_Simples: 98,
            Internação: 550,
            Pronto_Socorro: 330,
            Terapia: 120
        },
        LINHA_TRADICIONAL_Diamante_R2_20_por_cento: {
            Consulta: 135,
            Exames_Especiais: 242,
            Exames_Simples: 111,
            Internação: 400,
            Pronto_Socorro: 160,
            Terapia: 94
        },
        LINHA_TRADICIONAL_Diamante_R2_30_por_cento: {
            Consulta: 202,
            Exames_Especiais: 363,
            Exames_Simples: 166,
            Internação: 600,
            Pronto_Socorro: 240,
            Terapia: 140
        },
        LINHA_PORTO_SAUDE_P200_20_por_cento: {
            Consulta: 22,
            Exames_Especiais: 67,
            Exames_Simples: 20,
            Internação: 167,
            Pronto_Socorro: 68,
            Terapia: 27
        },
        LINHA_PORTO_SAUDE_P200_30_por_cento: {
            Consulta: 32,
            Exames_Especiais: 100,
            Exames_Simples: 30,
            Internação: 250,
            Pronto_Socorro: 102,
            Terapia: 40
        },
        LINHA_PORTO_SAUDE_P300_20_por_cento: {
            Consulta: 23,
            Exames_Especiais: 72,
            Exames_Simples: 22,
            Internação: 200,
            Pronto_Socorro: 71,
            Terapia: 32
        },
        LINHA_PORTO_SAUDE_P300_30_por_cento: {
            Consulta: 34,
            Exames_Especiais: 109,
            Exames_Simples: 32,
            Internação: 300,
            Pronto_Socorro: 106,
            Terapia: 48
        },
        LINHA_PORTO_SAUDE_P400_20_por_cento: {
            Consulta: 29,
            Exames_Especiais: 83,
            Exames_Simples: 30,
            Internação: 267,
            Pronto_Socorro: 91,
            Terapia: 40
        },
        LINHA_PORTO_SAUDE_P400_30_por_cento: {
            Consulta: 44,
            Exames_Especiais: 125,
            Exames_Simples: 44,
            Internação: 400,
            Pronto_Socorro: 136,
            Terapia: 60
        },
        LINHA_PORTO_SAUDE_P450_20_por_cento: {
            Consulta: 48,
            Exames_Especiais: 102,
            Exames_Simples: 49,
            Internação: 267,
            Pronto_Socorro: 128,
            Terapia: 51
        },
        LINHA_PORTO_SAUDE_P450_30_por_cento: {
            Consulta: 73,
            Exames_Especiais: 153,
            Exames_Simples: 73,
            Internação: 400,
            Pronto_Socorro: 192,
            Terapia: 76
        },
        LINHA_PORTO_SAUDE_P500_20_por_cento: {
            Consulta: 74,
            Exames_Especiais: 151,
            Exames_Simples: 66,
            Internação: 367,
            Pronto_Socorro: 220,
            Terapia: 80
        },
        LINHA_PORTO_SAUDE_P500_30_por_cento: {
            Consulta: 111,
            Exames_Especiais: 227,
            Exames_Simples: 98,
            Internação: 550,
            Pronto_Socorro: 330,
            Terapia: 120
        },
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
            Consulta: 41.30,
            Exames_Especiais: 154.89,
            Exames_Simples: 61.96,
            Internação: 330.43,
            Pronto_Socorro: 129.08,
            Terapia: 61.96
        },
        Direto: {
            Consulta: 30.98,
            Exames_Especiais: 123.91,
            Exames_Simples: 51.53,
            Internação: 278.80,
            Pronto_Socorro: 92.93,
            Terapia: 51.63
        },
        Especial: {
            Consulta: 77.45,
            Exames_Especiais: 174.54,
            Exames_Simples: 72.28,
            Internação: 516.30,
            Pronto_Socorro: 144.56,
            Terapia: 72.28
        },
        Exato: {
            Consulta: 41.30,
            Exames_Especiais: 154.89,
            Exames_Simples: 61.96,
            Internação: 330.43,
            Pronto_Socorro: 129.08,
            Terapia: 61.96
        },
        Executivo: {
            Consulta: 154.89,
            Exames_Especiais: 206.52,
            Exames_Simples: 82.61,
            Internação: 588.58,
            Pronto_Socorro: 330.43,
            Terapia: 92.93
        },
        Prestigie: {
            Consulta: 175.54,
            Exames_Especiais: 361.41,
            Exames_Simples: 92.93,
            Internação: 722.82,
            Pronto_Socorro: 361.41,
            Terapia: 154.82
        }
    },
    NotreDame_Intermedica: {
        Ambulatorial: {
            Consulta: 37.01,
            Exames_Especiais: 106,
            Exames_Simples: 15.90,
            Internação: 185,
            Pronto_Socorro: 53,
            Terapia: 37.01
        },
        Smart_150_ao_200_UP: {
            Consulta: 37.01,
            Exames_Especiais: 106,
            Exames_Simples: 15.90,
            Internação: 185,
            Pronto_Socorro: 53,
            Terapia: 37.01
        },
        Smart_300_ao_500: {
            Consulta: 37.01,
            Exames_Especiais: 106,
            Exames_Simples: 15.90,
            Internação: 260,
            Pronto_Socorro: 53,
            Terapia: 37.01
        },
        Advance_600_e_700: {
            Consulta: 37.01,
            Exames_Especiais: 106,
            Exames_Simples: 15.90,
            Internação: 310,
            Pronto_Socorro: 53,
            Terapia: 37.01
        },
        Premium_900: {
            Consulta: 37.01,
            Exames_Especiais: 106,
            Exames_Simples: 15.90,
            Internação: 540,
            Pronto_Socorro: 53,
            Terapia: 37.01
        }
    }
}

const planosPorOperadora = {
    Alice: ["Equilíbrio", "Conforto", "Exclusivo"],
    Omint: ["SC1", "C16", "C19"],
    Amil: ["Amil_Fácil_110", "Amil_Fácil_S60_e_S80", "Amil_One_S2500", "Amil_One_S6500_R1", "Amil_S380", "Amil_S450_e_S580", "Amil_S750"],
    Bradesco: ["FECXespcFCER_E_e_FQCXespcFCQR_A_", "TN1IespcTERI_E_e_TN2IespcTQRI_A_", "TENMespcTRME_E_e_TQNMespcTRMQ_A_", "TNNI_E_TNMI_A_TNMM_A_e_TNMN_A_", "TPN4_A_TPN6_A_e_TCN6_A_e_TCN8_A_e_TPN8_A_e_TCNX_A_", "TNEWespcTRWE_E_e_TNQWespcTRWQ_A_"],
    Porto: ["LINHA_PORTO_SAUDE_P200", "LINHA_PORTO_SAUDE_P300", "LINHA_PORTO_SAUDE_P400", "LINHA_PORTO_SAUDE_P450", "LINHA_PORTO_SAUDE_P500", "LINHA_TRADICIONAL_Bronze", "LINHA_TRADICIONAL_Prata", "LINHA_TRADICIONAL_Ouro_Mais", "LINHA_TRADICIONAL_Ouro_Max", "LINHA_TRADICIONAL_Diamante_R1", "LINHA_TRADICIONAL_Diamante_R2", "LINHA_PRO_Bronze_Pro", "LINHA_PRO_Diamente_Pro", "LINHA_PRO_Ouro_Pro", "LINHA_PRO_Prata_Pro",],
    Unimed: ["COMPACTO", "COMPLETO", "EFETIVO", "SÊNIOR", "SUPERIOR", "SUPERIOR_PLUS"],
    Sulamerica: ["Clássico", "Direto", "Especial", "Exato", "Executivo", "Prestigie"],
    NotreDame_Intermedica: ["Ambulatorial", "Smart_150_ao_200_UP", "Smart_300_ao_500", "Advance_600_e_700", "Premium_900"]
}

const porcentagens = {
    LINHA_PORTO_SAUDE_P200: ["20_por_cento", "30_por_cento"],
    LINHA_PORTO_SAUDE_P300: ["20_por_cento", "30_por_cento"],
    LINHA_PORTO_SAUDE_P400: ["20_por_cento", "30_por_cento"],
    LINHA_PORTO_SAUDE_P450: ["20_por_cento", "30_por_cento"],
    LINHA_PORTO_SAUDE_P500: ["20_por_cento", "30_por_cento"],
    LINHA_TRADICIONAL_Bronze: ["20_por_cento", "30_por_cento"],
    LINHA_TRADICIONAL_Prata: ["20_por_cento", "30_por_cento"],
    LINHA_TRADICIONAL_Ouro_Mais: ["20_por_cento", "30_por_cento"],
    LINHA_TRADICIONAL_Ouro_Max: ["20_por_cento", "30_por_cento"],
    LINHA_TRADICIONAL_Diamante_R1: ["20_por_cento", "30_por_cento"],
    LINHA_TRADICIONAL_Diamante_R2: ["20_por_cento", "30_por_cento"],
    LINHA_PRO_Bronze_Pro: ["10_por_cento", "20_por_cento", "30_por_cento"],
    LINHA_PRO_Diamente_Pro: ["10_por_cento", "20_por_cento", "30_por_cento"],
    LINHA_PRO_Ouro_Pro: ["10_por_cento", "20_por_cento", "30_por_cento"],
    LINHA_PRO_Prata_Pro: ["10_por_cento", "20_por_cento"]
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
        planoElement.onchange = mostrarPorcentagem;
        plano = plano.replace(/_/g, " ").replace(" por cento", "%").replace(/espc/g, "/")
        const label = document.createElement("label");
        label.htmlFor = plano;
        label.className = "checkboxLabel"
        label.appendChild(document.createTextNode(plano));
        planosCheckbox.appendChild(planoElement);
        planosCheckbox.appendChild(label);
        planosCheckbox.appendChild(document.createElement("br"));
    });
}

function mostrarPorcentagem() {
    const porcentagemContainer = document.getElementById("porcentagemContainer");
    const porcentagemCheckbox = document.getElementById("porcentagemCheckbox");

    porcentagemContainer.style.display = "block";
    porcentagemCheckbox.innerHTML = "";

    const selectedPlanos = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
        selectedPlanos.push(checkbox.id.replace("checkbox", ""));
    });

    selectedPlanos.forEach(Plano => {
        if (Plano in porcentagens) {
            const planoLabel = document.createElement("label");
            planoLabel.className = "planoLabel";
            planoLabel.textContent = Plano.replace(/_/g, " ");
            porcentagemCheckbox.appendChild(planoLabel);

            const porcentagemWrapper = document.createElement("div");
            porcentagemWrapper.className = "porcentagemWrapper";
            porcentagemCheckbox.appendChild(porcentagemWrapper);

            porcentagens[Plano].forEach(porcentagem => {
                const porcentagemElement = document.createElement("input");
                porcentagemElement.type = "checkbox";
                porcentagemElement.value = Plano + '_' + porcentagem;
                porcentagemElement.id = porcentagem;
                const label = document.createElement("label");
                label.htmlFor = porcentagem;
                label.className = "checkboxLabel";
                label.appendChild(document.createTextNode(porcentagem.replace(/_/g, " ").replace(" por cento", "%")));
                const porcentagemItem = document.createElement("div");
                porcentagemItem.appendChild(porcentagemElement);
                porcentagemItem.appendChild(label);
                porcentagemWrapper.appendChild(porcentagemItem);
            });
        }
    });
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

    // Verificar se o plano possui coparticipação (contém "por_cento" no nome)
    const coparticipacao = plano.includes("por_cento") ? parseFloat(plano.split("_")[3]) : 0;
    const custoTotal = custoConsultas + custoExamesEspeciais + custoExamesSimples + custoInternacoes + custoProntoSocorros + custoTerapias + (coparticipacao * consultas);

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
        valorTerapias: procedimentos.Terapia.toFixed(2),
        coparticipacao: coparticipacao.toFixed(2)
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

    // Seleciona todas as operadoras selecionadas
    const checkboxes = document.querySelectorAll('#Operadoras input[type="checkbox"]:checked');
    const checkboxesPlanos = document.querySelectorAll('#Planos input[type="checkbox"]:checked');

    // Cria um array para armazenar os valores dos checkboxes marcados
    let checkedValues = [];
    let checkedValuesPlanos = [];

    // Percorre a lista de checkboxes marcados e adiciona seus valores ao array
    checkboxes.forEach((checkbox) => {
        checkedValues.push(checkbox.value);
    });

    checkboxesPlanos.forEach((checkbox) => {
        checkedValuesPlanos.push(checkbox.value);
        checkedValues.push(checkbox.value);
    });

    for (y = 0; y < 5; y++) {
        document.getElementById('tabelas' + y).innerHTML = ''
    }

    let = contar_porcentagem = 0
    var executou = 0

    let tabela_anterior = []

    for (let x = 0; x < checkedValues.length; x++) {

        executou = 0

        let resultado = calcularCustoTotal(checkedValues[x], consultas, examesEspeciais, examesSimples, internacoes, prontoSocorros, terapias);

        let valorPagoConsulta = (qtdConsultas * resultado.valorConsulta).toFixed(2);
        let valorPagoExamesEspeciais = (qtdExamesEspeciais * resultado.valorExamesEspeciais).toFixed(2);
        let valorPagoExamesSimples = (qtdExamesSimples * resultado.valorExamesSimples).toFixed(2);
        let valorPagoInternacao = (qtdInternacao * resultado.valorInternacao).toFixed(2);
        let valorPagoProntoSocorro = (qtdProntoSocorro * resultado.valorProntoSocorro).toFixed(2);
        let valorPagoTerapias = (qtdTerapia * resultado.valorTerapias).toFixed(2);

        let TotalGasto = parseFloat(valorPagoConsulta) + parseFloat(valorPagoExamesEspeciais) + parseFloat(valorPagoExamesSimples) + parseFloat(valorPagoInternacao) + parseFloat(valorPagoProntoSocorro) + parseFloat(valorPagoTerapias);

        for (let y = 0; y < checkedValuesPlanos.length; y++) {

            if (checkedValues[x] == checkedValuesPlanos[y].replace(/_\d+_por_cento/g, "")) {

                resultado = calcularCustoTotal(checkedValuesPlanos[y], consultas, examesEspeciais, examesSimples, internacoes, prontoSocorros, terapias);

                valorPagoConsulta = (qtdConsultas * resultado.valorConsulta).toFixed(2);
                valorPagoExamesEspeciais = (qtdExamesEspeciais * resultado.valorExamesEspeciais).toFixed(2);
                valorPagoExamesSimples = (qtdExamesSimples * resultado.valorExamesSimples).toFixed(2);
                valorPagoInternacao = (qtdInternacao * resultado.valorInternacao).toFixed(2);
                valorPagoProntoSocorro = (qtdProntoSocorro * resultado.valorProntoSocorro).toFixed(2);
                valorPagoTerapias = (qtdTerapia * resultado.valorTerapias).toFixed(2);

                TotalGasto = parseFloat(valorPagoConsulta) + parseFloat(valorPagoExamesEspeciais) + parseFloat(valorPagoExamesSimples) + parseFloat(valorPagoInternacao) + parseFloat(valorPagoProntoSocorro) + parseFloat(valorPagoTerapias);

                document.getElementById('tabelas' + contar_porcentagem).innerHTML = ` 
                <table class="TabelaValores--Operadora">
                        <div class="cabecalho-tabela">
                            <div class="cabecalho-tabela-texto">
                                <h1 class="Titulo__tabela-Operadora">${resultado.operadora.replace(/_/g, " ")}</h1>
                                <h2 class="Titulo__tabela-Plano">${checkedValuesPlanos[y].replace(/_/g, " ").replace(" por cento", "%")}</h2>
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
                    <hr class="separadorDetabelas">`;
                contar_porcentagem = contar_porcentagem + 1
                executou = 1

                tabela_anterior.push(checkedValuesPlanos[y].replace(/_/g, " ").replace(" por cento", "%"))
            }
        }   

            if (executou == 1) {
                executou = 0
                continue;
            }

            if (tabela_anterior.includes(checkedValues[x].replace(/_/g, " ").replace(" por cento", "%"))){
                continue;
            }

            resultado = calcularCustoTotal(checkedValues[x], consultas, examesEspeciais, examesSimples, internacoes, prontoSocorros, terapias);

            valorPagoConsulta = (qtdConsultas * resultado.valorConsulta).toFixed(2);
            valorPagoExamesEspeciais = (qtdExamesEspeciais * resultado.valorExamesEspeciais).toFixed(2);
            valorPagoExamesSimples = (qtdExamesSimples * resultado.valorExamesSimples).toFixed(2);
            valorPagoInternacao = (qtdInternacao * resultado.valorInternacao).toFixed(2);
            valorPagoProntoSocorro = (qtdProntoSocorro * resultado.valorProntoSocorro).toFixed(2);
            valorPagoTerapias = (qtdTerapia * resultado.valorTerapias).toFixed(2);

            TotalGasto = parseFloat(valorPagoConsulta) + parseFloat(valorPagoExamesEspeciais) + parseFloat(valorPagoExamesSimples) + parseFloat(valorPagoInternacao) + parseFloat(valorPagoProntoSocorro) + parseFloat(valorPagoTerapias);

            let atingiuLimitador = false

            if (resultado.operadora.replace(/_/g, " ") == "Seguros Unimed"){

                if(checkedValues[x].replace(/_/g, " ").replace(" por cento", "%").replace(/b/g, "/") == "COMPACTO"){
                    if (TotalGasto > 350.00) {
                        TotalGasto = 350.00
                        atingiuLimitador = true
                    }
                }
                if(checkedValues[x].replace(/_/g, " ").replace(" por cento", "%").replace(/b/g, "/") == "COMPLETO"){
                    if (TotalGasto > 400.00) {
                        TotalGasto = 400.00
                        atingiuLimitador = true
                    }
                }
                if(checkedValues[x].replace(/_/g, " ").replace(" por cento", "%").replace(/b/g, "/") == "EFETIVO"){
                    if (TotalGasto > 350.00) {
                        TotalGasto = 350.00
                        atingiuLimitador = true
                    }
                }
                if(checkedValues[x].replace(/_/g, " ").replace(" por cento", "%").replace(/b/g, "/") == "SÊNIOR"){
                    if (TotalGasto > 680.00) {
                        TotalGasto = 680.00
                        atingiuLimitador = true
                    }
                }
                if(checkedValues[x].replace(/_/g, " ").replace(" por cento", "%").replace(/b/g, "/") == "SUPERIOR"){
                    if (TotalGasto > 450.00) {
                        TotalGasto = 450.00
                        atingiuLimitador = true
                    }
                }
                if(checkedValues[x].replace(/_/g, " ").replace(" por cento", "%").replace(/b/g, "/") == "SUPERIOR PLUS"){
                    if (TotalGasto > 530.00) {
                        TotalGasto = 530.00
                        atingiuLimitador = true
                    }
                }
            }

            let HTML = `
                    <table class="TabelaValores--Operadora">
                            <div class="cabecalho-tabela">
                                <div class="cabecalho-tabela-texto">
                                    <h1 class="Titulo__tabela-Operadora">${resultado.operadora.replace(/_/g, " ")}</h1>
                                    <h2 class="Titulo__tabela-Plano">${checkedValues[x].replace(/_/g, " ").replace(" por cento", "%").replace(/espc/g, "/")}</h2>
                                </div>
                                <div id="limitadorMensal">
                                    ${atingiuLimitador == true? 
                                    '<h1 class="valorTotalGasto" style="color: red; text-align: right; display: block;" id="limitador">Limitador Mensal</h1>' 
                                    : ''}
                                    <h1 class="valorTotalGasto">Total Gasto: R$ ${TotalGasto.toFixed(2).replace(".", ",")}</h1>
                                </div>
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
                        <hr class="separadorDetabelas">`;
            contar_porcentagem = contar_porcentagem + 1
            tabelasAnteriores = checkedValues
            porcentagemAnteriores = checkedValuesPlanos

            console.log(resultado.operadora.replace(/_/g, " "))

            //Ta gerando na hora errada

            document.getElementById('tabelas' + contar_porcentagem).innerHTML = HTML
    }
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
