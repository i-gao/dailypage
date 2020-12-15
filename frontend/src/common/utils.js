const cfg = require("../config");

export const readFile = (file) => {
    var req = new Request(`${cfg.SERVER}/read`, {
        "method": 'GET',
        "headers": new Headers({
            "file": file
        })
    })
    return fetch(req)
        .then(res => {
            if (res.ok) return res.text();
            else throw res.text();
        })
        .catch(async msg => console.log(await msg));
}

export const writeFile = (subdir, filename, value) => {
    var req = new Request(`${cfg.SERVER}/save`, {
        "method": 'POST',
        "headers": new Headers({
            "Content-Type": "application/json"
        }),
        "body": JSON.stringify({
            "subdir": subdir, 
            "file": filename,
            "data": value
        })
    });
    return fetch(req)
        .then(res => res.text())
        .then(msg => console.log(msg));
}

export const saveEntry = (values, subdir) => {
    // check for empty entries
    if (Object.values(values).every(x => x == "")) {
        console.error("Nothing to save.");
        return;
    }

    // convert values to saveable string
    const now = new Date();
    const output = [now.toDateString(), ...Object.values(values)].join('\n')

    // get title
    let diff = now - new Date(now.getFullYear(), 0, 0);
    let oneDay = 1000 * 60 * 60 * 24;   
    let day = Math.floor(diff / oneDay);

    writeFile(
        subdir,
        `${now.getFullYear()}_${day}.txt`, 
        output
    );

    alert("Saved entry.");
}