import React from 'react';
import './AllProspects.scss'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
//import { EvaluProspects } from '../evaluacionProspectos/EvaluProspects';
//import { ModalProspecto } from './ModalProspecto';
//import TransitionsModal from './ModalPrueba';

export const AllProspects = ({prospecto_id,prospecto_nombre,prospecto_apellido1,prospecto_apellido2,prospecto_imgUrl,prospecto_status}) => {

    return (
        <div className='container-all-prospects'>
            <Card className='prospect-card'>
                <CardActionArea >
                    <CardMedia className='img-prospect' image={`${prospecto_imgUrl}`} />
                
                    <CardContent>
                        <p>{`${prospecto_nombre} ${prospecto_apellido1} ${prospecto_apellido2}`}</p>
                    </CardContent>
                </CardActionArea>
                <CardActions className='botones'>
                    <Button size="small" color="primary">
                        {prospecto_status}
                    </Button>
                    <Button size="small" color="primary">
                        Ver mas
                    </Button>
                    {/*<TransitionsModal prospecto_id={prospecto_id} />*/}
                    
                </CardActions>
            </Card>
        </div>
    )
}
