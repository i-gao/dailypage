import React, { useState } from 'react';

import Shortform from '../common/Shortform';
import Longform from '../common/Longform';
import ButtonRow from '../common/ButtonRow';
import Button from '../common/Button';

import { saveEntry } from '../common/utils';

const INIT_VALUES = {
    "reads": "",
    "insights": "",
    "future": "",
    "roi": ""
}

export default function Read() {
    var [values, setValues] = useState(INIT_VALUES);
    const handleChange = (id, val) => {
        let newValues = {};
        Object.assign(newValues, values);
        newValues[id] = val;
        setValues(newValues);
    }

    const save = () => saveEntry(values, "reads")

    return (
        <>
            <Shortform
                id="read-reads"
                classes="title"
                value={values.reads}
                onChange={(val) => handleChange("reads", val)}
                placeholder="book name // more books // they don't have to be finished" />
            <Longform
                id="read-insights"
                value={values.insights}
                onChange={(val) => handleChange("insights", val)}
                placeholder="the favorite // things // I learned" />
            <Shortform
                id="read-future"
                value={values.future}
                onChange={(val) => handleChange("future", val)}
                placeholder="some other titles // I like" />
            <Shortform
                id="read-roi"
                value={values.roi}
                onChange={(val) => handleChange("roi", val)}
                placeholder="the most unexpected great read" />
            <ButtonRow>
                <Button id="save" value="save &rarr;" callback={() => save()} />
            </ButtonRow>
        </>
    )
}