function myFunction1(){
    alert("El Museo Picasso de París (en francés, Musée Picasso-Paris) está localizado en el denominado Hôtel Salé situado en la calle Thorigny de París, Francion Contiene obras de Picasso de todas las épocas y de todas las técnicas, aunque es particularmente rica su colección de esculturas. Las obras fueron seleccionadas en 1979 entre las de propiedad de la familia Picasso como manera de pago del impuesto de sucesión al Estado francés y según una ley de 1968 que permitía pagar este impuesto en obras de arte en lugar de dinero (bajo la forma de dation o dación). A la muerte de su viuda Jacqueline Picasso en 1990 se produjo otra nueva dación.2​ Con el tiempo, la colección se ha ido incrementando también con adquisiciones y donaciones.");
}

function myFunction2(){
    alert("Su libertad estilística hizo que pasara de un estilo a otro sin transición, Su genio fue el material principal de su arte: en apenas segundos podía hacer una obra maestra. Representaba la rama del arte contemporáneo más física, la necesidad de pintar, de crear de forma material. Fue también celebridad: la fama y el éxito económico, pero también el reconocimiento artístico ya que el era siempre el mejor");
}

function myFunction3() {
    alert("La imagen de su madre fue ejecutada de una manera brillante. En este mismo año, el joven genio realizó uno de sus primeros autorretratos. En febrero de 2013 los expertos del Museo Picasso de Barcelona se encontraron con un dibujo de carbón en la parte posterior de esta obra. Ahí se puede ver a un hombre con una pipa. Después de examinarlo, los restauradores se dieron cuenta de que es una de las primeras obras de Pablo Picasso, hecha en su temprana adolescencia. ")
}
function myFunction4() {
    let name = prompt('¿Cuál es tu nombre?');
    alert('¡Hola ' + name + ', encantado de verte en el museo!, sigue explorando');
}

function myFunction5(){
    alert("Terminó su primer cuadro con 9 años,pintó el cuadro más caro del mundo,estaba obsesionado con sus obras,fue acusado de robar la Mona Lisa,El Guernica, fuera de España hasta el fin del Franquismo ya que es la obra más reconocida del artista y un homenaje a la causa republicana. El Guernica se mantuvo en el Museo de Arte de Nueva York desde 1940, pero por petición del propio Picasso, volvió a España cuando finalizó la época franquista española.")
}


let museum = new Museum();
museum.RibbonSeparatorMuseum();

const artPieces = museum.getPieces();

function showInfoByClickButton(){
    console.log("Hola es una gran cuadro no crees?")
  alert(artPieces[0].getDescription())
};

//event onblur allows to return a value as uppercase to the input
function mayus() {
    let answer = document.getElementById("focus");

    return answer.value = answer.value.toUpperCase();
    
}

//The on focus event is applied to fill the box with a color and change the text color
function showFocus(foc) {
    foc.style.background = "salmon";
    foc.style.color = "white";
    
}


function validateResponse() {
    let answer = document.getElementById("focus").value;
    
    if (answer != "GUITARRISTA") {
        alert("¡OH NO,TE EQUIVOCASTE")
    } else {
        alert("ES LA CORRECTA, ¡ERES EL MEJOR!")
        
    }
    
}










