//Decirle a JavaScript que se ejecute una vez que el documento o DOM se haya cargado completamente
$(document).ready(function () {
    //Recorre todos los enlaces o elementos que se encuentranen la clase .menu
    $('.menu a').each(function (index, elemento) {
        //Le voy a desaparecer al menú con una nueva posición vertical
        $(this).css({
            'top': '-200px'
        })
        //Voy a implementar una función para que cada uno de los elemtnos del menú aparezca con un efecto de desplazamiento
        $(this).animate({
            top: '0'
        }, 2000 + (index * 500))//El primer elemento se va a demorar 2000ms, el segundo elemento 2500ms y así sucesivamente cada uno de los elementos.
    })
    // Condición para aplicar animación , solo si el ancho de la pantalla es mayor a 800px
    if ($(window).width() > 800) {
        //Establezco estilos iniciales del texto dentro del header
        // Opacidad 0 (Invisible)
        //Margen superior en 0 (posicón que va a tener antes de la animación)
        $('header .texto').css({
            opacity: 0,
            marginTop: 0
        })
        //Aplico una animación para que el texto aparezca con un efecto de desplazamiento
        $('header .texto').animate({
            //Se haga visible
            opacity: 1,
            //se desplaza hacia arriba 5px
            marginTop: '-52px'
        }, 1500) //El tiempo que se va a demorar en aparecer el texto es de 1500ms
    }
    // Scroll de los elementos del menú
    //Creo una variable para cada uno de los elemntos y obtengo su posición vertical
    var acercaDe = $('#acerca-de').offset().top,
        menu = $('#platillos').offset().top,
        galeria = $('#galeria').offset().top,
        ubicacion = $('#ubicacion').offset().top;
    $('#btn-acerca-de').on('click'), function(e){
        e.preventDefault() //Evito el comportamiento por defecto del enlace
        $('html, body').animate({
            scrollTop: acercaDe - 100 //Desplaza la posición vertical de la página a la sección acerca de
        }, 500) //El tiempo que se demora en el desplazamiento
    }

})

