import { globalVars, incrementGlobal2, incrementGlobal3 } from 'global';

export function module2IncrementGlobal2 () {
    incrementGlobal2()
    console.log('module2IncrementGlobal2', globalVars());
}
export function module2IncrementGlobal3 () {
    incrementGlobal3()
    console.log('module2IncrementGlobal3', globalVars());
}