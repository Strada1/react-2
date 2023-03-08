import { useState, useEffect } from 'react';
import Task from './Task';

function List(props) {
    const list = props.dataTasks;

    const [checkbox, setCheckbox] = useState(false);

    function checkboxChenge(e) {
        console.log(e);
        checkbox ? setCheckbox(false) : setCheckbox(true);
    }

    const taskBlok = list[0].map(({ priority, status, title }) => (
        <Task
            key={self.crypto.randomUUID()}
            onValueChange={(e) => checkboxChenge(e)}
            //status={status}
            //priority={priority}
            title={title}
        />
    ));

    //console.log(list[0]);
    return <div className={props.priority + 'PriorityList'}>{taskBlok}</div>;
}

export default List;
