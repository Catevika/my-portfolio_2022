import React, { useState } from 'react';
import './contact.css';

export default function Contact() {
	const initialState = {
		username: '',
		email: '',
		message: ''
	};
	const [data, setData] = useState(initialState);

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const resetForm = () => {
		setData(initialState);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setData({ ...data, [e.target.name]: e.target.value });
		resetForm();
	};

	return (
		<div className='form-container'>
			<form className='form' onSubmit={handleSubmit}>
				<label id='main_content' title='Full name' htmlFor='username'>
					Full name
				</label>
				<input
					type='text'
					name='username'
					min={3}
					max={20}
					required
					value={data.username}
					placeholder='Full name'
					autoComplete='username'
					onChange={handleChange}
					autoFocus={true}
				/>
				<label title='email' htmlFor='email'>
					Email
				</label>
				<input
					type='email'
					name='email'
					max={20}
					required
					value={data.email}
					placeholder='Email'
					autoComplete='email'
					onChange={handleChange}
				/>
				<label title='message' htmlFor='message'>
					Message
				</label>
				<textarea
					name='message'
					onChange={handleChange}
					placeholder='Your message'
				></textarea>
				<button title='Send' className='form-btn'>
					Send
				</button>
			</form>
		</div>
	);
}
