import React from 'react';
import '@ds.e/scss/lib/Select.css';
interface SelectOption {
    label: string;
    value: string;
}
interface SelectProps {
    label?: string;
    options?: Array<SelectOption>;
    onOptionSelected?: (option: SelectOption, optionIndex: number) => void;
}
declare const Select: React.FC<SelectProps>;
export default Select;
