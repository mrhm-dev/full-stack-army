import styled from 'styled-components';

const fontSizes = {
	sm: '0.8rem',
	md: '1rem',
	lg: '1.2rem',
};

const BaseButton = styled.button`
	border: none;
	outline: none;
	border-radius: 0.15rem;
	text-transform: uppercase;
	letter-spacing: 2px;
	padding: 0.5rem 1rem;
	cursor: pointer;
	font-size: ${(props) => fontSizes[props.size] ?? fontSizes.md};
`;

const PrimaryButton = styled(BaseButton)`
	background: red;
	color: white;
`;

const App = () => {
	return (
		<div>
			<h1>App</h1>
			<BaseButton size="sm">I am a button</BaseButton>
			<PrimaryButton>Primary Button</PrimaryButton>
		</div>
	);
};

export default App;
