import React from 'react';
import { Link } from 'react-router-dom';
import './noMatch.css';

export default function NoMatch() {
	return (
		<div>
			<h2>Nothing to see here!</h2>
			<p className='card'>
				<Link to='/'>Go to the home page</Link>
			</p>
		</div>
	);
}
