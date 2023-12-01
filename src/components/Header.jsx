import { useEffect, useState } from "react";
import styles from './Header.module.css'
import Sun from "./Sun";
import Moon from "./Moon";


function Header() {
    const [mode,setMode] = useState(true);
    
    useEffect(function(){
        document.documentElement.classList.toggle("filter")
    },[mode]);

     function handleMode(){
      setMode(cur=>!cur)
     }
    return (
        <div className={styles.header}>
            <span className={styles.todo} >Todo</span>
            <span className={styles.mode} onClick={handleMode}>{mode?<Sun/>:<Moon/>}</span>
        </div>
    )
}

export default Header
