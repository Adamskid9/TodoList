import { createContext, useContext, useState } from "react"

const Todo = createContext()
const Data = [
    {item:"shop",status:false,id:Math.trunc(Math.random()*10000)+1},
    {item:"candle",status:false,id:Math.trunc(Math.random()*10000)+1},
    {item:"bus",status:false,id:Math.trunc(Math.random()*10000)+1},
]

function TodoContext({children}) {
const [value,setValue] = useState("");
const [data,setData] = useState(Data);


function handleClear(){
    setData(cur=>cur.filter(item=>item.status!==true))
}

const select = data.filter(value=>value.status===true);

    return <Todo.Provider value={{
        value,
        setValue,
        data,
        setData,
        handleClear,
        select
    }}>
        {children}
    </Todo.Provider>
};

function useTodo(){
    const value = useContext(Todo);
    if (value==="undefine")throw new Error("useTodo has been used outside of the component");

    return value;
}


export { TodoContext,useTodo}
