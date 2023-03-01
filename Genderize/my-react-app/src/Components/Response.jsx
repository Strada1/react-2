import React from 'react'

export default function Response(props) {

    function getResponse() {
        fetch(`${props}?name=${name}`)
        .then(response => response.json())
        .then(res => {
            render(res);
        });
    }
    return (
        <div>Response</div>
    )
}
