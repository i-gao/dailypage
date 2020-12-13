import React, { useState } from 'react';
import cfg from '../config';

import Shortform from '../common/Shortform';
import Longform from '../common/Longform';
import ButtonRow from '../common/ButtonRow';
import Button from '../common/Button';

import { readFile, saveEntry } from '../common/utils';

const INIT_VALUES = {
    "title": "",
    "body": ""
}

export default function Write() {
    var prompts;
    readFile(cfg.PROMPTS_TXT)
        .then(r => { if (r) prompts = r.split('\n') });

    var [values, setValues] = useState(INIT_VALUES);
    const handleChange = (id, val) => {
        let newValues = {};
        Object.assign(newValues, values);
        newValues[id] = val;
        setValues(newValues);
    }

    const getPrompt = () => {
        if (!prompts) return;
        if (values.title && !window.confirm("Overwrite existing title?")) return;

        let rand = Math.floor(Math.random() * ((prompts.length - 1) - 0) + 0);
        let randprompt = prompts[rand];
        handleChange("title", randprompt);
    }

    const save = () => saveEntry(values, "entries");

    return (
        <>
            <Shortform
                id="write-title prompt-holder"
                classes="title"
                value={values.title}
                onChange={(val) => handleChange("title", val)}
                placeholder="another whimsical thought..." />
            <Longform
                id="write-body"
                value={values.body}
                onChange={(val) => handleChange("body", val)}
                placeholder="finally free to write away..." />
            <ButtonRow>
                <Button id="prompt" value="prompt ?" callback={() => getPrompt()} />
                <Button id="save" value="save &rarr;" callback={() => save()} />
            </ButtonRow>
        </>
    )
}