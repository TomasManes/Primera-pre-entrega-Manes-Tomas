let nombre = prompt("Haz ingresado a la heladería Los Hermanos, por favor, introduzca su nombre.");
alert("Bienvenido/a ," + nombre + ".!A nuestra pagina web¡");


function mostrarCatalogo() {
    let totalCompra = 0;  // darle valor a la variable
    let totalOpciones;
    do {
        totalOpciones = prompt("Estos son los gustos especiales por kg:\n\n" +
            "1.  Super Dulce de leche  por kg- $8900/n" + 
            "33. Tramonatana mega dulce - $7600/n" +
            "51. Chololate 100% cacao - $8900/n" +
            "2.  Mascarpone super fresh - $10200 /n" + 
            "77. Pistacho extra verde - $8100 /n " +
            "Introduzca el numero del gusto que quiere (1.33.51.2.77) , o presione 'cancelar' para salir;   ");


            switch(totalOpciones){

                case "1":
                    totalCompra +=8900; //seria el precio del primer gusto SUPER DULCE DE LECHE
                    alert("¡¡Que buena eleccion !!");
                    break;
                    
                case"33":
                    totalCompra +=7600; // Seria el precio del segundo gusto TRAMONTANA MEGA DULCE
                    alert("¡¡Que buena eleccion!!");
                    break;
                
                case"51":
                    totalCompra +=8900; //Seria el precio del tercer gusto CHOCOLATE 100% CACAO
                    alert("¡¡Que buena eleccion!!");
                    break;

                case"2":
                    totalCompra +=10200;  //Seria el precio del cuarto gusto MASCARPONE SUPER FRESH
                    alert("¡¡Que buena eleccion!!");
                    break;
                
                case"77":
                    totalCompra +=8100  //Seria el precio del quinto gusto PISTACHO EXTRA VERDE
                    alert("¡¡Que buena eleccion!!");
                    break;
                
                case "cancerlar":
                    alert("Gracias por elegirnos.");
                    return;    //Termina aca la fuction

                    }
                    
        let seguirComprando = confirm ("¿Quiere algo mas?");
        if (!seguirComprando){
            alert("Gracias por elegir Heladeria Los Hermanos vuelva prono <;. Su total es de : $" + totalCompra);
            return;  
        }


    } while (true);

}
mostrarCatalogo();