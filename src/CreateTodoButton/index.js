import React from 'react'
import './CreateTodoButton.css';


function CreateTodoButton(props) {

    const onClickBtn = (msg) => {
        /* alert(msg); */
        props.setOpenModal(!props.openModal);
    }

    return (
        <button 
            className="CreateTodoButton"
            onClick={ onClickBtn } 
        >
            +
        </button>
    );

}

export { CreateTodoButton };
