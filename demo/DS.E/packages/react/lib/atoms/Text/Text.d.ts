import React from 'react';
import { FontSize } from '@ds.e/foundation';
import '@ds.e/scss/lib/Text.css';
interface TextProps {
    size?: keyof typeof FontSize;
    children: React.ReactNode;
}
declare const Text: React.FC<TextProps>;
export default Text;
