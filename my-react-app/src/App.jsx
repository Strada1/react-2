import { useState } from 'react';
import BlockTodo from './BlockTodo';
//import { creatTask } from './Task';
import './App.css';

const todoBlocks = [
    { priority: 'high', title: 'HIGH' },
    { priority: 'low', title: 'LOW' },
];

const defaultValue = '';

function App() {
    //const [inputText, setInputText] = useState(defaultValue);

    const localStorageData = localStorage.getItem('tasks');
    const localStorageDataObj = JSON.parse(localStorageData) ?? [];

    const taskBlok = todoBlocks.map(({ priority, title }) => (
        <BlockTodo
            key={priority}
            title={title}
            priority={priority}
            // inputText={inputText}
            localStorageDataObj={localStorageDataObj}
            /*onValueChange={(text) => {
                setInputText(text);
            }}*/
        />
    ));

    return (
        <div className="containerTodo">
            <div className="containerSheet">{taskBlok}</div>
        </div>
    );
}

export default App;
