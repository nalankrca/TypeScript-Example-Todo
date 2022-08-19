import { FC } from "react";

const TodoItem : FC <{text : string ; onRemoveTodo: () => void}> =(props) =>{
    return <li className="item" onClick={props.onRemoveTodo} >
        {props.text}
        </li>
};
export default TodoItem;
