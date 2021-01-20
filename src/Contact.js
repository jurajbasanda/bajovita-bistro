import React from 'react'
import './contact.css'
//images
import address from './imgs/address.png'
import time from './imgs/time.png'
import prehliadka from './imgs/door.png'
import hashtag from './imgs/hashtag.png'

export default function Contact() {
	//Animations
	//Iframe google map
	const map =
		'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10473.57561631995!2d21.266574!3d48.9840609!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc86bf62a0c0b67b9!2sBajovita%20bistro!5e0!3m2!1sen!2suk!4v1587301724451!5m2!1sen!2suk'

	return (
		<section id='Kontakt' className='contact'>
			<div className='socialNetworks'>
				<a
					href='https://www.facebook.com/bajovitaobchod/'
					target='_blank'
					rel='noopener noreferrer'
				>
					{' '}
					<i className='fab fa-facebook-f'></i>
				</a>
				<a
					href='https://www.instagram.com/bajovitabistro/'
					target='_blank'
					rel='noopener noreferrer'
				>
					{' '}
					<i className='fab fa-instagram'></i>{' '}
				</a>
			</div>
			<article className='contact-group-form'>
				<iframe
					src={map}
					title={map}
					allowFullScreen=''
					aria-hidden='false'
					tabIndex='0'
				></iframe>
				<ul>
					<li>
						<img src={address} alt='adresa' />
					</li>
					<li>Pavla Horova 21</li>
					<li>Prešov</li>
					<li>Slovakia</li>
					<li>T.č.: 0918 971 923</li>
					<li>
						Email:{' '}
						<a href='mailto:bajovitabistro@gmail.com'>
							{' '}
							bajovitabistro@gmail.com
						</a>
					</li>
				</ul>
				<ul>
					<li>
						<h3>COVID-19 Zmenena otváracia doba</h3>
					</li>
					<li> PO - SO 12:00-19:00 </li>
					<li>NE Zatvorené</li>
				</ul>

				<ul>
                <li>
						<img src={time} alt='Otvaracie hodiny' />
					</li>
					<li>Po-Štv 12:00-21:00</li>
					<li>Pia 12:00-22:00</li>
					<li>So 12:00-22:00</li>
					<li>Ne 14:00-20:00</li>
				</ul>
				<a
					href='https://jurajbasanda.com'
					target='_blank'
					rel='noopener noreferrer'
					style={{
						fontSize: '0.9rem',
						margin: '10px',
						justifySelf: 'flex-end',
					}}
				>
					{' '}
					Made by @Juraj Basanda
				</a>
			</article>
		</section>
	)
}
