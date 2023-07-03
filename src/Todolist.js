import React from "react";


const Todolist = (props) => {
return(
    <>
    <div className="todo_style">
    
    {props.text}
    </div>
    </>
)

};

export default Todolist;