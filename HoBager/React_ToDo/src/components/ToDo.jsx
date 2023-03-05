import React, { useEffect, useState } from "react";
import PriorityBlock from "./PriorityBlock";
import storage from "./storage";



const ToDo = () => {

    const PRIORITY = {
        HIGH : "highPriority",
        LOW : "lowPriority",
    }

    const [list, setList] = useState(storage.get());

    useEffect(() => {
        storage.save(list);
    },[list])

    return (
        <div className="Todo">
            <PriorityBlock 
                listControl={setList} 
                list = {list} 
                priority = {PRIORITY.HIGH} 
                title = "HIGH" 
            />
            <PriorityBlock 
                listControl={setList} 
                list = {list} 
                priority = {PRIORITY.LOW} 
                title = "LOW" 
            />
        </div>
    )
}

export default ToDo