import { Link } from "react-router-dom"

function Test() {
    return (
        <div>
            <div style={{color:"black",fontSize:"20px",padding:"5px"}}>
                 hello world reload me please !!!
            </div>

            <Link to={"/"} style={{fontSize:"18px",padding:"4px"}}>
                back menu page
            </Link>
           

        </div>
    )
}

export default Test
