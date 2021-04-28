var Posicion, piesa, Piesa_anterior;
var clicks = 0;


$(document).ready(function () {
    $("td").click(function () {
        Posicion = undefined;
        piesa = undefined;
        Posicion = ($(this));
        piesa = ($(this).children("h5"));
        if (clicks == 1) {
            mover_Peon(Piesa_anterior);
            clicks = 0
        }

        switch (piesa.attr("Class")) {
            case ("peonblanco"):
                VasiarTablero();
                Posibles_movimientos_Peones();
                Posible_comer();
                break;
            case ("peonnegro"):
                VasiarTablero();
                Posibles_movimientos_Peones();
                Posible_comer()
                break;

        }
        Piesa_anterior = piesa;
        clicks++;
    });
});

function mover_Peon(Anterior) {
    if (Posicion.css("background-color") == "rgb(0, 128, 0)") {
        var id = Posicion.attr("id");
        if (Anterior.attr("class") == 'peonblanco') {
            $("#" + id).append("<h5 class='peonblanco' id=peon" + id + ">Peon</h5>");
            Anterior.remove();
        }
        if (Anterior.attr("class") == 'peonnegro') {
            $("#" + id).append("<h5 class='peonnegro' id=peon" + id + ">Peon</h5>");
            Anterior.remove();
        }
    }
}

function Posibles_movimientos_Peones() {
    var p = Posicion.attr("id");
    if ((p * 1) >= 20 && (p * 1) <= 30 || (p * 1) >= 70 && (p * 1) <= 80) {
        Peon_primermovimiento();
    } else {
        movimientos_posteriores_peones();
    }

}

function Peon_primermovimiento() {
    var p = Posicion.attr("id");
    if ((piesa.attr("class")) == "peonblanco") {
        $("#" + p).css("background-color", "red");
        p = (p * 1) + 10;
        $("#" + p).css("background-color", "green");
        p = (p * 1) + 10;
        $("#" + p).css("background-color", "green");
    }
    if ((piesa.attr("class")) == "peonnegro") {
        $("#" + p).css("background-color", "red");
        p = (p * 1) - 10;
        $("#" + p).css("background-color", "green");
        p = (p * 1) - 10;
        $("#" + p).css("background-color", "green");
    }

}

function movimientos_posteriores_peones() {
    var p = Posicion.attr("id");
    if ((piesa.attr("class")) == "peonblanco") {
        $("#" + p).css("background-color", "red");
        p = (p * 1) + 10;
        $("#" + p).css("background-color", "green");
    }
    if (piesa.attr("class") == "peonnegro") {
        $("#" + p).css("background-color", "red");
        p = (p * 1) - 10;
        $("#" + p).css("background-color", "green");
    }
}

function Posible_comer() {
    var p = Posicion.attr("id");
if(p>20 && p<70){
    p=(p*1)+11;
    if ($("#" + p).children("h5").val !== null) {
        $("#" + p).css("background-color", "red");
    }
}

if(p<10){

}
}