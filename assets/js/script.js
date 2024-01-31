//tooltip de bootstrap
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//evento click de jquery
$( "#enviarCorreo" ).on( "click", function() {
    alert( "El correo fue enviado correctamente..." );
} );

//dobleclick    
$("h3").on("dblclick", function(){
    $(this).css({
        "color": "red",
    });
});

//toggle  
$(".card-title").on("dblclick", function(){
    $(".card-text").toggle();
});