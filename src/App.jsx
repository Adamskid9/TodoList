import "./index.css";
import CreateList from "./components/CreateList";
import Items from "./components/Items";
import Header from "./components/Header"
import styles from './App.module.css'
import Footer from "./components/Footer";
import CopyRight from "./components/CopyRight";
import GlowEffect from "./components/GlowEffect";



function App() {

  return (
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
  )
}

export default App;

// unsplash
// access key : VtGjTJg5Rhhgm-02jaJhGJf6mIiOZ2-myk3V7gSshXA
// secret key : TkThB3-LjzYLyuTLpyUwpq4ipmw2X4PTL7zCktpK4PU