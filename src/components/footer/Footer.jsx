import { Link } from 'react-router-dom';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import './footer.css';

// TODO: Home footer + contact version mobile phone

export default function Footer() {
	const githubUrl = import.meta.env.VITE_GITHUB_URL;
	const twitterUrl = import.meta.env.VITE_TWITTER_URL;
	const homePhotoUrl =
		'//www.pexels.com/photo/pink-white-black-purple-blue-textile-web-scripts-97077/';
	const noMatchPhotoUrl =
		'//www.pexels.com/fr-fr/photo/nothin-to-see-here-enseigne-neon-3342739/';
	return (
		<footer className='footer-container'>
			<div className='footer-icon-links'>
				<Link to={githubUrl}>
					<AiOutlineGithub title='github' className='footer-icon' />
				</Link>
				<Link to={twitterUrl}>
					<AiFillTwitterCircle title='twitter' className='footer-icon' />
				</Link>
			</div>
			<div className='footer-credits'>
				<p>
					<em>Photos by: </em>
				</p>
				<Link to={homePhotoUrl} className='footer-credits-link'>
					<em>
						<span>Negative Space</span> - Home
					</em>
				</Link>
				<Link to={noMatchPhotoUrl} className='footer-credits-link'>
					<em>
						<span> Aleksandar Pasaric</span> - No Match
					</em>
				</Link>
			</div>
		</footer>
	);
}
