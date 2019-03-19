//Funció per a convertir les monedes
//Funció sobrecarga
function conversor1(m1,m2){
    console.log("hey!");
    console.log(m1+"  "+m2);
    var moneda1 = m1 || document.getElementById("divisa1").value;
    var moneda2 = m2 || document.getElementById("divisa2").value;
        console.log(moneda1+"   "+moneda2);
        $.getJSON("js/divisa" + moneda1 +".json", function(data){
            var quantitat = document.getElementById("importe").value;
            console.log(quantitat);
            var resultat = Math.abs(quantitat * data["rates"][moneda2]);
            console.log(resultat);
            resultat = resultat.toFixed(2);
            console.log(resultat);
            document.getElementById("imports").value = resultat;
            
        });
}


//Funció per a convertir la segona entrada de monedes
function conversor2(m1,m2){
    var moneda1 = m1 || document.getElementById("divisa1").value;
    var moneda2 = m2 || document.getElementById("divisa2").value;
    console.log(moneda2+"   "+moneda1);
    $.getJSON("js/divisa" + moneda2 +".json", function(data){
        var quantitat = document.getElementById("imports").value;
        console.log(quantitat);
        var resultat = Math.abs(quantitat * data["rates"][moneda1]);
        console.log(resultat);
        resultat = resultat.toFixed(2);
        console.log(resultat);
        document.getElementById("importe").value = resultat;
    });
}

//Botó per intercambiar les posicions de divises
function canvi(){
    var moneda1 = document.getElementById("divisa1").value;
    var moneda2 = document.getElementById("divisa2").value;
    conversor1(moneda2,moneda1);
    document.getElementById("divisa1").value = moneda2;
    document.getElementById("divisa2").value = moneda1;
}
