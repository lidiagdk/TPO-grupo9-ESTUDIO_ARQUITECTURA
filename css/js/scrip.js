
const form= document.getElementById("form")
const button=document.getElementById("submit")

const number=document.getElementById("telefono")



const formisvalied={
    
      apellido:false,
      name:false,
      email:false,
      telefono:false,
   
}


apellido.addEventListener("change",(e)=>{
 if(e.target.value.trim().length>0 )formisvalied.apellido=true
})


nombre.addEventListener("change",(e)=>{
    if(e.target.value.trim().length>0 )formisvalied.name=true
})

email.addEventListener("change",(e)=>{
    if(e.target.value.trim().length>0 )formisvalied.email=true
})

telefono.addEventListener("change",(e)=>{
    if(e.target.value.trim().length>0 )formisvalied.telefono=true
})


const validateform=()=>{

const formvalues=Object.values(formvalues)
const valid=formvalues.findindex(vlue=>value==false)
if(valid== -1)form. submit()
else alert ("form invalid")
}
//API
let formulario = document.getElementById('formulario');
let submit = document.getElementById('submit');

<<<<<<< HEAD
=======
let formularioPCIAS = document.getElementById('formulario');
let submit = document.getElementById('submit');

>>>>>>> 58b77747e42f2934e55950877c5701f660d1fb6d
let fetchProvincias = (provincia) => {

    return fetch(`https://apis.datos.gob.ar/georef/api/provincias?nombre=${provincia}`) //hacemos la petición a la api
        .then(response => response.json()) //convertimos la respuesta a json
        .catch(error => console.log(error)) //si hay un error lo mostramos por consola
}
<<<<<<< HEAD
=======


formulario.addEventListener('submit', async function (e) {
    //Scope de la función 
    e.preventDefault(); //evita que se recargue la página

    let provincia = document.getElementById('provincia').value;
    let resultado = document.getElementById('resultado');

    if (!provincia) {
        resultado.innerHTML = "Provincia inexistente";
        
    }

    submit.setAttribute('disabled', '');
    submit.setAttribute('aria-busy', 'true');

    const infoProvincia = await fetchProvincias(provincia.trim());
    let nombreProvincia = infoProvincia.provincias[0].nombre;
    let idProvincia = infoProvincia.provincias[0].id;

   
>>>>>>> 58b77747e42f2934e55950877c5701f660d1fb6d


formulario.addEventListener('submit', async function (e) {
    //Scope de la función 
    e.preventDefault(); //evita que se recargue la página

    let provincia = document.getElementById('provincia').value;
    let resultado = document.getElementById('resultado');

    if (!provincia) {
        resultado.innerHTML = "Debe ingresar una provincia";
        return;
    }

    submit.setAttribute('disabled', '');
    submit.setAttribute('aria-busy', 'true');

    const infoProvincia = await fetchProvincias(provincia.trim());
    let nombreProvincia = infoProvincia.provincias[0].nombre;
    let idProvincia = infoProvincia.provincias[0].id;


    if (infoProvincia) {
        resultado.innerHTML = `La provincia seleccionada es: ${nombreProvincia} y su id es: ${idProvincia}`;
    }

    submit.removeAttribute('disabled');
    submit.removeAttribute('aria-busy');

});

