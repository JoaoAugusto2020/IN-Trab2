$(document).ready(function() {
    $("#div-resultado").hide();

    // Função para formatar valor monetário
    function formatCurrency(value) {
        return parseFloat(value)
            .toFixed(2)
            .replace('.', ',')
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    }
    
    // Formulário Linear Simples
    $("#jams_formLinearSimples").on("submit", function(err) {
        err.preventDefault();

        $("#div-resultado").show();
        
        let jams_custoMedioMaterial = $("#jams_custoMedioMaterial").val();
        let jams_custoMedio = $("#jams_custoMedio").val();

        const a = 1.45087636948784;
        const b = 249.402316112605;

        jams_custoMedio = a*jams_custoMedioMaterial+b;

        $("#jams_custoMedio").text(`R$ ${formatCurrency(jams_custoMedio)}`);

        $([document.documentElement, document.body]).animate({
            scrollTop: $("#calculo").offset().top
        }, 100);

    });

    // Formulário Polinomial Simples
    $("#jams_formPolinomialSimples").on("submit", function(err) {
        err.preventDefault();

        $("#div-resultado").show();
        
        let jams_custoMedioMaterial = $("#jams_custoMedioMaterial").val();
        let jams_custoMedio;

        const a = 0.0000000000000000000664815263513947;
        const b = -0.0000000000000006092417519030690000;
        const c = 0.0000000000023721416774648400000000;
        const d = -0.0000000052153337889018700000000000;
        const e = 0.0000071889598243137800000000000000;
        const f = -0.0064743389449400900000000000000000;
        const g = 3.8222413503622800000000000000000000;
        const h = -1429.8147359148800000000000000000000000;
        const i = 308076.6460309670000000000000000000000000;
        const j = -29170103.1368495000000000000000000000000000;
        
        jams_custoMedio = 
            (jams_custoMedioMaterial ** 9)*a+
            (jams_custoMedioMaterial ** 8)*b+
            (jams_custoMedioMaterial ** 7)*c+
            (jams_custoMedioMaterial ** 6)*d+
            (jams_custoMedioMaterial ** 5)*e+
            (jams_custoMedioMaterial ** 4)*f+
            (jams_custoMedioMaterial ** 3)*g+
            (jams_custoMedioMaterial ** 2)*h+
            jams_custoMedioMaterial*i+
            j

        $("#jams_custoMedio").text(`R$ ${formatCurrency(jams_custoMedio)}`);

        $([document.documentElement, document.body]).animate({
            scrollTop: $("#calculo").offset().top
        }, 100);

    });

    // Formulário Polinomial Múltipla
    $("#jams_formPolinomialMultipla").on("submit", function(err) {
        err.preventDefault();

        $("#div-resultado").show();
        
        let jams_mes = $("#jams_mes").val();
        let jams_ano = $("#jams_ano").val();
        let jams_custoMedioMaterial = $("#jams_custoMedioMaterial").val();
        let jams_custoMedio;

        const a = 0.01101014891584780000000;  //mes
        const b = -0.10549532738168300000000; //ano
        const c = -0.00000000171648636676198; //custo
        const d = -0.34293155499914800000000 //mes
        const e = 853.08402679030700000000000 //ano
        const f = 0.00000670123676581738000 //custo
        const g = 3.39366945176686000000000 //mes
        const h = -2586912.76097031000000000000000 //ano
        const i = -0.00867244028970531000000 //custo
        const j = -8.15948644181764000000000 //mes
        const k = 3486497532.30607000000000000000000 //ano
        const l = 5.50389068204663000000000 //custo
        const m = -1762091021382.07000000000000000000000;

        //Alterar para a fórmula correta
        jams_custoMedio = 
            ((0.0110101489158478*(jams_mes ** 4))+(-0.105495327381683*(jams_ano ** 4))+(-0.00000000171648636676198*(jams_custoMedioMaterial ** 4))) +
            ((-0.342931554999148*(jams_mes ** 3))+(853.084026790307*(jams_ano ** 3))+(0.00000670123676581738*(jams_custoMedioMaterial ** 3))) +
            ((3.39366945176686*(jams_mes ** 2))+(-2586912.76097031*(jams_ano ** 2))+(-0.00867244028970531*(jams_custoMedioMaterial ** 2))) +
            ((-8.15948644181764*jams_mes)+(3486497532.30607*jams_ano)+(5.50389068204663*jams_custoMedioMaterial)) + -1762091021382.07;

        $("#jams_custoMedio").text(`R$ ${formatCurrency(jams_custoMedio)}`);

        $([document.documentElement, document.body]).animate({
            scrollTop: $("#calculo").offset().top
        }, 100);
    });

    // Botão de impressão
    $("#imprimir").on("click", function() {
        window.print();
    });
});