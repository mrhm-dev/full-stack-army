import Layout from '../components/layout/Layout';
import Section from '../components/section/Section';

const experiences = [
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, sed.',
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, sed.',
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, sed.',
];

const educations = [
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, sed.',
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, sed.',
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, sed.',
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, sed.',
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, sed.',
];

const Home = () => {
	return (
		<Layout>
			<Section title="Experiences" items={experiences} />
			<Section title="Educations" items={educations} />
		</Layout>
	);
};

export default Home;
