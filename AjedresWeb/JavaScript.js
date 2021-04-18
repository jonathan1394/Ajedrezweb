var Posicion,piesa,a1,a2,a3,a4,t1,t2,t3,t4,c1,c2,c3,c4,reyb,reyn,reinab,reinan,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16;
var cantClicks=0;

function CrearTablero(){
    $("#tablero").append("<table id="+'TableroT'+"></table>");
    for(var i=1;i<=8;i++){
    $("#TableroT").append("<tr id=f"+i+"></tr>");
        for(var j=1;j<=8;j++){
            if((j+i)%2==0)
            $("#f"+i).append("<td id="+i+""+j+" class='Negro'></tr>");
            else
            $("#f"+i).append("<td id="+i+""+j+" class='Blanco'></tr>");
        }
    }
    CreaJuego();
};

function CreaJuego(){
for(i=1;i<=8;i++){
    $("#2"+i).append("<h5 class='peonblanco' id=peon2"+i+">Peon</h5>");
    $("#7"+i).append("<h5 class='peonnegro' id=peon7"+i+">Peon</h5>");
};

$("#11").append("<h5 class='torreblanca' id=torreB1>Torre</h5>");
$("#18").append("<h5 class='torreblanca' id=torreB2>Torre</h5>");
$("#81").append("<h5 class='torreNegra' id=torreN1>Torre</h5>");
$("#88").append("<h5 class='torreNegra' id=torreN2>Torre</h5>");

$("#12").append("<h5 class='caballoblanca' id=caballoeB1>Caballo</h5>");
$("#17").append("<h5 class='caballoblanca' id=caballoB2>Caballo</h5>");
$("#82").append("<h5 class='caballoNegra' id=caballoN1>Caballo</h5>");
$("#87").append("<h5 class='caballoNegra' id=caballoN2>Caballo</h5>");

$("#13").append("<h5 class='alfilblanca' id=alfilB1>Alfil</h5>");
$("#16").append("<h5 class='alfilblanca' id=alfilB2>Alfil</h5>");
$("#83").append("<h5 class='alfilNegra' id=alfilN1>Alfil</h5>");
$("#86").append("<h5 class='alfilNegra' id=alfilN2>Alfil</h5>");

$("#14").append("<h5 class='reina' id=reinaB1>Reina</h5>");
$("#15").append("<h5 class='rey' id=rey>Rey</h5>");

$("#85").append("<h5 class='rey' id=rey>Rey</h5>");
$("#84").append("<h5 class='reina' id=ReinaN1>Reina</h5>");
}

function AsignarJugo(){
};

/*$(document).ready(function(){
    $("h5").click(function(){
        piesa=($(this));
        MoverPeones();
    });
});*/

$(document).ready(function(){
    cantClicks++;
    Posicion=undefined;
    piesa=undefined;
    $("td").click(function (){
        Posicion=($(this));
        piesa=($(this).children("h5"));
        //alert(piesa.attr("class"));
        MoverPeones();
    });
});

function MoverPeones(){
    var p=Posicion.attr("id");
    if((p*1)>=20 && (p*1)<=30 || (p*1)>=70 && (p*1)<=80){
        Peon_primermovimiento();
    }else{
        if((piesa.attr("class"))=="peonblanco"){
            $("#"+p).css("background-color","red");
            p=(p*1)+10;
            $("#"+p).css("background-color","green");
        }else{
            $("#"+p).css("background-color","red");
            p=(p*1)-10;
            $("#"+p).css("background-color","green");
        }
    }
};

function Peon_primermovimiento(){
    var p=Posicion.attr("id");
    if((piesa.attr("class"))=="peonblanco"){
        $("#"+p).css("background-color","red");
        p=(p*1)+10;
        $("#"+p).css("background-color","green");
        p=(p*1)+10;
        $("#"+p).css("background-color","green");
    }else{
        $("#"+p).css("background-color","red");
        p=(p*1)-10;
        $("#"+p).css("background-color","green");
        p=(p*1)-10;
        $("#"+p).css("background-color","green");
    }

}