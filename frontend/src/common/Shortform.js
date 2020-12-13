import React from 'react';

export default function Shortform({ name, id, classes, placeholder, onChange, value }) {
    return (
        <input type="text"
            value={value}
            name={name}
            id={id}
            className={`shortform input ${classes}`}
            placeholder={placeholder}
            onChange={(onChange) ? e => onChange(e.target.value) : null} />
    )
}
