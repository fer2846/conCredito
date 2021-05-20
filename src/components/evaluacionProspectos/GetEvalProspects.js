import React,{useState,useEffect} from 'react';
import { EvaluProspects } from './EvaluProspects';

export const GetEvalProspects = () => {
    
    const [prospectosEval, setProspectosEval] = useState([]);

    useEffect(()=>{

        const getPropsectosEval = async () => {
            const url='http://localhost:9000/prospectos/evaluar';
            const resp = await fetch(url);
            const data = await resp.json();
    
            setProspectosEval(data);
        }

        getPropsectosEval();

    },[])

    return (
        <div className='get-prospects'>
           {
               prospectosEval.map((prospects)=>(
                    <EvaluProspects key={prospects.prospecto_id} {...prospects}/>
               ))
           } 
        </div>
    )
}
