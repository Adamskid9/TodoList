import List from "./List"
import styles from './Items.module.css'
import { useTodo } from "../Contexts/TodoContext"
import Empty from "./Empty"




function Items() {
    const {data} = useTodo()

    return <ul className={styles.items}>
        {data.length?
         data.map(val=><List key={val.id} status={val.status} id={val.id} item={val.item} /> ):
         <Empty/>  
        }
     </ul> 
}

export default Items
