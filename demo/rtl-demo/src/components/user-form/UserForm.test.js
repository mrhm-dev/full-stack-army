import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserForm from './UserForm';

jest.mock('./InputField', () => {
	return function MockInputField(props) {
		return (
			<div>
				<label htmlFor={props.label}>{props.label}</label>
				<input
					type='text'
					id={props.label}
					value={props.value}
					onChange={props.onChange}
				/>
			</div>
		);
	};
});

describe('UserForm', () => {
	it('should render the form with input fields and a submit button', () => {
		render(<UserForm />);

		const nameInput = screen.getByLabelText('Name');
		expect(nameInput).toBeInTheDocument();

		const emailInput = screen.getByLabelText('Email');
		expect(emailInput).toBeInTheDocument();

		const submitButton = screen.getByRole('button', { name: 'Submit' });
		expect(submitButton).toBeInTheDocument();
	});

	it('should log the user input when the form is submitted', () => {
		const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

		render(<UserForm />);

		const nameInput = screen.getByLabelText('Name');
		fireEvent.change(nameInput, { target: { value: 'Mizanur Rahman' } });

		const emailInput = screen.getByLabelText('Email');
		fireEvent.change(emailInput, {
			target: { value: 'mizanur@gmail.com' },
		});

		const submitButton = screen.getByRole('button', { name: 'Submit' });
		fireEvent.click(submitButton);

		expect(consoleSpy).toHaveBeenCalledWith(
			`Name: Mizanur Rahman, Email: mizanur@gmail.com`
		);
		consoleSpy.mockRestore();
	});
});
