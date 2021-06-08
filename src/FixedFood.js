import React from 'react'
import './Styles/fixedFood.scss'

import bistrosk from './imgs/bistrosk2.jpg'

export default function FixedFood() {
	return (
		<div className='fixedFood' data-aos='fade-left'>
			<button>
				<a href='https://www.bistro.sk/bajovita-bistro/'>
					<img src={bistrosk} alt='Bistro donaska' srcSet='' />
				</a>
			</button>
		</div>
	)
}
