const render = () => {
  
    const formulario = document.getElementById("registro")
    let inputNombre = document.createElement("input")
    inputNombre.type="text"
    inputNombre.placeholder="Escribe aqui tu nombre"
    inputNombre.id="nombre"
    formulario.appendChild(inputNombre)

    let inputApellido = document.createElement("input")
    inputApellido.type="text"
    inputApellido.placeholder="Escribe aqui tu apellido"
    inputApellido.id="apellido"
    formulario.appendChild(inputApellido)

    let inputEdad = document.createElement("input")
    inputEdad.type="number"
    inputEdad.placeholder="Escribe aqui tu edad"
    inputEdad.id="edad"
    formulario.appendChild(inputEdad)

    let inputSubmit = document.createElement("input")
    inputSubmit.type="submit"
    inputSubmit.id="submit"
    formulario.appendChild(inputSubmit)

    formulario.addEventListener("submit", (event) => {
        event.preventDefault()
        let nombre = inputNombre.value
        let apellido = inputApellido.value
        let edad = inputEdad.value

        let parrafo = document.createElement("p")
        parrafo.innerHTML = `El nombre de la persona es ${nombre}, su apellido es ${apellido} y su edad es ${edad}`
        formulario.appendChild(parrafo)
    })
}

window.onload = render
