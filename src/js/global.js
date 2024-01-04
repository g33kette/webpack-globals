
if (typeof window.globalVarValues === 'undefined') {
    window.globalVarValues = {
        global1: 0,
        global2: 0,
        global3: 0,
    }

    incrementGlobal1();
    incrementGlobal2();
    console.log('global.js initialised', window.globalVarValues);
}

console.log('global.js imported', window.globalVarValues);

export function incrementGlobal1() {
    window.globalVarValues.global1++;
}

export function incrementGlobal2() {
    window.globalVarValues.global2++;
}

export function incrementGlobal3() {
    window.globalVarValues.global3++;
}

export function globalVars() {
    return window.globalVarValues;
}
