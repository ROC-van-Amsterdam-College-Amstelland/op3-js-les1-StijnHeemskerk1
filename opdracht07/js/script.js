var stop = "rood";
var maybe = "oranje";
var go = "groen";

var roodLichtStaatAan = false;
var oranjeLichtStaatAan = false;
var groenLichtStaatAan = false;

var lichtUit = "gray";
var lichtRood = "red";
var lichtOranje = "orange";
var lichtGroen = "green";

window.onload = function(){
    document.getElementById("left-light-top").innerHTML = stop;
    document.getElementById("left-light-middle").innerHTML = maybe;
    document.getElementById("left-light-bottom").innerHTML = go;

    document.getElementById("right-light-top").innerHTML = stop;
    document.getElementById("right-light-middle").innerHTML = maybe;
    document.getElementById("right-light-bottom").innerHTML = go;

    document.getElementById("left-stoplight-label").innerHTML = "A";
    document.getElementById("right-stoplight-label").innerHTML = "B";
}

function verkeerMagRijdenStoplichtB(booleanVerkeerMagRijden){
    if(booleanVerkeerMagRijden == true){
        document.getElementById("right-light-bottom").style.backgroundColor = lichtGroen;
        document.getElementById("right-light-top").style.backgroundColor = lichtUit;
    }
    else{
        document.getElementById("right-light-bottom").style.backgroundColor = lichtUit;
        document.getElementById("right-light-top").style.backgroundColor = lichtRood;
    }
}

function toggleRoodLicht(){
    if(roodLichtStaatAan == false){
        document.getElementById("left-light-top").style.backgroundColor = "red";
        roodLichtStaatAan = true;
        //JOUW CODE HIER
        document.getElementById("right-light-top").style.backgroundColor = "gray";
        document.getElementById("right-light-bottom").style.backgroundColor = "green";
        document.getElementById("left-light-bottom").style.backgroundColor = "gray";
    }
    else{
        document.getElementById("left-light-top").style.backgroundColor = "gray";
        roodLichtStaatAan = false;
        //JOUW CODE HIER
        document.getElementById("right-light-bottom").style.backgroundColor = "gray";
    }
}

function toggleOranjeLicht(){
    if(oranjeLichtStaatAan == false){
        document.getElementById("left-light-middle").style.backgroundColor = "orange";
        oranjeLichtStaatAan = true;
    }
    else{
        document.getElementById("left-light-middle").style.backgroundColor = "gray";
        oranjeLichtStaatAan = false;
    }
}

function toggleGroenLicht(){
    if(groenLichtStaatAan == false){
        document.getElementById("left-light-bottom").style.backgroundColor = "green";
        groenLichtStaatAan = true;
        //JOUW CODE HIER
        document.getElementById("right-light-top").style.backgroundColor = "red";
        document.getElementById("right-light-bottom").style.backgroundColor = "gray";
        document.getElementById("left-light-top").style.backgroundColor = "gray";
    }
    else{
        document.getElementById("left-light-bottom").style.backgroundColor = "gray";
        groenLichtStaatAan = false;
        //JOUW CODE HIER
        document.getElementById("right-light-top").style.backgroundColor = "gray";
    }
}
