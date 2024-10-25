type DebounceFunction<T extends any[]> = (...args: T) => void;

const debounce = <T extends any[]>(fn: DebounceFunction<T>, delay: number): DebounceFunction<T> => {
    let timerId: NodeJS.Timeout | undefined;

    return (...args: T) => {
        if (timerId) {
            clearTimeout(timerId);
        }

        timerId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
};

export default debounce;
