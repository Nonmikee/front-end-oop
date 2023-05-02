import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import '../styles/Cardcar.css'

import carDataJson from './data/car.json'


function Cardcar(){
    const navigate = useNavigate();
    const [carData,setCarData] = useState([])

    useEffect(() =>{
        setCarData(carDataJson)
    },[carDataJson])

    function handleClick(){
        navigate("/Carinfo");
    }
    return(

        <>
        {carDataJson.map((car,idx)=>{
            return(
                <div className='cardcar flex'onClick={(e)=>handleClick()} >
                <div className='localbadge' >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g id="Layer_11" data-name="Layer 11"><path d="M32,3A29,29,0,0,0,3,32c1.59,38.47,56.41,38.46,58,0A29,29,0,0,0,32,3Zm0,56A27,27,0,0,1,5,32C6.48-3.82,57.52-3.81,59,32A27,27,0,0,1,32,59Z"/><path d="M55.9,32.7a23.91,23.91,0,1,0-27.33,23h0a23.61,23.61,0,0,0,6.82,0h0A24,24,0,0,0,55.9,32.7ZM32,10.08A21.94,21.94,0,0,1,53.52,27.89H43.39a3.72,3.72,0,0,0-3.67-3.2H24.28a3.72,3.72,0,0,0-3.67,3.2H10.48A21.94,21.94,0,0,1,32,10.08ZM22.77,27.6a1.69,1.69,0,0,1,1.51-.91H39.72a1.73,1.73,0,0,1,1.43,2.67L33.43,41h0a1.77,1.77,0,0,1-2.86,0L22.85,29.35A1.67,1.67,0,0,1,22.77,27.6ZM10.16,33.78c9.35.61,16.84,9.09,17.38,19.68A22,22,0,0,1,10.16,33.78Zm19.41,20c-.41-11.88-8.9-21.46-19.48-22,0-.63,0-1.25.1-1.86H20.88a3.1,3.1,0,0,0,.3.57L28.9,42.12a3.72,3.72,0,0,0,6.2,0l7.72-11.66a3.1,3.1,0,0,0,.3-.57H53.81c.06.61.09,1.23.1,1.86-10.58.57-19.07,10.15-19.48,22A21.94,21.94,0,0,1,29.57,53.78Zm6.89-.32c.54-10.59,8-19.07,17.38-19.68A22,22,0,0,1,36.46,53.46Z"/></g></svg>
                                    local</div>
                    <img className='avatar'src={car.src}/>           
                    <div className='flex-col'>
                        {/* carname */}
                        <div className='header flex'>
                            <h2>{car.name}</h2>
                            <carnamesmall>ได้รถคันที่เลือก </carnamesmall>
                        </div>
                        {/* detail */}
                        <div className='flex'>
                            <div className='center'>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="car-15" width="15px" height="15px" viewBox="0 0 15 15">
                                    <path d="M14,7c-0.004-0.6904-0.4787-1.2889-1.15-1.45l-1.39-3.24l0,0l0,0l0,0C11.3833,2.1233,11.2019,2.001,11,2H4&#10;&#9;C3.8124,2.0034,3.6425,2.1115,3.56,2.28l0,0l0,0l0,0L2.15,5.54C1.475,5.702,0.9994,6.3059,1,7v3.5h1v1c0,0.5523,0.4477,1,1,1&#10;&#9;s1-0.4477,1-1v-1h7v1c0,0.5523,0.4477,1,1,1s1-0.4477,1-1v-1h1V7z M4.3,3h6.4l1.05,2.5h-8.5L4.3,3z M3,9C2.4477,9,2,8.5523,2,8&#10;&#9;s0.4477-1,1-1s1,0.4477,1,1S3.5523,9,3,9z M12,9c-0.5523,0-1-0.4477-1-1s0.4477-1,1-1s1,0.4477,1,1S12.5523,9,12,9z"/>
                                </svg>
                                <small>{car.type}</small>
                                <div className='leftpad'></div>
                            </div>
                            <div className='center'>
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 122.88 122.88"><title>account</title><path d="M61.44,0A61.31,61.31,0,0,1,84.92,4.66h0A61.66,61.66,0,0,1,118.21,38l.1.24a61.39,61.39,0,0,1-.1,46.73h0A61.42,61.42,0,0,1,38,118.21h0A61.3,61.3,0,0,1,18,104.88l0,0A61.5,61.5,0,0,1,4.66,84.94l-.09-.24A61.48,61.48,0,0,1,4.66,38v0A61.37,61.37,0,0,1,18,18l0,0A61.5,61.5,0,0,1,37.94,4.66l.24-.09A61.35,61.35,0,0,1,61.44,0ZM48.78,79.89a16.44,16.44,0,0,1-1.34-1.62c-2.6-3.56-4.93-7.58-7.27-11.33-1.7-2.5-2.59-4.73-2.59-6.52s1-4.13,3-4.64a101,101,0,0,1-.18-11.73A16.86,16.86,0,0,1,41,41.11a17,17,0,0,1,7.58-9.64,19.26,19.26,0,0,1,4.11-2c2.59-1,1.34-4.91,4.19-5C63.54,24.33,74.52,30,78.8,34.68a16.91,16.91,0,0,1,4.38,11l-.27,10.57a3.31,3.31,0,0,1,2.41,2.41c.36,1.43,0,3.39-1.25,6.16h0c0,.09-.09.09-.09.18-2.75,4.53-5.62,9.78-8.78,14-1.59,2.12-2.9,1.75-1.54,3.78,6.45,8.87,19.18,7.64,27,13.55a52.66,52.66,0,0,0,9.36-54.72l-.09-.2A52.7,52.7,0,0,0,98.55,24.33h0a52.63,52.63,0,0,0-57-11.49l-.21.09a52.53,52.53,0,0,0-17,11.4h0a52.63,52.63,0,0,0-11.49,57l.09.21A52.66,52.66,0,0,0,22.19,96.3c7.85-5.91,20.58-4.68,27-13.55,1.12-1.68.83-1.52-.44-2.86Z"/></svg>
                                <small>{car.max}</small>
                                <div className='leftpad'></div>
                            </div>
                            <div className='center'>
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 122.88 122.88"><title>manual-transmission</title><path d="M61.44,0A61.46,61.46,0,1,1,18,18,61.23,61.23,0,0,1,61.44,0Zm4.07,82.09a6.67,6.67,0,1,1-8.14,0V68.62H42.31V82.09a6.67,6.67,0,1,1-8.14,0V46.17a6.67,6.67,0,1,1,8.14,0V60.48H57.37V46.17a6.67,6.67,0,1,1,8.14,0V60.48H80.57V46.17a6.67,6.67,0,1,1,8.14,0V64a4.41,4.41,0,0,1,0,.52,4.07,4.07,0,0,1-4.07,4.07H65.51V82.09Zm33-57.76a52.46,52.46,0,1,0,15.38,37.11A52.29,52.29,0,0,0,98.55,24.33Z"/></svg>
                                <small>{car.gear}</small>
                            </div>
                            <div>
                                <ready>รถว่างพร้อมจอง</ready>
                            </div>
                            
                        </div>
                        <hr/>
                    
                        <div className='flex'>
                            <div className='detail'>
                                <div>รับรถ:01/05/2023</div><time>16:00</time>
                                <div>คืนรถ:03/05/2023</div><time>16:00</time>
                                <div className='toppad'></div>
                                <div className='toppad'></div>
                                <div>✅ประกันภัยพื้นฐาน</div>
                                <div>✅บริการรับส่งนอกสถานที่</div>
                                <div>✅การันตีราคาเดียวกับหน้าร้าน</div>
                                <div className='toppad'></div>
                                <div className='toppad'></div>
                                <div className='toppad'></div>
                                <div className='toppad'></div>
                                <div className='flex'>
                                    <img className='imgsizesmall' src='https://drivehubv3.s3-ap-southeast-1.amazonaws.com/logo/ad2d62b0-8d67-4173-b6db-6926ff1f375b/medium.png'/>
                                    <b>Chow rent a c...
                                        <div className='localbadge' >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g id="Layer_11" data-name="Layer 11"><path d="M32,3A29,29,0,0,0,3,32c1.59,38.47,56.41,38.46,58,0A29,29,0,0,0,32,3Zm0,56A27,27,0,0,1,5,32C6.48-3.82,57.52-3.81,59,32A27,27,0,0,1,32,59Z"/><path d="M55.9,32.7a23.91,23.91,0,1,0-27.33,23h0a23.61,23.61,0,0,0,6.82,0h0A24,24,0,0,0,55.9,32.7ZM32,10.08A21.94,21.94,0,0,1,53.52,27.89H43.39a3.72,3.72,0,0,0-3.67-3.2H24.28a3.72,3.72,0,0,0-3.67,3.2H10.48A21.94,21.94,0,0,1,32,10.08ZM22.77,27.6a1.69,1.69,0,0,1,1.51-.91H39.72a1.73,1.73,0,0,1,1.43,2.67L33.43,41h0a1.77,1.77,0,0,1-2.86,0L22.85,29.35A1.67,1.67,0,0,1,22.77,27.6ZM10.16,33.78c9.35.61,16.84,9.09,17.38,19.68A22,22,0,0,1,10.16,33.78Zm19.41,20c-.41-11.88-8.9-21.46-19.48-22,0-.63,0-1.25.1-1.86H20.88a3.1,3.1,0,0,0,.3.57L28.9,42.12a3.72,3.72,0,0,0,6.2,0l7.72-11.66a3.1,3.1,0,0,0,.3-.57H53.81c.06.61.09,1.23.1,1.86-10.58.57-19.07,10.15-19.48,22A21.94,21.94,0,0,1,29.57,53.78Zm6.89-.32c.54-10.59,8-19.07,17.38-19.68A22,22,0,0,1,36.46,53.46Z"/></g></svg>
                                        local
                                    </div>
                                    </b>
                                </div>        

                            </div>
                            <div className='half'>   
                            <div className='price'>
                                    <div className='topmar'></div>
                                    <h3><center>888.88</center></h3>
                                    <small><center>สำหรับ 2 วัน</center></small>
                                    <small><center>รวม1888บาท</center></small>
                                    <div className='toppad'></div>
                                    <div className='toppad'></div>
                                    <div className='toppad'></div>
                                    <div className='toppad'></div>

                                <div className='creditbadge' >
                                        <center>ไม่ต้องใช้บัตรเครดิตจอง</center>
                                </div>
                                    <div className='toppad'></div>
                                <div className='moreinfo' >
                                        <center>ต้องใช้เอกสารเพิ่มเติม</center>
                                </div>  
                                </div>
                            </div>  
                        </div>
                    <div>
                        <button type="submit" className="seedetail">
                            <p>ดูรายละเอียดก่อนจอง</p>
                            </button></div>
                    </div>
                    
                </div>
            )
        })}
        
        </>

        
    )

}
export default Cardcar
                            
                    
                        