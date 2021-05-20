import React,{useState,useEffect} from 'react'
import './ViewAllData.scss'
import { useParams } from 'react-router'
import { CardDataInd } from './CardDataInd';

export const ViewAllData = () => {

    const{id}=useParams();

    console.log(useParams())

    const [prospectInd, setProspectInd] = useState([]);

    useEffect(()=>{

        const getProspInd = async () =>{
            const url=`http://localhost:9000/prospectos/especifico/${id}`;
            const resp = await fetch(url);
            const data = await resp.json();
    
            setProspectInd(data);
        }

        getProspInd();

    },[])
    return (
        <div className='get-prospects-data'>
            {
                prospectInd.map((ind)=>(
                    <CardDataInd key={ind.prospecto_id} {...ind} />
                ))
            }
        </div>
    )
}
