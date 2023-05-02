import "../styles/SearchCar.css"
import React, { useEffect, useState } from 'react'
import Promotion from "./Promotion"
import { useNavigate } from "react-router-dom"
import provinceDataJSON from './data/province.json'
import timeDataJOSN from './data/time.json'




function Searchcar() {
    const navigate = useNavigate();
    const [province,setProvinceData] = useState([])
    const [times,setTimeData] = useState([])

    
    //data from JSON
    useEffect(() => {
        setProvinceData(provinceDataJSON)
    }, [provinceDataJSON])

    useEffect(() => {
        setTimeData(timeDataJOSN)
    }, [timeDataJOSN])
   
    function handleClick(){
        navigate("/Carlist");
    }
    return (
        <div class="containerBig">
        <div class="container">
            <div class="promote">
                <p>ค้นหารถเช่าราคาถูกที่สุด</p>
            </div>
            <div class="promote1">
                <p>จาก 500 กว่าบริษัทรถเช่าทั่วประเทศ</p>
            </div>

            <div class="choosetype">
                <div class="gridchoosetype">
                    <div class="contenttype">
                        <p>เช่ารถขับเอง</p>
                    </div>
                </div>

                <div class="gridchoosetype">
                    <div class="contenttype">
                        <p>เช่ารถพร้อมคนขับ</p>
                    </div>
                </div>
            </div>

            <div class="province">
                <div  />

                    <select 
                        className="provinceinput" id="province"
                    >
                        <option>ค้นหาสถานที่</option>
                        {province.map(
                            (provinc, idx) => {
                                return(
                                    <option value={provinc.value}>
                                        {provinc.name}
                                    </option>
                                )
                            }
                        )}
                    </select>
            </div>

            <div class="griddate">
                <div class="item">
                    <div class="content">
                        <p>วันรับรถ</p>
                        <input type="date" name="DateMonth" ></input>
                    </div>
                </div>

                <div class="item">
                    <div class="content">
                        <p>วันคืนรถ</p>
                        <input type="date" name="DateMonth" ></input>
                    </div>
                </div>
            </div>

            <div class="gridtime">
                <div class="item">
                    <div class="content">
                        <h4>เวลารับรถ</h4>
                        <select name="time" id="timetogetcar">
                            <option> </option>
                            {times.map(
                            (time, idx) => {
                                return(
                                    <option value={time.value}>
                                        {time.name}
                                    </option>
                                )
                            }
                        )}
                        </select>
                    </div>
                </div>

                <div class="item">
                    <div class="content">
                        <p>เวลาคืนรถ</p>
                        <select name="time" id="timetogivecar">
                            <option value="00.00">00.00</option>
                            <option value="00.30">00.30</option>
                            <option value="01.00">01.00</option>
                            <option value="01.30">01.30</option>
                            <option value="02.00">02.00</option>
                            <option value="02.30">02.30</option>
                            <option value="03.00">03.00</option>
                            <option value="03.30">03.30</option>
                            <option value="04.00">04.00</option>
                            <option value="04.30">04.30</option>
                            <option value="05.00">05.00</option>
                            <option value="05.30">05.30</option>
                            <option value="06.00">06.00</option>
                            <option value="06.30">06.30</option>
                            <option value="07.00">07.00</option>
                            <option value="07.30">07.30</option>
                            <option value="08.00">08.00</option>
                            <option value="08.30">08.30</option>
                            <option value="09.00">09.00</option>
                            <option value="09.30">09.30</option>
                            <option value="10.00">10.00</option>
                            <option value="10.30">10.30</option>
                            <option value="11.00">11.00</option>
                            <option value="11.30">11.30</option>
                            <option value="12.00">12.00</option>
                            <option value="12.30">12.30</option>
                            <option value="13.00">13.00</option>
                            <option value="13.30">13.30</option>
                            <option value="14.00">14.00</option>
                            <option value="14.30">14.30</option>
                            <option value="15.00">15.00</option>
                            <option value="15.30">15.30</option>
                            <option value="16.00">16.00</option>
                            <option value="16.30">16.30</option>
                            <option value="17.00">17.00</option>
                            <option value="17.30">17.30</option>
                            <option value="18.00">18.00</option>
                            <option value="18.30">18.30</option>
                            <option value="19.00">19.00</option>
                            <option value="19.30">19.30</option>
                            <option value="20.00">20.00</option>
                            <option value="20.30">20.30</option>
                            <option value="21.00">21.00</option>
                            <option value="21.30">21.30</option>
                            <option value="22.00">22.00</option>
                            <option value="22.30">22.30</option>
                            <option value="23.00">23.00</option>
                            <option value="23.30">23.30</option>
                        </select>
                    </div>
                </div>
            </div>

            
                <button type="submit" className="searchcarbutton" onClick={(e)=>handleClick()}>
                    <p>ค้นหารถที่ว่าง</p>
                </button>
            

            <div class="concept">
                <h4>
                    ✅รับประกันราคาถูก
                </h4>
                <h4>
                    ✅การันตีราคาเดียวกับหน้าร้าน 100%
                </h4>
                <h4>
                    ✅จองฟรีและชำระค่าเช่า ณ วันรับรถ
                </h4>
                <h4>
                    ✅ไม่มีบัตรเครดิตก็เช่าได้
                </h4>
            </div>
            <div>
            
            </div>
            
        </div>
            <Promotion/>
        </div>
        
        
        
    )
}
export default Searchcar

