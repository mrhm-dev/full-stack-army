import React from 'react';
import { FontSize } from '@ds.e/foundation';
import '@ds.e/scss/lib/Text.css';

interface TextProps {
	size?: keyof typeof FontSize;
	children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ size = FontSize.base, children }) => {
	const className = `dse-text dse-text-${size}`;
	return <p className={className}>{children}</p>;
};

export default Text;
