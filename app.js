/**
 * Observaciones:

1. Los Campos no aceptan números decimales
2. No se valida que los campos no estén vacíos
3. Haces bien el cálculo de la definitiva, pero nunca usas dicho valor
4. No hay validaciones de color ni de redondeo de nota a partir del decimal .95
5. No imprimes la tabla al dar al botón. El error es debido a la línea 19
6. Bien la creación del formulario
7. Bien el uso de Bootstrap
8. Hacer más uso de las funciones o métodos
9. Todo el código a partir de la línea 51 no se ejecuta nunca porque los tienes fuera del evento del formulario
10. No aprecio errores de lógica pero sí de sintaxis y por eso posees kos errores descritos. Trata de corregirlos, vas por buen camino
11. Las líneas 29, 30, 31, 32 y 33 te devolveran un valor nulo porque usas una almohadilla en todos los getElementById, recuerda que esto sólo se usa si usas
QuerySelector o QuerySelectorAll


Progreso: 40% ----> Por favor aplicar correcciones debidas
 */

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



