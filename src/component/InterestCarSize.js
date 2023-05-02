import React, { useEffect, useState } from 'react'
import '../styles/InterestCarSize.css'
import typeCarDataJson from './data/type.json'

export default function ({}) {
    const [typeCarData,setTypeCarData] = useState([])

    useEffect(() =>{
        setTypeCarData(typeCarDataJson)
    },[typeCarDataJson])


    return (
        <>
        {typeCarDataJson.map((typecar,idx)=>{
            return(
                <Tag
                    key={idx}
                    typecar={typecar}
                />
                
            )
        })}
        </>
    )
}

const Tag = ({typecar,handle}) => {
    const [clicked,setClicked] = useState(false)

    function clickHandler(e){
        setClicked(!clicked)
    }
    return(
        <div 
            className={`cardsize ${clicked ? "clicked" : ""}`}
            onClick={()=>clickHandler(typecar)}
        
        >
            <img src={typecar.src}/>
            <h6>{typecar.type}</h6>
            <p className=''>เริ่มต้น {typecar.price}</p>
        </div>
    )
}