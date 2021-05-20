import React from 'react'
import './CardDataInd.scss'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

export const CardDataInd = ({prospecto_id,prospecto_nombre,prospecto_apellido1,prospecto_apellido2,prospecto_calle,prospecto_numero,prospecto_colonia,prospecto_CP,
                            prospecto_telefono,prospecto_RFC,prospecto_status,prospecto_imgUrl,prospecto_observaciones}) => {
    return (
        <div className='container-ind-prospect'>
            <Card className='prospect-card-ind'>
                <CardMedia className='img-prospect' image={`${prospecto_imgUrl}`} />
                <CardContent>
                    <form>
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
                        <div className="mb-3">
                            <label htmlFor="status" className="form-label">Estatus</label>
                            <input name='prospecto_status' type="text" className="form-control" id="status"  value={prospecto_status} readOnly />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="observaciones" className="form-label">Observaciones</label>
                            <textarea name='prospecto_observaciones' type="text" className="form-control" id="observaciones" value={prospecto_observaciones} readOnly />
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
