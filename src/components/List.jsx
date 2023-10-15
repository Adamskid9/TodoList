import { useState } from 'react'
import { useTodo } from '../Contexts/TodoContext'
import styles from './List.module.css'

function List({item,id,status}) {

const {setData,data} = useTodo();


function handleStatus(){
setData(cur=>cur.map(item=>item.id===id?{...item,status:!item.status}:item))
 }

 function handleDelete(id){
 setData(cur=>cur.filter(item=>item.id!==id))
 }
console.log(status)
    console.log(data)
    return <li className={styles.list}  >
        <input className={styles.checkBox} onClick={handleStatus} type="checkbox"/>
        <span  className={styles.text} style={status?{textDecoration: "line-through"}:{}}>{item}</span>
        <span className={styles.delete} onClick={()=>handleDelete(id)} >Delete</span>
    </li>
}

export default List
