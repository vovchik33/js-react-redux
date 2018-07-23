export const COUNTER_INCREMENT = "counter_increment";
export const COUNTER_DECREMENT = "counter_decrement";
export const COUNTER_RESET = "counter_reset";

export function increment(value) {
    return {type: COUNTER_INCREMENT, value}
}

export function decrement(value) {
    return {type: COUNTER_DECREMENT, value}
}

export function reset(value) {
    return {type: COUNTER_RESET, value}
}