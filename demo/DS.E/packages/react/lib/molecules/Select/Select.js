import React, { useState, useRef, useLayoutEffect } from 'react';
import '@ds.e/scss/lib/Select.css';
import Text from '../../atoms/Text/Text.js';

const Select = ({ label = 'Please select an option', options = [], onOptionSelected, }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [overlayTop, setOverlayTop] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const labelRef = useRef(null);
    useLayoutEffect(() => {
        setOverlayTop((labelRef.current?.offsetHeight || 0) + 10);
    }, [labelRef.current?.offsetHeight]);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    const handleOptionClick = (option, index) => {
        if (onOptionSelected) {
            onOptionSelected(option, index);
        }
        setSelectedIndex(index);
        setIsOpen(false);
    };
    let selectedOption = null;
    if (selectedIndex != null) {
        selectedOption = options[selectedIndex];
    }
    return (React.createElement("div", { className: 'dse-select' },
        React.createElement("button", { ref: labelRef, className: 'dse-select__label', onClick: handleClick },
            React.createElement(Text, null, selectedOption === null ? label : selectedOption.label),
            React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', strokeWidth: 1.5, stroke: 'currentColor', className: `dse-select__caret ${isOpen
                    ? 'dse-select__caret--open'
                    : 'dse-select__caret--close'}`, width: '1rem', height: '1rem' },
                React.createElement("path", { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M19.5 8.25l-7.5 7.5-7.5-7.5' }))),
        isOpen && (React.createElement("ul", { style: { top: overlayTop }, className: 'dse-select__overlay' }, options.map((option, index) => {
            const isSelected = selectedIndex === index;
            return (React.createElement("li", { key: option.value, className: `dse-select__option ${isSelected
                    ? 'dse-select__option--selected'
                    : ''}`, onClick: () => handleOptionClick(option, index) },
                React.createElement(Text, null,
                    " ",
                    option.label,
                    " "),
                isSelected && (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', strokeWidth: 1.5, stroke: 'currentColor', className: 'w-6 h-6', width: '1rem', height: '1rem' },
                    React.createElement("path", { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M4.5 12.75l6 6 9-13.5' })))));
        })))));
};

export { Select as default };
//# sourceMappingURL=Select.js.map
