import React from 'react';
import './produkty.css'

export default function Produkty(props) {
    const content = props.products.map(product =>
  
        <div className='item' key={product.id} data-aos="slide-up">
        <div className='item-text'>
        <h2>{product.nazov}</h2>
        <p>{product.text}</p>
         </div>
         <img src={product.img} alt=""/>
         </div>
    
    )
    return(
        <section className='group'>
    <h1>Produkty</h1>
        {content}
        </section>
  );
}
