if (document.querySelector("#separador")) {
    
    const perro1 = document.querySelector("#perro1")
    const perro2 = document.querySelector("#perro2")
    const perro3 = document.querySelector("#perro3")
    const pez1 = document.querySelector("#pez1")
    const pez2 = document.querySelector("#pez2")
    const pez3 = document.querySelector("#pez3")
    const rata1 = document.querySelector("#rata1")
    const rata2 = document.querySelector("#rata2")
    const rata3 = document.querySelector("#rata3")

    function escuchadores(activo, ...desactivo) {
        activo.addEventListener('mouseenter', e => {
            activo.style.border = '1px solid black'
            desactivo.map(desactivado => {
                desactivado.style.border = ''
            })
        })
    }

    escuchadores(perro1, perro2, perro3, pez1, pez2, pez3, rata1, rata2, rata3)
    escuchadores(perro2, perro1, perro3, pez1, pez2, pez3, rata1, rata2, rata3)
    escuchadores(perro3, perro1, perro2, pez1, pez2, pez3, rata1, rata2, rata3)
    escuchadores(pez1, perro2, perro3, perro1, pez2, pez3, rata1, rata2, rata3)
    escuchadores(pez2, perro1, perro3, perro2, pez1, pez3, rata1, rata2, rata3)
    escuchadores(pez3, perro1, perro2, perro3, pez2, pez1, rata1, rata2, rata3)
    escuchadores(rata1, perro2, perro3, perro1, pez2, pez3, pez1, rata2, rata3)
    escuchadores(rata2, perro1, perro3, perro2, pez1, pez3, rata1, pez2, rata3)
    escuchadores(rata3, perro1, perro2, perro3, pez2, pez1, rata1, rata2, pez3)

}

if (document.querySelector("#accordionExample")) {

    const boton = document.querySelector("#letra")
    const diver = document.querySelector("#showAfterButton")
    diver.style.display = 'none'


    boton.addEventListener('click', () => {
        if (boton.innerText == 'Conozca nuestra historia...') {
            boton.innerText = 'Gracias por visitar nuestro sitio Web'
            diver.style.display = 'block'
        } 
    })
}

///////////// Fin js Home - Inicio js Contacto

if (document.querySelector("#form")) {

    const boton = document.querySelector('#boton')
    const nombre = document.querySelector('#fname')
    const apellido = document.querySelector('#lname')
    const telefono = document.querySelector('#numero')

    boton.addEventListener('click', e => { 
        e.preventDefault()
        const userName = nombre.value
        const userLastName = apellido.value
        const userTel = telefono.value

        swal (`Hola ${userName} ${userLastName} nos comunicaremos al ${userTel} a la brevedad`, "gracias por contactarte con nosotros!",  "success")
    })
}

if (document.querySelector("#tipoAnimal")) {

    const botonInfo = document.querySelector('#botonInfo')
    botonInfo.style.display = 'none'
    const perro = document.querySelector('#perro')
    const gato = document.querySelector('#gato')
    const cuidados1 = document.querySelector('.cuidados1')
    const cuidados2 = document.querySelector('.cuidados2')
    cuidados1.style.display = 'none'
    cuidados2.style.display = 'none'

    function elegirMostrar(check, chechDisplay) {
        check.addEventListener('click', e => {
            if (check.checked) {
                botonInfo.style.display = 'block'
                chechDisplay.style.display = 'block'
            } else {
                chechDisplay.style.display = 'none'
                botonInfo.style.display = 'none'
            }

        })
    }
    elegirMostrar(perro, cuidados1)
    elegirMostrar(gato, cuidados2)
}



///////////// Fin js contacto - Inicio js Farmacia y Juguetes

if (document.querySelector("#datosApi")) {

const contieneJuguetes = document.querySelector('#contieneJuguetes')

const padre = document.querySelector('#padre')

    fetch('https://apipetshop.herokuapp.com/api/articulos')
        .then(respuesta => respuesta.json())
        .then(json =>  {

            var datos = json.response
              
            // renderizado de DOM
                if (document.querySelector("#padre")) {  
                    for (var i = 0; i < datos.length; i++) {
                        if (datos[i].tipo == "Medicamento") {
                            const imagen = document.createElement('img')
                            imagen.setAttribute('src', datos[i].imagen)
                            imagen.classList.add('card-img-top')
                            const caja = document.createElement('div')        
                            caja.classList.add('card', 'sectionFarmer', 'claseParaCartasFarmacia')
                            const otraCaja = document.createElement('div')
                            otraCaja.classList.add('card-body')
                            const precio = document.createElement('h5')
                            const preciostock = document.createElement('h5')
                            preciostock.innerText = `${datos[i].stock} unidades`
                            if (datos[i].stock < 5) {
                                preciostock.innerText = "últimas 5 unidades!"
                                preciostock.style.color = 'red'
                            }
                            precio.classList.add('card-title')
                            precio.innerText = `$ ${datos[i].precio}`
                            const nombre = document.createElement('p')
                            nombre.classList.add('card-text')
                            nombre.innerText = datos[i].nombre
                            otraCaja.appendChild(preciostock)
                            otraCaja.appendChild(precio)
                            otraCaja.appendChild(nombre)
                            caja.appendChild(imagen)
                            caja.appendChild(otraCaja)
                            padre.appendChild(caja)
                        } 
                    }
                }
                    var datoJuguete = datos.slice()
                if (document.querySelector("#contieneJuguetes")) {  
                    for (var i = 0; i < datoJuguete.length; i++) {
                        if (datoJuguete[i].tipo == "Juguete") {
                            const imagenJuguete = document.createElement('img')
                            imagenJuguete.setAttribute('src', datoJuguete[i].imagen)
                            imagenJuguete.classList.add('card-img-top')
                            const cajaJuguetes = document.createElement('div')        
                            cajaJuguetes.classList.add('card', 'claseParaCartasFarmacia')
                            const cajita = document.createElement('div')
                            cajita.classList.add('card-body')
                            const precioJuguete = document.createElement('h5')
                            const preciostockF = document.createElement('h5')
                            preciostockF.innerText = `${datoJuguete[i].stock} unidades`
                            if (datoJuguete[i].stock < 5) {
                                preciostockF.innerText = "últimas 5 unidades!"
                                preciostockF.style.color = 'red'
                            }
                            precioJuguete.classList.add('card-title')
                            precioJuguete.innerText = `$ ${datoJuguete[i].precio}`
                            const nombreJuguete = document.createElement('p')
                            nombreJuguete.classList.add('card-text')
                            nombreJuguete.innerText = datoJuguete[i].nombre
                            cajita.appendChild(preciostockF)
                            cajita.appendChild(precioJuguete)
                            cajita.appendChild(nombreJuguete)
                            cajaJuguetes.appendChild(imagenJuguete)
                            cajaJuguetes.appendChild(cajita)
                            contieneJuguetes.appendChild(cajaJuguetes)
                        }

                    }
                }
        })
}
const contenedor = document.querySelector('#contieneJuguetes')
contenedor.style.display = 'none'
const boton = document.querySelector('#boton')
boton.style.display = 'block'
const perrosFelices = document.querySelector('#perrosFelices')
perrosFelices.style.display = 'none'

if (document.querySelector("#boton")) {  
    $(document).ready(function(){
        $('#boton').click(function(){
            $('#boton').hide();
            $(contenedor).slideDown(4000);
            $(perrosFelices).slideDown(2000);
        });
      });
}

