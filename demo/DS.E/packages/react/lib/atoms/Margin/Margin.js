import React from 'react';
import '@ds.e/scss/lib/Margin.css';

const Margin = ({ space = 'md', left, right, top, bottom, children, }) => {
    let className = '';
    if (!left && !right && !top && !bottom) {
        className = `dse-margin-${space}`;
    }
    if (left)
        className += `dse-margin-left-${space} `;
    if (right)
        className += `dse-margin-right-${space} `;
    if (top)
        className += `dse-margin-top-${space} `;
    if (bottom)
        className += `dse-margin-bottom-${space}`;
    return React.createElement("div", { className: className }, children);
};

export { Margin as default };
//# sourceMappingURL=Margin.js.map
