import { useState } from "react";

export default function useToggle(initialState: boolean): [boolean, (value?: boolean) => void] {
    const [value, setValue] = useState<boolean>(initialState);

    const toggleValue = (value?: boolean): void => {
        setValue(currentValue => typeof value === "boolean" ? value : !currentValue);
    };

    return [value, toggleValue];
};