import { useState } from 'react';
import BlockTodo from './BlockTodo';
import './App.css';

const todoBlocks = [
    { priority: 'high', title: 'HIGH' },
    { priority: 'low', title: 'LOW' },
];

function App() {
    const taskBlok = todoBlocks.map(({ priority, title }) => (
        <BlockTodo
            key={priority.toString()}
            priority={priority}
            title={title}
        />
    ));

    return (
        <div className="containerTodo">
            <div className="containerSheet">{taskBlok}</div>
        </div>
    );
}

export default App;
