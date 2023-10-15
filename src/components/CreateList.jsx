import { useTodo } from '../Contexts/TodoContext'
import styles from './CreateList.module.css'

function CreateList() {
    const {setValue,setData,value} = useTodo();
    // {item:"bus",status:true,id:Math.trunc(Math.random()*10000)+1},

    function handleAddTodo(e){
       e.preventDefault();
        if(!value||value===" "||value.length<3)return;
        setData(cur=>[...cur,{item:value,status:false,id:Math.trunc(Math.random()*10000)+1}]);
        setValue("");
    }


    return (
        <form className={styles.addContainer}  >
            <button onClick={handleAddTodo} className={styles.add}>Add</button>
            <input  onChange={(e)=>setValue(e.target.value)} value={value} className={styles.input} placeholder='create a new todo....' type="text"/>
        </form>
    )
}

export default CreateList
