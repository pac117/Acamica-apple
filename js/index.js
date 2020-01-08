// Desplegando el menu hamburguesa
function desplegar() {

    $('.down_panel').slideToggle();

}


// Muestra la opcion cancelar, agregando una clase
function close() {
    document.getElementById('close').classList.add('close-open');
}
document.getElementById('boton').onclick = function() {
    close();
};

// Oculta la opcion cancelar, quitando una clase
function cancelar() {
    document.getElementById('close').classList.remove('close-open');
}
document.getElementById('close').onclick = function() {
    cancelar();
};

// Reseteando el imput

$('#close').click(function() {
    $('input[type=text]').val('');
});