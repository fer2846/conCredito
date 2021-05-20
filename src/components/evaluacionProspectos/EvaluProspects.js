import React,{useState} from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


export const EvaluProspects = ({prospecto_id,prospecto_nombre,prospecto_apellido1,prospecto_apellido2,prospecto_calle,prospecto_numero,prospecto_colonia,prospecto_CP,
                                prospecto_telefono,prospecto_RFC,prospecto_status,prospecto_imgUrl,prospecto_observaciones}) => {

    const [prospecto, setProspecto] = useState({
        prospecto_nombre: prospecto_nombre,
        prospecto_apellido1: prospecto_apellido1,
        prospecto_apellido2: prospecto_apellido2,
        prospecto_calle: prospecto_calle,
        prospecto_numero: prospecto_numero,
        prospecto_colonia: prospecto_colonia,
        prospecto_CP: prospecto_CP,
        prospecto_telefono: prospecto_telefono,
        prospecto_RFC: prospecto_RFC,
        prospecto_imgUrl: prospecto_imgUrl,
        prospecto_status: "",
        prospecto_observaciones: ''
    })
                                
    const handleChange = (e) =>{
        setProspecto({
            ...prospecto,
            [e.target.name]: e.target.value
        })
    }

    const handleAutorizar = () => {
        setProspecto({
            ...prospecto, 
            prospecto_status: 'Autorizado'
        })
    }

    const handleRechazar = () => {
        setProspecto({
            ...prospecto, 
            prospecto_status: 'Rechazado'
        })
    }


    const handleSubmit = () =>{

        //Validacion de los datos
        if(prospecto.prospecto_observaciones===''){

            alert("El campo observaciones es obligatorio")
            return
        }

        //Put una vez pase la validacion
        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(prospecto)
        }
        fetch('http://localhost:9000/prospectos/' + prospecto_id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        console.log('Este es el final' + prospecto)

    }

    return (
        <div className='container-all-prospects'>
            <Card className='prospect-card'>
                    <CardMedia className='img-prospect' image={`${prospecto_imgUrl}`} />
                
                    <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" value={prospecto_nombre} readOnly/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="apellido1" className="form-label">Primer apellido</label>
                            <input type="text" className="form-control" id="apellido1" value={prospecto_apellido1} readOnly/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="apellido2" className="form-label">Segundo apellido</label>
                            <input type="text" className="form-control" id="apellido2" value={prospecto_apellido2} readOnly/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="calle" className="form-label">Calle</label>
                            <input type="text" className="form-control" id="calle" value={prospecto_calle} readOnly/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="numero" className="form-label">Numero de casa</label>
                            <input type="text" className="form-control" id="numero" value={prospecto_numero} readOnly/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="colonia" className="form-label">Colonia</label>
                            <input type="text" className="form-control" id="colonia" value={prospecto_colonia} readOnly/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cp" className="form-label">Codigo postal</label>
                            <input type="text" className="form-control" id="cp" value={prospecto_CP} readOnly/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefono" className="form-label">Telefono</label>
                            <input type="text" className="form-control" id="telefono" value={prospecto_telefono} readOnly/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="rfc" className="form-label">RFC</label>
                            <input type="text" className="form-control" id="rfc" value={prospecto_RFC} readOnly/>
                        </div>
                        <div className="mb-3" style={{display:'none'}}>
                            <label htmlFor="status" className="form-label">Estatus</label>
                            <input name='prospecto_status' onChange={handleChange} type="text" className="form-control" id="status" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="observaciones" className="form-label">Observaciones</label>
                            <textarea name='prospecto_observaciones' onChange={handleChange} type="text" className="form-control" id="observaciones" value={prospecto_observaciones}/>
                        </div>

                        <button type="submit" className="btn btn-outline-success" onClick={handleAutorizar}>Autorizar</button>
                        <button type="submit" className="btn btn-outline-danger" onClick={handleRechazar}>Rechazar</button>
                    </form>
                    </CardContent>
                
            </Card>
        </div>
    )
}
