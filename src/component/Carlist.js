import "../styles/Carlist.css"
import React, { useEffect, useState } from 'react'
import provinceDataJSON from './data/province.json'
import timeDataJOSN from './data/time.json'

import Cardcar from "./Cardcar"
import InterestCarSize from "./InterestCarSize"


function Carlist({
    selectedProvince,
}){
    const [times,setTimeData] = useState([])
    const [province,setProvinceData] = useState([])
    const [tabs,setTab] = useState(0)

    //data from JSON
    useEffect(() => {
        setProvinceData(provinceDataJSON)
    }, [provinceDataJSON])
    useEffect(() => {
        setTimeData(timeDataJOSN)
    }, [timeDataJOSN])

    
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }


    return (
        <div className="font">
                    
            <div className="search-bar flex items-center">
                <div>
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
                
                <div className="datetime flex">
                    <div class="content-datetime flax-col">
                        <p>วันรับรถ</p>
                        <input type="date" name="DateMonth" ></input>
                    </div>
                    <hr/>

                    <div className="content-datetime flex-col">
                        <p>เวลารับรถ</p>
                        <select name="time" id="timetogetcar">
                            <option>00.00 </option>
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
                    <div className="flex items-center">
                        <svg viewBox="0 0 20 20">
                            <line class="arrow" x1="5" y1="10" x2="15" y2="10"/>
                            <line class="arrow" x1="15" y1="10" x2="12" y2="7"/>
                            <line class="arrow" x1="15" y1="10" x2="12" y2="13"/>
                        </svg>
                    </div>

                    <div class="content-datetime flax-col">
                        <p>วันรับรถ</p>
                        <input type="date" name="DateMonth" ></input>
                    </div>
                    <hr/>

                    <div className="content-datetime flex-col">
                        <p>เวลารับรถ</p>
                        <select name="time" id="timetogetcar">
                            <option>00.00 </option>
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
                <button className="find-best" onClick={()=>setTab(1)}>
                    ค้นหารถเช่าราคาดีที่สุด
                </button>
            </div>
 
            <div className="progress-bar flex items-center">
                <div className="thisprogress">
                    ผลการค้นหา
                </div>
                <div>
                    รายละเอียดรถ
                </div>
                <div>
                    ข้อมูลการจอง
                </div>
                <div>
                    ตรวจสอบข้อมูล
                </div>
                <div>
                    สร้างการจองแล้ว!
                </div>
            </div>

            <div className="flex">

                {/* left */}
                <div className="flex-col filter-box flex">
                    <div className="content-filterbox flex items-center">
                            <b className="t18px">ฟิลเตอร์</b>
                            <a href="/Carlist" >ล้างค่าทั้งหมด</a>
                    </div>
                    <div className="detail-filter">
                        <div className="flex header-filter">
                            <p>ขนาดรถ</p>
                            <input type="checkbox" class="read-more-state" id="post-1" />
                            <label for="post-1" class="read-more-trigger"></label>
                            <ul class="read-more-wrap">
                                <div className="card-car-sort read-more-target">
                                    <InterestCarSize />
                                </div>
                            </ul>
                        
                        </div>

                        <div className="flex header-filter">
                            <p>ประเภทบริษัทรถเช่า</p>
                            <input type="checkbox" class="read-more-state" id="post-2" />
                            <label for="post-2" class="read-more-trigger"></label>
                            <ul class="read-more-wrap">
                                <div className="read-more-target flex  choicse">
                                    <input type="checkbox" name="check" value="1" className="center"/>
                                    <p>บริษัทรถเช่ารายใหญ่</p>
                                    <div className="description flex-col">
                                        <p>- ไม่ต้องใช้เอกสารเพิ่มเติม</p>
                                        <p>- ชำระด้วยบัตรเครดิตเท่านั้น</p>
                                    </div>
                                    
                                </div>
                                <div className="read-more-target flex  choicse">
                                    <input type="checkbox" name="check" value="2" className="center"/>
                                    <p>บริษัทรถเช่าท้องถิ่น</p>
                                    <div className="description flex-col">
                                        <p>- ต้องส่งเอกสาร</p>
                                        <p>- ชำระด้วยเงินสด/โอนเงิน/Internet Banking หรือชำระด้วยบัตรเครดิตกับผู้ให้บริการ</p>
                                    </div>
                                </div>
                    
                            
                            </ul>
                        
                        </div>
                        
                        
                    </div>


                </div>
                {/* right */}
                <div className="bigfilterbar flex-col">
                    <div className="filterbar flex">
                        <p>ค้นหารถเจอ 19 คัน</p>
                        <a href="/Carlist" >ล้างค่าทั้งหมด</a>
                        
                    </div>

                    <div className="filsortby flex ">
                        <p> เรียงโดย</p>
                           
                        <div 
                            className={tabs === 1 ? 'choosebox-clicked':'choosebox'}
                            onClick={() => setTab(0)}>
                            คะแนนรีวิวและราคา
                        </div>
                        <div 
                            className={tabs === 0 ? 'choosebox-clicked':'choosebox'}
                            onClick={() => setTab(1)}>
                            ราคารวม (จากต่ำสุดก่อน)
                        </div>    
                    </div>
                    {/* sorted by คะแนนรีวิวและราคา */}
                    {tabs === 0 && (
                        <div className="center ">
                        <a><Cardcar/></a>
                        </div>
                    )}
                    {/* sorted by ราคารวม (จากต่ำสุดก่อน) */}
                    {tabs === 1 && (
                        <div className="center ">
                        <a><Cardcar/></a>
                        </div>
                    )}
                    
                    

      
                </div>

            </div>



        </div>

        
    )





}
export default Carlist
