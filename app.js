
let asisgnaturaArr = []
let datos = document.querySelector("#table");
datos.style.display = "none";

let formulario= document.querySelector('#formulario')
formulario.addEventlistnerListener('submit', function(){

  const asig={

    asignatura: document.getElementById('#as').value,
    primeraN: document.getElementById('#n1').value,
    segundaN: document.getElementById('#n2').value,
    terceraN: document.getElementById('#n3').value,
    examenF: document.getElementById('#ex').value,
  } 
  asisgnaturaArr.push(asig)
  definitiva()

  let tabla = `
    <thead class="thead-dark">
            <tr>
              <th scope="col">asignatura</th>
              <th scope="col">primeraN</th>
              <th scope="col">segundaN</th>
              <th scope="col">terceraN</th>
              <th scope="col">Examen Final</th>
              <th scope="col">examenF</th>
            </tr>
    </thead> 
    `
    
})

materias.forEach((asignar)=>{

  tabla += `
  <tr>
    <td id="as">${asignar.asignatura}</td>
    <td id="n1">${asignar.primeraN}</td>
    <td id="n2">${asignar.segundaN}</td>
    <td id="n3">${asignar.terceraN}</td>
    <td id="ex">${asignar.examenF}</td>
  </tr>`

  let tabla= document.getElementById('tab')
  tabla.innerHTML= tabla
})


datos.style.display = "block";

function definitiva(l){
  for (let i = 0; i < notaFinal.length; i++) {
      

    notaFinal[i].def= ( ((notaFinal[i].p1+notaFinal[i].p2+notaFinal[i].p3)/3)*0.7+(notaFinal[i].examenF*0.3))

  }

  element.definitiva= definitiva
}



