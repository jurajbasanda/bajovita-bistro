import React from 'react';
import './reviews.scss';

const Reviews=()=>  {
const reviews = [
                {disc:'Výborná káva,dobré pivko,mňamkové koláče,wrapy,krídla,rebrá a najvýbornejšia obsluha.Aj deti milujú Bajovitu',
                  name:'Eva Skvarlova',
                  link:'https://www.facebook.com/eva.skvarlova/posts/10216180204679211',
                },
                
                {name:'Marta Verescakova',
                date:'14/02/2020',
                link:'https://www.facebook.com/marta.rybarova.9/posts/10219525304796487',
                disc:'Dnes sme si odbehli do tejto kaviarne prvý krát a už teraz vieme povedať , ze sa tam radi vrátime. Cítili sme sa tam fajn nielen vďaka výbornej ponuke, ale taký ľudský prístup sme už dlho nezažili. Nech sa vám ešte dlho darí. Ďakujeme.'
                  },
                  {name:'Jaroslav Macej',
                  disc:"Môžem len odporúčať Zdravé šaláty · Skvelé koktaily · Čerstvé smoothies · Pokojná atmosféra · Loyalty cardfitted",
                  link:'https://www.facebook.com/jaroslav.macej.3/posts/3423689630981577',
                  },
                {
                  disc:"Bajovitaaaa je supeeer. Vynikajúce zákusky · Skvelé koktaily · Formálny olovrant · Live music",
                  name:'Joshco Josi Strazan',
                  link:'https://www.facebook.com/joshco1/posts/2313531818668540'
                }]
return (
            <section className='fb'>
            <h1>Recenzie</h1>
            <div className='reviews-list'>  
          {/*<iframe src={fb4} title="review" width="500" height="220"  scrolling="no" frameBorder="0"  allow="encrypted-media"></iframe>*/}
          {reviews.map(review =>(
                      <div className='review-item'
                      key={review.disc}>
                      <a href={review.link} target='_blank' rel="noopener noreferrer">
                      <i className="far fa-user"></i>                  
                      <h3>{review.name}</h3>
                    <p>{review.disc}</p>
                      </a>
                      </div>
          ))}
          </div>
          <a href="https://www.facebook.com/bajovitaobchod/" target='_blank' rel="noopener noreferrer"> ooo </a>
          </section>
        )
    }


export default Reviews
