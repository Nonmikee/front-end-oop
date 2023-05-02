import { Navigate, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import "../styles/Carinfo.css"

function Carinfo (){
    const [tabsDetail,setTabDetail] = useState(0)
    const [tabsReact,setTabReact] = useState(0)

    return(
        <div>
    <div className="progress-bar flex items-center ">
                <div>
                    <a href="/Carlist">
                    ผลการค้นหา
                    </a>
                </div>
                
                <div className="thisprogress">
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
    <div className="bigbox flex  font">
        <div className="carallin ">
            <div className="carname ">
                <div className="flex">
                    <h1>Susuki swift 2015</h1>
                    <div className="">
                        <small>ให้บริการโดย {'abcd'}</small>
                    </div>
                </div>
            </div>
            <div className="carpic flex">
                <img className='avatar'src='https://i.ndtvimg.com/progold/293107_thumb.jpg'/>
                <img className="avatar" src='https://img.icarcdn.com/autospinn/body/000000979016_3cad08a9_1e23_457f_a96a_1ec9be2bb863.jpg'/>
            </div>
            <div className="info flex ">
                <div 
                    className={tabsDetail === 1 ? 'choosebox-clicked':'choosebox'}
                    onClick={() => setTabDetail(0)}>
                    รายละเอียดรถยนต์
                </div>
                <div 
                    className={tabsDetail === 0 ? 'choosebox-clicked':'choosebox'}
                    onClick={() => setTabDetail(1)}>
                    ข้อมูลควรรู้
                </div>    
                
            </div>
            <div className="detail-info">
                {tabsDetail === 0 && (
                    <div className="flex-col">
                        <p>ข้อมูลรถ</p>
                        <div className="flex detail-car">
                            <div className="flex-col  detail-car-div">
                                <div className="flex">
                                    <div>ปีจดทะเบียน</div>
                                    <div >{'2020'}</div>
                                </div>
                                <div className="flex">
                                    <div>เกียร์</div>
                                    <div>{'auto'}</div>
                                </div>
                                <div className="flex">
                                    <div>ประเภท</div>
                                    <div>{'type'}</div>
                                </div>
                                <div className="flex">
                                    <div>จำนวนผู้โดยสาร</div>
                                    <div>{'4'}</div>
                                </div>
                            </div>
                            <div className="flex-col detail-car-div">
                                <div className="flex">
                                    <div>กระเป๋าใบใหญ่</div>
                                    <div>{'4'}</div>
                                </div>
                                <div className="flex">
                                    <div>กระเป๋าใบเล็ก</div>
                                    <div>{'4'}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {tabsDetail === 1 && (
                    <div className="flex-col">
                        <p>ข้อมูลควรรู้</p>
                        <ol type="1" className="should-to-know toppad">
                            <li>จองง่ายๆ เพียงกดปุ่ม “เลือกรถคันนี้” และกรอกข้อมูลไม่เกิน 1 นาที</li>
                            <li>รับหมายเลขการจอง: แต่การจองของคุณยังไม่สำเร็จ หากไม่มีผู้ให้บริการรถคันที่คุณเลือกไว้ติดต่อกลับมา หรือยืนยันการจอง</li>
                            <li>แอดไลน์ส่งเอกสาร: เตรียมเอกสารให้พร้อม</li>
                            <li>ชำระเงินโดยตรงกับผู้ให้บริการ:โดยส่วนมากมีค่าล็อคคิวหรือค่าเช่าบางส่วน ที่ลูกค้าจะต้องชำระก่อน ส่วนที่เหลือชำระ ณ วันรับรถ</li>
                            <li>ยืนยันการจองโดยผู้ให้บริการ: คุณจะได้รับ sms และ email ยืนยันการจอง (หากขั้นตอนที่ 3 และ 4 ครบถ้วนแล้ว)</li>
                            <li>รับรถ: ตามสถานที่นัดหมายกับผู้ให้บริการ</li>
                        </ol>
                    </div>
                )}

            </div>
            <div className="service-by">
                <p>ให้บริการโดย</p>
                
                <div className="info flex ">
                    <div 
                        className={tabsReact === 1 ? 'choosebox-clicked':'choosebox'}
                        onClick={() => setTabReact(0)}>
                        รายละเอียดผู้ให้บริการ
                    </div>
                    <div 
                        className={tabsReact === 0 ? 'choosebox-clicked':'choosebox'}
                        onClick={() => setTabReact(1)}>
                        คะแนนรีวิวจากผู้ใช้บริการ
                    </div>    
                </div>
            <div className="detail-service">
                {tabsReact === 0 && (
                    <div className="flex-col">
                        <div className="border-box">
                            <div className="haed">เวลาทำการ</div>
                            <div>{"เวลาทำการ 09.00 - 20.00 น"}</div>
                        </div>
                        <div className="border-box">
                            <div className="haed">รับส่งรถนอกเวลาทำการ</div>
                            <div>{"หลัง 20.00 น คิดค่า โอที ชั่วโมงละ 100 บาท"}</div>
                        </div>
                        <div className="border-box">
                            <div className="haed">พื้นที่รับส่งรถ</div>
                            <div>{"กรณ๊ 1 วัน รบกวนทางลูกค้ามารับตรง BTS พระโขนง อ่อนนุช เอกมัย"}</div>
                        </div>
                        <div className="border-box">
                            <div className="haed">การชำระเงิน</div>
                            <div>{"รับด้วยเงินสด และ บัตรเครดิต ( ชาร์จ 3 % )"}</div>
                        </div>
                        <div className="border-box">
                            <div className="haed">ประกันเสริม</div>
                            <div>{"ประกันเสริม"}</div>
                        </div>
                    </div>
                )}
                {tabsReact === 1 && (
                    <div className="flex-col">
                        <div className="flex  level">
                            <input type="checkbox" name="check" value="1" className="center"/>
                            <p>เลือกดูเฉพาะผู้ใช้บริการรถคันนี้</p>
                        </div>
                            <div className="reviwe"></div>
                        
                    </div>
                )}

            </div>
            
        </div>





        </div>
        <div className="payment  font">
            <div>จองออนไล์ได้ 24 ชั่วโมง</div>
            <div className="datebox flex">
                    <div className="givecar flex-col">
                        <div className="flex juti-between">
                            <div className="gray" >รับรถ</div>
                            <a href="#">เปลี่ยนวัน</a>
                        </div>
                        <div className="center">สนาม</div>
                        <div className="center">1/4/2023</div>  
                    </div>
                    <div className="takecar  flex-col">
                        <div className="flex juti-between">
                            <div className="gray" >คืนรถ</div>
                            <a href="#">เปลี่ยนวัน</a>
                        </div>
                        <div className="center">สนามคือกัน</div>
                        <div className="center">1/5/2023</div>   
                        
                    </div>
            </div>
            <div className="detail-price">
                <div className=" flex juti-between">
                <div>ค่าเช่ารถสำหรับ 2 วัน</div>
                <div>12234235 บาท</div>
                </div>
                <hr/>
                <div className=" flex  juti-between">
                    <div>ค่าบริการรับ-ส่ง</div>
                    <div>1 บาท</div>   
                </div>
                <hr/>
                <div className=" flex juti-between">
                    <div>ราคารวมทั้งหมด</div>
                    <div>10 บาท</div>
                </div>
                <hr/>
                <div className="flex-col ">
                    <div>ใส่รหัสส่วนลด</div>
                    <div className="flex">
                        <div className="couponinput">
                            <label for="coupon"></label>
                            <input type="text"/>
                        </div>
                        <div className="leftpad"></div>
                        <a>
                            <button type="submit" className="submit">
                                <p>ใช้ส่วนลด</p>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="depositebox" >
                <div className="flex">
                    <div><svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" version="1.1">
                            <path d="M28.373 4.515c-0.371-0.346-0.859-0.538-1.364-0.538-0.046 0-0.092 0.002-0.137 0.005-0.029 0.002-0.35 0.022-0.852 0.022-0.833 0-2.459-0.057-3.999-0.436-1.989-0.489-4.285-2.755-4.953-3.202-0.336-0.225-0.724-0.337-1.111-0.337-0.386 0-0.774 0.112-1.111 0.336-0.081 0.054-2.485 2.626-4.836 3.203-1.539 0.379-3.197 0.436-4.029 0.436-0.503 0-0.824-0.019-0.856-0.022-0.044-0.003-0.088-0.005-0.132-0.005-0.506 0-0.996 0.193-1.368 0.54-0.405 0.378-0.635 0.907-0.635 1.46v5.001c0 18.488 12.098 20.869 12.611 20.962 0.117 0.020 0.236 0.032 0.354 0.032s0.238-0.011 0.354-0.032c0.514-0.093 12.7-2.473 12.7-20.962v-5.001c0.001-0.554-0.23-1.084-0.635-1.462zM27.010 10.978c0 17.029-11.054 18.993-11.054 18.993s-10.965-1.965-10.965-18.993v-5.001s0.378 0.027 0.99 0.027c1.049 0 2.813-0.077 4.505-0.493 2.77-0.679 5.47-3.482 5.47-3.482s2.82 2.802 5.587 3.482c1.694 0.416 3.428 0.493 4.477 0.493 0.611 0 0.99-0.027 0.99-0.027s0 0.636 0 5.001h0zM20.237 10.82c-0.39-0.39-1.024-0.39-1.414 0l-2.829 2.829-2.829-2.829c-0.39-0.39-1.024-0.39-1.415 0s-0.39 1.024 0 1.414l2.829 2.829-2.829 2.829c-0.39 0.39-0.39 1.024 0 1.414s1.024 0.39 1.415 0l2.829-2.829 2.829 2.828c0.39 0.39 1.024 0.39 1.414 0s0.39-1.024 0-1.414l-2.829-2.829 2.828-2.829c0.39-0.39 0.39-1.024 0-1.414z"/>
                            </svg>ค่ามัดจำเพื่อประกันความเสียหาย
                    </div>
                    <div>200 บาท</div>
                </div>
                
                <div className="leftpad">
                    <small>ชำระ ณ วันที่รับรถเช่า และได้รับคืนเมื่อสิ้นสุดการเช่า</small>
                </div> 
            
            </div>
            <div className="toppad">
                <div className="flex toppad">
                    <p className="">
                        รวมประกันภัยพื้นฐาน
                    </p>
                    <p className="">
                        บริการรับส่งรถตามจุดที่ให้บริการ
                    </p>
                </div>
                <div className="center">
                    <button className="submitcar" /*onClick={(e)=>Navigate()}*/>
                        เลือกรถคันนี้
                    </button>
                </div>
            </div>
            
        </div>
    </div>
</div>
    )
}

export default Carinfo
