import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import '@ds.e/scss/lib/Select.css';
import Text from '../../atoms/Text/Text.js';

const KEY_CODES = {
    ENTER: 13,
    SPACE: 32,
    DOWN_ARROW: 40,
    UP_ARROW: 38,
    ESC: 27,
};
const getNextOptionIndex = (currentIndex, options) => {
    if (currentIndex === null) {
        return 0;
    }
    if (currentIndex === options.length - 1) {
        return 0;
    }
    return currentIndex + 1;
};
const getPreviousOptionIndex = (currentIndex, options) => {
    if (currentIndex === null) {
        return 0;
    }
    if (currentIndex === 0) {
        return options.length - 1;
    }
    return currentIndex - 1;
};
const Select = ({ label = 'Please select an option', options = [], onOptionSelected, renderOption, }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [overlayTop, setOverlayTop] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [highlightedIndex, setHighlightedIndex] = useState(null);
    const [optionRefs, setOptionRefs] = useState([]);
    const labelRef = useRef(null);
    useLayoutEffect(() => {
        setOverlayTop((labelRef.current?.offsetHeight || 0) + 10);
    }, [labelRef.current?.offsetHeight]);
    useLayoutEffect(() => {
        if (highlightedIndex !== null && isOpen) {
            const ref = optionRefs[highlightedIndex];
            if (ref && ref.current) {
                ref.current.focus();
            }
        }
    }, [isOpen, highlightedIndex]);
    useEffect(() => {
        setOptionRefs(options.map((_) => React.createRef()));
    }, [options.length]);
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
    const onButtonKeyDown = (event) => {
        event.preventDefault();
        if ([KEY_CODES.ENTER, KEY_CODES.SPACE, KEY_CODES.DOWN_ARROW].includes(event.keyCode)) {
            setIsOpen(true);
            // set focus to the first item
            highlightItem(0);
        }
    };
    const onOptionKeyDown = (event) => {
        // handle escape key press
        if (event.keyCode === KEY_CODES.ESC) {
            setIsOpen(false);
            return;
        }
        // handle down arrow key press
        if (event.keyCode === KEY_CODES.DOWN_ARROW) {
            highlightItem(getNextOptionIndex(highlightedIndex, options));
        }
        // handle up arrow key press
        if (event.keyCode === KEY_CODES.UP_ARROW) {
            highlightItem(getPreviousOptionIndex(highlightedIndex, options));
        }
        // handle enter key press
        if (event.keyCode === KEY_CODES.ENTER) {
            handleOptionClick(options[highlightedIndex], highlightedIndex);
        }
    };
    const highlightItem = (optionIndex) => {
        setHighlightedIndex(optionIndex);
    };
    let selectedOption = null;
    if (selectedIndex != null) {
        selectedOption = options[selectedIndex];
    }
    return (React.createElement("div", { className: 'dse-select' },
        React.createElement("button", { ref: labelRef, className: 'dse-select__label', onClick: handleClick, onKeyDown: onButtonKeyDown, "aria-haspopup": true, "aria-expanded": isOpen ? true : undefined, "aria-controls": 'dse-select-list' },
            React.createElement(Text, null, selectedOption === null ? label : selectedOption.label),
            React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', strokeWidth: 1.5, stroke: 'currentColor', className: `dse-select__caret ${isOpen
                    ? 'dse-select__caret--open'
                    : 'dse-select__caret--close'}`, width: '1rem', height: '1rem' },
                React.createElement("path", { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M19.5 8.25l-7.5 7.5-7.5-7.5' }))),
        isOpen && (React.createElement("ul", { role: 'menu', id: 'dse-select-list', style: { top: overlayTop }, className: 'dse-select__overlay' }, options.map((option, index) => {
            const isSelected = selectedIndex === index;
            const isHighlighted = highlightedIndex === index;
            const ref = optionRefs[index];
            const renderOptionProps = {
                option,
                isSelected,
                getOptionRecommendedProps: (overrideProps = {}) => ({
                    // here we will define default props
                    key: option.value,
                    className: `dse-select__option 
								 ${isSelected ? 'dse-select__option--selected' : ''} 
								 ${isHighlighted ? 'dse-select__option--highlighted' : ''}
								`,
                    ref,
                    role: 'menuitemradio',
                    'aria-checked': isSelected ? true : undefined,
                    'aria-label': option.label,
                    tabIndex: isHighlighted ? -1 : 0,
                    onClick: () => handleOptionClick(option, index),
                    onMouseEnter: () => highlightItem(index),
                    onMouseLeave: () => highlightItem(null),
                    onKeyDown: onOptionKeyDown,
                    // here we will spread override props (user given props)
                    ...overrideProps,
                }),
            };
            if (renderOption) {
                return renderOption(renderOptionProps);
            }
            return (React.createElement("li", { ...renderOptionProps.getOptionRecommendedProps() },
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
