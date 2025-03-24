/*function mostrarSeccion(nombre) {
    document.querySelectorAll('.seccion').forEach(seccion => {
        seccion.classList.remove('activa');
    });
    document.getElementById(nombre).classList.add('activa');
}*/
function mostrarSeccion(nombre) {
    // Ocultar todas las secciones
    document.querySelectorAll('.seccion').forEach(seccion => {
        seccion.style.display = "none"; // Oculta las secciones
        seccion.classList.remove("activa"); // Remueve la clase activa
    });

    // Mostrar la sección seleccionada
    const laSeccion = document.getElementById(nombre);
    if (laSeccion) {
        laSeccion.style.display = "block"; // Muestra la sección
        laSeccion.classList.add("activa"); // Añade la clase activa
    }
}


/* Evento que se ejecuta cuando el DOM ha cargado completamente */
// Espera a que el DOM se haya cargado completamente antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {
    let indice = 0; // Variable que almacena el índice del grupo de imágenes actual
    
    // Selecciona el contenedor de las imágenes dentro del carrusel
    const imagenes = document.querySelector(".imagenes");

    // Selecciona todos los indicadores (puntos de navegación) dentro del carrusel
    const indicadores = document.querySelectorAll(".indicadores span");

    // Obtiene el número total de grupos de imágenes en el carrusel
    const totalGrupos = document.querySelectorAll(".grupo").length;

    /* Función para cambiar de grupo de imágenes */
    function cambiarGrupo(nuevoIndice) {
        indice = nuevoIndice; // Actualiza el índice con el nuevo valor
        let desplazamiento = -indice * 100; // Calcula el desplazamiento en porcentaje
        imagenes.style.transform = `translateX(${desplazamiento}%)`; // Aplica la transformación para mover el carrusel
        
        // Recorre los indicadores y actualiza la clase "activo" en el indicador correspondiente
        indicadores.forEach((indicador, i) => {
            indicador.classList.toggle("activo", i === indice);
        });
    }

    /* Agregar eventos de clic a los indicadores */
    indicadores.forEach((indicador, i) => {
        indicador.addEventListener("click", () => cambiarGrupo(i)); // Cambia la imagen al hacer clic en un indicador
    });

    /* Cambio automático de imagen cada 4 segundos */
    setInterval(() => {
        let nuevoIndice = (indice + 1) % totalGrupos; // Calcula el siguiente índice (volviendo a 0 si es el último grupo)
        cambiarGrupo(nuevoIndice); // Llama a la función para cambiar la imagen
    }, 4000);
});


