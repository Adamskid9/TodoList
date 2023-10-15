import { useTodo } from '../Contexts/TodoContext'
import styles from './Footer.module.css'

function Footer() {
    const {handleClear,select,data} = useTodo();    
    
    return (
        <div className={styles.footer}>
            <span>item selected ({select.length})</span>
            <span>List item ({data.length})</span>
            <span className={styles.clear} onClick={handleClear}>Clear completed({select.length})</span>
        </div>
    )
}

export default Footer
