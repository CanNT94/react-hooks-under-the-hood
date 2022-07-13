import {render} from "../index";

let currentHook = -1;
const stateValues = [];

export const useState = (initialValue) => {
    currentHook++;

    const currentHookIndex = Number(currentHook);

    if (stateValues[currentHookIndex] === undefined) {
        stateValues[currentHookIndex] = initialValue;
    }

    const setValue = (newValue) => {
        stateValues[currentHookIndex] = newValue;
        // Gọi lại hàm render để update lại value trên DOM và reset lại currentHook khi render lại
        currentHook = -1;
        render();
    };

    return [stateValues[currentHookIndex], setValue];
}