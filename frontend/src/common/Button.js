import React from 'react';

export default function Button({ id, classes, value, callback }) {
    return (
        <input type="button" 
            id={id} 
            className={`button ${classes}`}
            value={value} 
            onClick={() => callback()} />
    )
}
