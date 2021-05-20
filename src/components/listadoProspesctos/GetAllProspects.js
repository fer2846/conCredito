import React,{useState,useEffect} from 'react'
import { AllProspects } from './AllProspects';
import './GetAllProspects.scss'

export const GetAllProspects = () => {


    const [prospectos, setProspectos] = useState([]);

    useEffect(()=>{

        const getPropsectos = async () => {
            const url='http://localhost:9000/prospectos';
            const resp = await fetch(url);
            const data = await resp.json();
    
            setProspectos(data);
        }

        getPropsectos();

    },[])

    return (
        <div className='get-prospects'>
           {
               prospectos.map((prospect)=>(
                    <AllProspects key={prospect.prospecto_id} {...prospect}/>
               ))
           } 
        </div>
    )
}
