import { useState } from 'react';
import BlockTodo from './BlockTodo';

function Header(props) {
    function handleChange(e) {
        props.onValueChange(e.target.value);
    }

    return (
        <input
            onChange={handleChange}
            value={props.value}
            type="text"
            className="inputAddTask"
            placeholder="Добавить важные делa"
        />
    );
}

export default Header;
