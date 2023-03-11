import React, { useState } from "react";
import PriorityBlock from "./PriorityBlock";
import storage from "../storage";



const ToDo = () => {

    const PRIORITIES = [
        { priority: "highPriority", title: "HIGH", },
        { priority: "lowPriority", title: "LOW", }
    ];

    const [list, setList] = useState(storage.get());

    return (
        <div className="Todo">
            {PRIORITIES.map(({ priority, title }) => {
                return (
                    <PriorityBlock
                        key={title}
                        setList={setList}
                        list={list}
                        priority={priority}
                        title={title}
                    />)
            })
            }
        </div>
    )
}

export default ToDo