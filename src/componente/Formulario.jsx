import React,{Fragment,useState} from 'react' ;
import uuid from 'uuid/dist/v4'


const Formulario = ({crearCita}) => {

    const [cita , actualizarCita] = useState({
        mascota:'',
        propietario:'',
        fecha:'' ,
        hora:'' ,
        sintomas:''

    })

    const [error, actualizarError]=useState(false)





        //E.TARGET.NAME INDICA EN QUE CAMPO DEL OBJETO SE ESTA ESCRIBIENDO. EJEMPLO MASCOTA, PROPIETARIO
    const actualizarState = e => {
        
       actualizarCita({
          ...cita,
          [e.target.name ]: e.target.value

       })
    }

        //Cuando el usuario envia el formulario
    const submitCita = e => {
        //Evita que se envie la informacion por el url
        e.preventDefault();

        
        //Validar

         if(mascota.trim()==="" ||propietario.trim()==="" || sintomas.trim()==="" ||!hora || !fecha  ){
            actualizarError(true)
             return ;

         }
         //ELIMINA EL ERROR
         actualizarError(false)



         //Asignar un ID
        cita.id=uuid(); 


        //CREA LA CITA
        crearCita(cita) ;

        //REINICIAR LOS VALORES UNA VEZ QUE SE ENVIA EL SUBMIT
        actualizarCita({
        mascota:'',
        propietario:'',
        fecha:'' ,
        hora:'' ,
        sintomas:''
        }) 
        
    }

        



    const {mascota ,propietario , fecha, hora, sintomas} = cita ;

       

    return (  
        <Fragment>
            <h2>Crear Cita</h2>

            {error ? <p className='alerta-error'> Todos los campos son obligatorios</p>   : null }



            <form onSubmit={submitCita} >

                <label >Nombre Mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder='Nombre mascota'
                    onChange={actualizarState}
                    value={mascota}
                />

                <label >Nombre del Dueño</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder='Nombre del Dueño'
                    onChange={actualizarState}
                    value={propietario}
                />

                <label >Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />

                <label >Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />

                <label >Sintomas</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar cita</button>

            </form>



        </Fragment>
        

    );
}
 
export default Formulario

