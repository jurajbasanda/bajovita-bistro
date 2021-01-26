import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './bistro.css'

//Links
import Contact from './Contact'
import Nav from './Nav'
import Produkty from './produkty'
//Imgs
import menu1 from './imgs/menu-small.gif'
import menu2 from './imgs/napoj-jedlo-menu-full.gif'
import address from './imgs/address.png'
import time from './imgs/time.png'
import prehliadka from './imgs/door.png'
import hashtag from './imgs/hashtag.png'
import galleryImg0 from './imgs/bistroBG.jpeg'
import galleryImg2 from './imgs/fixed-bg-meat.jpg'
import galleryImg3 from './imgs/burger.jpeg'
import galleryImg4 from './imgs/cake2.jpeg'
import galleryImg5 from './imgs/caffe1.jpeg'
import bistroD from './imgs/bistro-sk.png'
import FixedFood from './FixedFood'

export default function Bistro() {
	//Alt ALL iamges
	const imgAlt = 'Bajovita Bistro Presov'
	//Animations
	AOS.init({
		offset: 50, // offset (in px) from the original trigger point
		delay: 50, // values from 0 to 3000, with step 50ms
		duration: 800, // values from 0 to 3000, with step 50ms
		debounceDelay: 50,
		once: false,
	})
	// Scroll to top
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<main className='bistro'>
			<Nav />
			<section className='firstB'>
				<FixedFood></FixedFood>
				<ul data-aos='slide-right'>
					<img src={time} alt='Otvaracie hodiny' />
					<li>Po-Štv 12:00-21:00</li>
					<li>Pia 12:00-22:00</li>
					<li>So 12:00-22:00</li>
					<li>Ne 14:00-20:00</li>
					<li>
						<h1>Covid-19 zmenena otváracia doba</h1>
					</li>
					<li> PO - SO 12:00-19:00 </li>
					<li>NE Zatvorené</li>

					<li>
						<img src={prehliadka} alt='Prehliadka' />
					</li>

					<li>
						<a
							href='http://virtualis.sk/wp-content/uploads/Panoramas/bajovita2020/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<button>Virtualna prehliadka</button>
						</a>
					</li>
				</ul>
				<ul data-aos='slide-right'>
					<img src={address} alt='Kde nas najdete' />
					<li>Pavla Horova 21</li>
					<li>Prešov</li>
					<li>Slovakia</li>
					<li>
						T.č.: <a href='tel:+421918 971 923 '>0918 971 923</a>
					</li>
					<li>
						Email:{' '}
						<a href='mailto:bajovitabistro@gmail.com'>
							{' '}
							bajovitabistro@gmail.com
						</a>
					</li>
					<li className='socialNetworks'>
						<a
							href='https://www.facebook.com/bajovitaobchod/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<i className='fab fa-facebook-f'></i>
						</a>
						<a
							href='https://www.instagram.com/bajovitabistro/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<i className='fab fa-instagram'></i>{' '}
						</a>
					</li>
				</ul>
			</section>
			<section id='Onas' className='Onas'>
				<article className='Onas-group' data-aos='flip-up'>
					<h1>O nás</h1>
					<p>
						Bajovita bistro je rodinný podnik, takže si predstavte ho ako veľkú
						obývačku, kde sa môžete stretnúť so svojimi priateľmi podeliť sa o
						svoje radosti aj starosti a popritom Vás s radosťou obslúžime
						pripravíme chutné jedlo (napr. Burger, wrap Lavaš), nápoje,
						vynikajúcu na Slovensku praženú kávu, domáce koláče a čerstvo
						upečené pečivo, croissanty a pivo BERNARD
					</p>
					<div
						className='fixed-bg'
						style={{ backgroundImage: `url(${galleryImg0})` }}
					></div>
					<p>
						{' '}
						Zároveň pracujeme už 17 rokov v oblasti v oblasti regeneračného
						zdravia. Poradíme Vám v rámci eventov ako funkčne žiť zdravý a
						pohodový život v zapamätateľnej a realizovateľnej forme. Bajovita
						bistro je projekt pre našich a Vašich priateľov, ktorý môže zvýšiť
						kvalitu života na sídlisku kde to málo kto očakáva. Našou snahou je
						spájať rodiny priateľov s možnosťou osláv narodenín a rodinných
						stretnutí, keďže domáce návštevy sa už tak nenosia ako kedysi.
					</p>

					<p>
						Môžete si u nás vychutnať aj menu z chleba Lavaš, alebo si ho
						zakúpiť a experimentovať doma.
					</p>
				</article>
				<article className='gallery-group' data-aos='flip-up'>
					<img src={galleryImg2} alt={imgAlt} />
					<img src={galleryImg3} alt={imgAlt} />
					<img src={galleryImg4} alt={imgAlt} />
					<img src={galleryImg5} alt={imgAlt} />
				</article>
			</section>
			<div className='fixed-bg'></div>

			<Produkty></Produkty>
			<div className='fixed-bg'></div>

			<section className='menu' id='Menu'>
				<h1>Donáška</h1>
				<div className='menu-group'>
					<div className='menu-delivery'>
						<a
							href='https://www.bistro.sk/bajovita-bistro/'
							target='_blank'
							rel='noopener noreferrer'
						>
							{' '}
							<img
								className='bistrosk'
								src={bistroD}
								alt='bistro'
								key={bistroD}
							/>
						</a>
						<p>
							<a
								href='https://www.bistro.sk/bajovita-bistro/'
								target='_blank'
								rel='noopener noreferrer'
							>
                            <button>&#62; Naše chutné výrobky si môžte objedna TU &#60;{' '}</button>
							</a>
							<br />
							Alebo volajte priamo k nám do predajne na číslo
							<br />{' '}
							<a href='tel:+421918 971 923 '> &#62; 0918 971 923 &#60;</a>
							<br />
							<a href={menu2} target='_blank' rel='noopener noreferrer'>
							<button>Pozi Menú{' '}
                                </button>
                                </a>
						</p>
                    </div>
                    
					<a href={menu2} target='_blank' rel='noopener noreferrer'>
						<img className='menuImg' src={menu1} alt='Bajovita Bistro menu' />
					</a>
				</div>
			</section>
			<div className='fixed-bg'></div>

			<Contact></Contact>
		</main>
	)
}
