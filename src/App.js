import React, {Fragment,useState, useEffect} from 'react';
import Formulario from './componente/Formulario';
import Cita from './componente/Cita';
function App() {

  //CITAS EN LOCALSTORAGE 

  let citasIniciales = JSON.parse(localStorage.getItem('citas')) ;
  if(!citasIniciales) {
    citasIniciales = [] ;
  }


  //ARREGLO DE CITAS
  const [citas, guardarCitas] = useState(citasIniciales)

  //USE EFFECT PARA REALIZAR CIERTAS OPERACIONES CUANDO EL STATE CAMBIA
  useEffect(() =>{
    if(citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas)) 
    } else {
      localStorage.setItem('citas' , JSON.stringify([])) ;
    }
      
  }) ;


  //FUNCION QUE MODIFIQUE LAS CITAS ACTUALES Y AGREGE LA NUEVA
    const crearCita = cita => {
       guardarCitas([...citas,cita])
    }

  //FUNCIÓN QUE ELIMINA UNA CITA POR SU ID
    const eliminarCita = id => {
      const nuevasCitas = citas.filter(cita => cita.id !== id);
      guardarCitas(nuevasCitas);
    }



    //MENSAJE CONDICIONAL
    const titulo = citas.length=== 0 ? 'No hay citas'    : 'Administra tus citas'
 
    return (
    <Fragment>

      <h1>Administrador de Pacientes</h1>
      
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
                <Formulario 
                  crearCita={crearCita}
                />
          </div>
          <div className='one-half column'>
                <h2>{titulo}</h2>
                {citas.map(cita => (
                  <Cita 
                  key={cita.id}
                  cita={cita}
                  eliminarCita={eliminarCita}
                  />
                ))}
          </div>

        </div>


      </div>



    </Fragment>





  );
}

export default App;
