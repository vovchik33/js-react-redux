export const COUNTER_INCREMENT = "counter_increment";
export const COUNTER_DECREMENT = "counter_decrement";
export const COUNTER_RESET = "counter_reset";

export function increment(value=1) {
    return {type: COUNTER_INCREMENT, value}
}

export function decrement(value=1) {
    return {type: COUNTER_DECREMENT, value}
}

export function reset(value=0) {
    return {type: COUNTER_RESET, value}
}