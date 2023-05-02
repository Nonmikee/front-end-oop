import "../styles/Header.css"

function Appheader(){
    return(
        <header className="app-header"> 
            <a href="/"><img className="app-header-logo" src="/images/logo.png"/></a>
            <div className="nav">
                <div>
                    <nav>
                        <a href="/#">เช่ารถกับ Drivehub</a>
                        <a href="/#">ความช่วยเหลือ</a>
                        <a href="/register">สมัครสมาชิก/ลงชื่อเข้าใช้</a>
                    </nav>
                </div>
                <div>
                    <nav>
                        <a href="/#">@drivehub</a>
                        <a href="/#">086-916-6078</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}
export default Appheader