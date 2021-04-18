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
};

function VasiarTablero(){
    for(var i=1;i<=8;i++){
        for(var j=1;j<=8;j++){
            if((j+i)%2==0)
            $("#"+i+j).css("background-color","black");
            else
            $("#"+i+j).css("background-color","white");;
        }
    }
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
