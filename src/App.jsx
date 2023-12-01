import "./index.css";
import CreateList from "./components/CreateList";
import Items from "./components/Items";
import Header from "./components/Header"
import styles from './App.module.css'
import Footer from "./components/Footer";
import CopyRight from "./components/CopyRight";
import GlowEffect from "./components/GlowEffect";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "./components/Test";



function App() {

  return (
    <BrowserRouter>
    <Routes>   
      <Route index element={
            <div>
    <div className={styles.app}>
      <GlowEffect top={20} left={20}/>
      <main>
        <Header/>
        <CreateList/>
        <Items/>
        <Footer/>
        <CopyRight/>
      </main>
      
    </div>
    
    </div>
      } />
      <Route path="test" element={<Test/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App;

// unsplash
// access key : VtGjTJg5Rhhgm-02jaJhGJf6mIiOZ2-myk3V7gSshXA
// secret key : TkThB3-LjzYLyuTLpyUwpq4ipmw2X4PTL7zCktpK4PU