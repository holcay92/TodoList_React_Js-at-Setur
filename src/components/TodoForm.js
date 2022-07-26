import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const[input,setInput]=useState('')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e =>{
        setInput(e.target.value);
    }

    //to prevent refreshing the page on every click we write this function
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit ({
            id: Math.floor(Math.random()*10000),
            text: input
        });

        setInput('');
    };
  return (
    /* to prevent refreshing the page we write this function call*/
    <form className="todo-form" onSubmit={handleSubmit}>
        {props.edit ? (
            <>
                <input
                    type="text"
                    placeholder="Update your item"
                    value={input}
                    name="text" 
                    className='todo-input edit'
                    onChange={handleChange}
                    ref={inputRef}
                    />
                <button className='todo-button edit'>Update</button>
                </>
                ):(
                    <button>
                        <input
                        type="text"
                        placeholder="Add a todo"
                        value={input}
                        name="text" 
                        className='todo-input'
                        onChange={handleChange}
                        ref={inputRef}
                        />
                    <button className='todo-button'>Add todo</button>
                </button>
        )}
    </form>
  );
}

export default TodoForm