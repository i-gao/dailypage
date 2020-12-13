import React from 'react';

export default function Longform({ name, id, classes, placeholder, onChange, value, disabled }) {
    return (
        <textarea 
            value={value}
            name={name}
            id={id}
            disabled={disabled}
            className={`longform input ${classes}`}
            placeholder={placeholder}
            onChange={e => onChange(e.target.value)} />
    )
}
