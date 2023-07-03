import React, { useState } from 'react';
import Todolist from './Todolist';
import './index.css';

function App() {
const[inputList, setInput] = useState("");
const[Items,setItems]=useState([]);

  const itemevent = (event) =>{
    setInput(event.target.value);
  };
  const listItem =(event)=>{
    setItems((olditems)=>{
       return[...olditems,inputList];
    });
      setInput("");
  };
  return (
    <>
    <div className="box">
      <h1>To do List</h1><br/>
      <div className='input-row'>
      <h3><input type='text' className='Additem' placeholder='Add a Items' onChange={itemevent} value={inputList}/></h3>
      <button className='btn' onClick={listItem}>+</button><br/>
    </div>
    <ol>
        {   Items.map( (itemval) => {
             return <Todolist text={itemval}/>;
        })}
      </ol>
    </div>
    </>
  );
};

export default App;
