// Botones

const btnSig = document.querySelector("#siguiente");
const btnSig2 = document.querySelector("#siguiente2");

const btnAtras = document.querySelector("#atras");
const btnAtras2 = document.querySelector("#atras2");

const btnEnviar = document.querySelector("#enviar");

// Divs
const personales = document.querySelector("#personales");
const intereses = document.querySelector("#interes");
const opinion = document.querySelector("#opinion");

btnSig.addEventListener('click', ()=>{
    personales.classList.add("desaparecer");
    intereses.classList.remove("desaparecer")
})

btnSig2.addEventListener('click',  ()=>{
    intereses.classList.add("desaparecer");
    opinion.classList.remove("desaparecer");
})

btnAtras.addEventListener('click', ()=>{
    intereses.classList.add("desaparecer");
    personales.classList.remove("desaparecer");
})

btnAtras2.addEventListener('click', ()=>{
    opinion.classList.add("desaparecer");
    intereses.classList.remove("desaparecer");
})

btnEnviar.addEventListener('click', ()=>{
    const checkInteres = document.getElementsByName("temas");
    const checkMedios = document.getElementsByName("medios");
    let temasInteres= "";
    let medios= "";

    for (let i = 0; i < checkInteres.length; i++) {
        if (checkInteres[i]) {
            temasInteres= temasInteres.concat(checkInteres[i].value, i<checkInteres.length-1?"<br>":"");
        }
    }
    
    for (let i = 0; i < checkMedios.length; i++) {
        if (checkMedios[i]) {
            medios= medios.concat(checkMedios[i].value,i<checkMedios.length-1? "<br>":"");
        }
    }

    const datos={
        nombre: document.getElementById("nombre").value,
        correo: document.getElementById("correo").value,
        nacimiento: document.getElementById("nacimiento").value,
        genero: document.getElementById("masculino").checked ? document.getElementById("masculino").value : document.getElementById("femenino").checked ? document.getElementById("femenino").value : "",
        interes: temasInteres,
        horario: document.getElementById("horario").value,
        medio: medios,
        asistir: document.getElementById("asistido").checked?"Si":"No",
        cursos: document.getElementById("nCursos").value,
        comentario: document.getElementById("comentario").value,
        experiencia: document.getElementById("experiencia").value
    }

    const divDatos= document.querySelector("#datos");
    const mensaje= document.getElementById("info");

    mensaje.innerHTML= `<b>Nombre:</b> ${datos.nombre}<br>
                        <b>Correo:</b> ${datos.correo}<br>
                        <b>Fecha de nacimiento:</b> ${datos.nacimiento}<br>
                        <b>Genero:</b> ${datos.genero}<br>
                        <b>Tema de interes:</b> <br>${datos.interes}<br>
                        <b>Horario:</b> ${datos.horario}<br>
                        <b>Medios para saber de nosotros:</b> <br>${datos.medio}<br>
                        <b>Asistir:</b> ${datos.asistir}<br>
                        <b>Número de cursos:</b> ${datos.cursos}<br>
                        <b>Comentarios:</b> ${datos.comentario}<br>
                        <b>Experiencias:</b> ${datos.experiencia}<br>`

    opinion.classList.add("desaparecer");
    divDatos.classList.remove("desaparecer");

    console.log(datos);
})