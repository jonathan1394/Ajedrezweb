var Posicion,piesa;

$(document).ready(function(){
    $("td").click(function (){
    Posicion=undefined;
    piesa=undefined;
    VasiarTablero();
    
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

function Mover(){
    if($(.))
}

function Posibles_movimientos_Peones(){
    var p=Posicion.attr("id");
    if((p*1)>=20 && (p*1)<=30 || (p*1)>=70 && (p*1)<=80){
        Peon_primermovimiento();
    }else{
        movimientos_posteriores_peones();
    }

}

function Peon_primermovimiento(){
    var p=Posicion.attr("id");
    if((piesa.attr("class"))=="peonblanco"){
        $("#"+p).css("background-color","red");
        p=(p*1)+10;
        $("#"+p).css("background-color","green");
        p=(p*1)+10;
        $("#"+p).css("background-color","green");
    }
    if((piesa.attr("class"))=="peonnegro"){
        $("#"+p).css("background-color","red");
        p=(p*1)-10;
        $("#"+p).css("background-color","green");
        p=(p*1)-10;
        $("#"+p).css("background-color","green");
    }

}

function movimientos_posteriores_peones(){
    var p=Posicion.attr("id");
    if((piesa.attr("class"))=="peonblanco"){
        $("#"+p).css("background-color","red");
        p=(p*1)+10;
        $("#"+p).css("background-color","green");
    }
    if(piesa.attr("class")=="peonnegro"){
        $("#"+p).css("background-color","red");
        p=(p*1)-10;
        $("#"+p).css("background-color","green");
    }
}

