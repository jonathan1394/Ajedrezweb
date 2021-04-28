var Posicion,piesa,a1,a2,a3,a4,t1,t2,t3,t4,c1,c2,c3,c4,reyb,reyn,reinab,reinan,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16;
var cantClicks=0;

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
    if(cantClicks>1){
        volverAtras();
    }

    Posicion=undefined;
    piesa=undefined;
    $("td").click(function (){
        Posicion=($(this));
        piesa=($(this).children("h5"));
    switch(piesa.attr("Class")){
        case ("peonblanco") : 
            Posibles_movimientos_Peones();
            break;
        case ("peonnegro"):
            Posibles_movimientos_Peones();
            break;

    }
    });
});


function volverAtras(){
    var p=Posicion.attr("id");
    if(piesa.attr("class")== "Negro"){
        $("#"+p).css("background-color","black");
        p=(p*1)+10;
        $("#"+p).css("background-color","white");
    }else{
        $("#"+p).css("background-color","white");
        p=(p*1)+10;
        $("#"+p).css("background-color","black");
    }
}