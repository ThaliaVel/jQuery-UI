$(document).ready(function(){

    //Tooltip
    $(document).tooltip();

    //Dialogo
    $("#lanzar-popup").click(function(){
        $("#popup").dialog();
    });

    //Datepicker
    $("#calendario").datepicker();

    //Tabs
    $("#pestanas").tabs();
});