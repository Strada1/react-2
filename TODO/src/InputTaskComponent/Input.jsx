import React from 'react'
import './input.css'

export default function Input(props) {
    return (
        <div>
            <div className="container">
                <div className="task_box">
                        <h1>To do List</h1>
                        <div className="task_input task_input_label">
                            <input
                            type="text"
                            className="text_input"
                            placeholder="Add important tasks to do"
                            onChange={props.inputHandler}
                            value={props.value}/>
                            <button className="btn_input" type="submit">+</button>
                        </div>
                </div>
            </div>
        </div>
    )
}
