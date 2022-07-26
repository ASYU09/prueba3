
let asisgnaturaArr = []
let datos = document.querySelector("#table");


let formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', function () {

  const asig = {

    asignatura: document.getElementById('as').value,
    primeraN: document.getElementById('p1').value,
    segundaN: document.getElementById('p2').value,
    terceraN: document.getElementById('p3').value,
    examenF: document.getElementById('ex').value,
  }


  asisgnaturaArr.push(asig)
  definitivaFinal()
  cambiarColor()
  

  let tabla = `
          <thead>
            <tr>
              <th scope="col">asignatura</th>
              <th scope="col">primeraN</th>
              <th scope="col">segundaN</th>
              <th scope="col">terceraN</th>
              <th scope="col">Examen Final</th>
              <th scope="col">Definitiva</th>
            </tr>
            </thead>
      <tbody>
    `


  asisgnaturaArr.forEach((asignar) => {

    tabla += `
      <tr>
        <td id="as">${asignar.asignatura}</td>
        <td id="p1">${asignar.primeraN}</td>
        <td id="p2">${asignar.segundaN}</td>
        <td id="p3">${asignar.terceraN}</td>
        <td id="ex">${asignar.examenF}</td>
        <td style="background-color: ${asignar.color};">${asignar.definitiva}</td>

      </tr>
      </tbody>
      `

    let tabla2 = document.getElementById('table')
    tabla2.innerHTML = tabla
  })
})

function cambiarColor(){
    
    
    
  asisgnaturaArr.map(element=>{

      if(element.definitiva>0.0&&element.definitiva<=2.9){
  
          element.color="red"
      }else if(element.definitiva>=3.0&&element.definitiva<=3.9){
  
          element.color="yellow"
      }else if(element.definitiva>=4.0&&element.definitiva<=5.0){
  
          element.color="green"
      }      
      
      
  })
}


function definitivaFinal() {

  asisgnaturaArr.map(element => {

    let defin = (((Number(element.primeraN) + Number(element.segundaN) + Number(element.terceraN))/3)*0.7+(element.examenF * 0.3))
  
    if(defin>=2.95&&defin<3){
            
      defin=3
    }
    element.definitiva = defin

  })

}





  

