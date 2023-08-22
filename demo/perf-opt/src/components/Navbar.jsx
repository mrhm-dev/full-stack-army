import { memo, useEffect, useMemo, useState } from 'react';

const getN = () => {
	let n = 0;
	for (let i = 0; i < 900_000_000; i++) {
		n += i;
	}

	return n;
};

const Navbar = () => {
	const n = useMemo(() => getN(), []);

	return (
		<nav style={{ display: 'flex', justifyContent: 'space-between' }}>
			<h3>Brand Name - {n}</h3>
			<div>
				<a href='#'>One</a>
				<a href='#'>Two</a>
				<a href='#'>Three</a>
			</div>
		</nav>
	);
};

export default memo(Navbar);
