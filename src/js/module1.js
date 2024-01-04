import { globalVars,  incrementGlobal1 } from 'global';

export function module1IncrementGlobal1ThreeTimes () {
    incrementGlobal1()
    incrementGlobal1()
    incrementGlobal1()
    console.log('module1IncrementGlobal1ThreeTimes', globalVars());
}