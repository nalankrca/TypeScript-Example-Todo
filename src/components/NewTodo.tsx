import React,{useRef} from "react";


const NewTodo : React.FC<{onAddTodo : (text: string) => void}> = (props) => {
//onAddTodo hiçbirşey döndürmemeli.Çünkü fonk. dönüş değeriyle bir şey yapmıyoruz
//
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent)=>{
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value; // ! current olmalı ? olsada olur olmasada 

        if (enteredText.trim().length === 0){
            //throw an error
            return;
        }

        props.onAddTodo(enteredText);
    };

    return(
        <form onSubmit={submitHandler} className="form">
            <label htmlFor="text" >Todo Text</label>
            <input type='text' id='text' ref={todoTextInputRef} />
            <button>Add Todo</button>
        </form>
    );

};
export default NewTodo;