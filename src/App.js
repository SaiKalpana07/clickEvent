import './App.css';
import { useState } from "react"

function App() {

const fruits = ["apple","mango","orange","strawberry","appy","mosambi","mangoes","appyFizz","applePie"];
const newArray = []
const[arrayList,setArrayList] = useState("")
const[value,setValue] = useState("")

  const handleChange = (event) => {
  setArrayList(event.target.value)
  setValue(event.target.value)
  }

  const filteredData = 
    fruits.filter((f) => {
       console.log(f,"filter")
       if (f.includes(arrayList)) {
        newArray.push(f)
        console.log(f,"check")
        console.log(arrayList,"checkArray") 
      }
    })
    console.log(newArray,"new")
  
  return (
    <div className="App">
      <h1>Click events</h1>
      <input type="text" onChange={handleChange} value={value}/>
      <h5>{newArray}</h5>
    </div>
  );
}

export default App;
