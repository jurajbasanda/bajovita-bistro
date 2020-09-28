import React from 'react';


import smoothieImg from './imgs/smoothie.png';
import vinoImg from './imgs/wines-4.png';
import pecivoImg from './imgs/bakery.png';

import './produkty.css'


const Produkty = () => {
   return(
    <section className='group' id='Produkty'>
    <h1>Produkty</h1>
   
        
    <div className='item' data-aos="fade-up">
    <div className='item-text'>
    <h2>Vína</h2>
    <p>V Bajovita Bistro ponúkame víno od Slovenských vinárov zahraničné vína z talianska zn. Primitivo ,
     Francúzka z rôznych oblastí napr. Bordeax. Organizujeme pravidelne riadené ochutnávky vín z
     rôznych aj malých vinárstiev z neďalekého okolia s možnosťou ochutnávky špecialít patriacich k vínam z rôznych oblastí.
    </p>
     </div>
     <img src={vinoImg} alt="Vino"/>
     </div>

    <div className='item smothie' data-aos="fade-up">
    <div className='item-text '>
    <h2>Smoothie</h2>
   <p> Smoothie z čerstvého ovocia a čerstvú šťavu Vám pripravíme na našich profesionálnych strojoch,
     ktoré sú schopné pri vysokých otáčkach zachovať čo najviac vlákniny a vitamínov.
    </p>
     </div>
     <img src={smoothieImg} alt="Vino"/>
     </div>

    <div className='item' data-aos="fade-up">
    <div className='item-text'>
    <h2>Čerstvé pečivo</h2>
    <p>
    Kváskový chlieb, croissaty na slano, sladko a pečivo si pečieme vždy čerstvé
     z kvalitného cesta a môžete si u nás vychutnať aj menu z chleba Lavaš, alebo si ho zakúpiť a experimentovať doma.
    </p>
     </div>
     <img src={pecivoImg} alt="Vino"/>
     </div>
     
     </section>
 
   )
}
export default Produkty;
