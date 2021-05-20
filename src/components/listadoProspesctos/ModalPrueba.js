import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal({prospecto_id}) {
    console.log(`Este es el id que paso ${prospecto_id}`)
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    //-----------------------------------------------

    const [prospectoModal, setProspectoModal] = useState([]);

    useEffect(()=>{
        
        const getPropsectosModal = async () => {
            const url=`http://localhost:9000/prospectos/especifico/${prospecto_id}`;
            const resp = await fetch(url);
            const data = await resp.json();

            setProspectoModal(data);
        }

        getPropsectosModal();

    },[])

    console.log(prospectoModal)


    let {prospecto_nombre,prospecto_apellido1,prospecto_apellido2,prospecto_calle,prospecto_numero,prospecto_colonia,prospecto_CP,
        prospecto_telefono,prospecto_RFC,prospecto_status}=prospectoModal;

    const handleChange = (e) =>{
        setProspectoModal({
            ...prospectoModal, 
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () =>{
        //Parseo de las variables enteras
        prospecto_CP = parseInt(prospecto_CP,10)
        prospecto_telefono = parseInt(prospecto_telefono,10)

        //Validacion de los datos
        if(prospecto_nombre==='' || prospecto_apellido1==='' || prospecto_apellido2==='' || prospecto_calle==='' || prospecto_numero==='' || prospecto_colonia==='' 
            || prospecto_CP <=0 || prospecto_telefono <=0 || prospecto_RFC==='' || prospecto_status===''){

            alert("Todos los campos, excepto imagen del prospecto, deben ser llenados")
            return
        }

        //Post una vez pase la validacion
        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(prospectoModal)
        }
        fetch('http://localhost:9000/prospectos', requestInit)
        .then(res => res.json())
        .then(res => console.log(res))

        //Reiniciamos el estado
        setProspectoModal({
            prospecto_nombre: "",
            prospecto_apellido1: "",
            prospecto_apellido2: "",
            prospecto_calle: "",
            prospecto_numero: "",
            prospecto_colonia: "",
            prospecto_CP: 0,
            prospecto_telefono: 0,
            prospecto_RFC:"",
            prospecto_imgUrl: "",
            prospecto_status: ""
        })
    }

//-----------------------------------------------

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Ver mas
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Datos completos del usuario</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3 row'>
                    <label htmlFor='nombre' className='col-sm-2 col-form-label'>Nombre</label>
                    <div className='col-sm-10'>
                        <input name='prospecto_nombre' onChange={handleChange} type='text' id='nombre' className='form-control' value={prospecto_nombre} placeholder={prospecto_nombre}/>
                    </div>
                </div>
                <div className='mb-3 row'>
                    <label htmlFor='apellido1' className='col-sm-2 col-form-label'>Primer apellido</label>
                    <div className='col-sm-10'>
                        <input name='prospecto_apellido1' onChange={handleChange} type='text' id='apellido1' className='form-control' value={prospecto_nombre}/>
                    </div>
                </div>
                <div className='mb-3 row'>
                    <label htmlFor='apellido2' className='col-sm-2 col-form-label'>Segundo apellido</label>
                    <div className='col-sm-10'>
                        <input name='prospecto_apellido2' onChange={handleChange} type='text' id='apellido2' className='form-control' value={prospecto_nombre}/>
                    </div>
                </div>
                <div className='mb-3 row'>
                    <label htmlFor='calle' className='col-sm-2 col-form-label'>Calle</label>
                    <div className='col-sm-10'>
                        <input name='prospecto_calle' onChange={handleChange} type='text' id='calle' className='form-control' value={prospecto_nombre}/>
                    </div>
                </div>
                <div className='mb-3 row'>
                    <label htmlFor='numero' className='col-sm-2 col-form-label'>Numero de casa</label>
                    <div className='col-sm-10'>
                        <input name='prospecto_numero' onChange={handleChange} type='text' id='numero' className='form-control' value={prospecto_nombre}/>
                    </div>
                </div>
                <div className='mb-3 row'>
                    <label htmlFor='colonia' className='col-sm-2 col-form-label'>Colonia</label>
                    <div className='col-sm-10'>
                        <input name='prospecto_colonia' onChange={handleChange} type='text' id='colonia' className='form-control' value={prospecto_nombre}/>
                    </div>
                </div>
                <div className='mb-3 row'>
                    <label htmlFor='cp' className='col-sm-2 col-form-label'>Codigo Postal</label>
                    <div className='col-sm-10'>
                        <input name='prospecto_CP' onChange={handleChange} value={prospecto_CP} type='number' id='cp' className='form-control' value={prospecto_nombre}/>
                    </div>
                </div>
                <div className='mb-3 row'>
                    <label htmlFor='telefono' className='col-sm-2 col-form-label'>Telefono</label>
                    <div className='col-sm-10'>
                        <input name='prospecto_telefono' onChange={handleChange} value={prospecto_telefono} type='number' id='telefono' className='form-control' value={prospecto_nombre}/>
                    </div>
                </div>
                <div className='mb-3 row'>
                    <label htmlFor='rfc' className='col-sm-2 col-form-label'>RFC</label>
                    <div className='col-sm-10'>
                        <input name='prospecto_RFC' onChange={handleChange} type='text' id='rfc' className='form-control' value={prospecto_nombre}/>
                    </div>
                </div>
                <div className='mb-3 row'>
                    <label htmlFor='img' className='col-sm-2 col-form-label'>Imagen del prospecto</label>
                    <div className='col-sm-10'>
                        <input name='prospecto_imgUrl' onChange={handleChange} type='text' id='img' className='form-control' value={prospecto_nombre}/>
                    </div>
                </div>
                <div className='mb-3 row'>
                    <label htmlFor='status' className='col-sm-2 col-form-label'>Status</label>
                    <div className='col-sm-10'>
                        <input name='prospecto_status'  type='text' id='status' className='form-control' value={prospecto_status} placeholder={prospecto_status}/>
                    </div>
                </div>
                <button type='submit' className='btn btn-primary'>Enviar</button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
