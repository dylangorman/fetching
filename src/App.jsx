
import React, { useState } from "react";
import "./App.css";

const App =() => {
    const [data, setData] = useState({})
    const handleFetch = async () =>{
    const response = await fetch("https://api.chucknorris.io/jokes/random", {
        method: "GET",
    })
    const data = await response.json()
    setData(data)
    }
    return (
        <div>
            <h1> CHUCK NORRIS QUOTE MACHINE!</h1>
            {data.value ? <Quote data ={data.value} /> : <p>click the button to get your quote</p>}
            <button onClick={handleFetch}>Click me</button>
        </div>
    )
}

const Quote = ({data}) =>(
    <p>{data}</p>
)

export default App;


// C - CREATE 
// R - READ 
// U - UPDATE 
// D - DELETE 

