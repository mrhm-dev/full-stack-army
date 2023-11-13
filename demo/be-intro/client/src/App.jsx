import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './App.css';

const DownloadButton = ({ base64Image, fileName }) => {
	const downloadImage = () => {
		const link = document.createElement('a');
		link.download = fileName;
		link.href = base64Image;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return <button onClick={downloadImage}>Download</button>;
};

DownloadButton.propTypes = {
	base64Image: PropTypes.string,
	fileName: PropTypes.string,
};

function App() {
	const [rawFile, setRawFile] = useState(null);
	const [webpBase64, setWebpBase64] = useState(null);
	const [jpgBase64, setJpgBase64] = useState(null);

	useEffect(() => {
		if (rawFile) {
			handleInputChange(rawFile);
		}
	}, [rawFile]);

	const handleInputChange = (file) => {
		let reader = new FileReader();
		reader.readAsDataURL(file);

		reader.onload = (e) => {
			setWebpBase64(e.target.result);
		};
	};

	const handleConvert = () => {
		if (webpBase64) {
			axios
				.post('http://localhost:4000/convert', { webp: webpBase64 })
				.then(({ data }) => {
					setJpgBase64(data.jpg);
					console.log('Data', data);
				})
				.catch((e) => {
					alert('Something went wrong');
					console.log(e);
				});
		} else {
			alert('Please select a file first.');
		}
	};

	const resetHandler = () => {
		setRawFile(null);
		setWebpBase64(null);
		setJpgBase64(null);
	};

	return (
		<div id='app'>
			<h1>webp to jpg converter</h1>
			<input
				type='file'
				onChange={(e) => setRawFile(e.target.files[0])}
				accept='.webp'
			/>
			<button onClick={resetHandler}>Reset</button>
			<div className='image-container'>
				<div className='item'>
					<div className='title'>
						<h3>Original</h3>
						<small>{rawFile ? rawFile.name : 'No File'}</small>
					</div>
					{webpBase64 && <img src={webpBase64} alt='Original' />}
				</div>
				<div className='item'>
					<div className='title'>
						<h3>Result</h3>
						{jpgBase64 ? (
							<DownloadButton
								base64Image={jpgBase64}
								fileName='result.jpg'
							/>
						) : (
							<button onClick={handleConvert}>Convert</button>
						)}
					</div>
					{jpgBase64 && <img src={jpgBase64} alt='Original' />}
				</div>
			</div>
		</div>
	);
}

export default App;
