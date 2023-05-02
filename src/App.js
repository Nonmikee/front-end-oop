import './App.css';
import Appheader from './component/Header';
import Searchcar from './component/SearchCar';
import Carlist from './component/Carlist';
import Carinfo from './component/Carinfo'


import  { Route, Routes } from "react-router-dom"

function App() {

    return (
        
        < div >
            <Appheader/>
            <Routes>
                <Route path="/" element={<Searchcar/>}/>
                <Route path='/Carlist' element={<Carlist/>}/>
                <Route path='/Carinfo' element={<Carinfo/>}/>
            </Routes>
            
        </div >

        
    );
}

export default App;