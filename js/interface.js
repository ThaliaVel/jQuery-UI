$(document).ready(function(){

    //Mover elemento por la página
    $(".elemento").draggable();

    //Cambiar tamaño de elemento
    $(".elemento").resizable();

    //Seleccionar elementos
   // $(".lista-seleccionable").selectable(); //no se puede usar al mismo tiempo que sortable

    //Ordenar elementos
    //$(".lista-seleccionable").sortable();
    $(".lista-seleccionable").sortable({
        update: function(event, ui){
            console.log("ha cambiado la lista");
        }
    });

    //Drop
    $("#elemento-movido").draggable();
    $("#area").droppable({
        drop: function(){
            console.log("Has soltado algo dentro del área");
        }
    });

    //Efectos
    $("#mostrar").click(function(){
        //$(".caja-efectos").effect("explode"); //Hace el efecto
        //$(".caja-efectos").toggle("explode"); //Muestra y oculta el elemento con el efecto
        $(".caja-efectos").toggle("explode", 4000);//se le puede cambiar velocidad u opciones
    });

});