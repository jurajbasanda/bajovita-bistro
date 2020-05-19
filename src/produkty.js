import React from 'react';

import TemplateProdukt from './TemplateProdukt'

import smoothieImg from './imgs/smoothie.png';
import vinoImg from './imgs/wines-4.png';
import pecivoImg from './imgs/bakery.png';

import './produkty.css'

const products = [{id:'vino',
                    nazov:"Vína",
                    img:vinoImg,
                    text:'V Bajovita Bistro ponúkame víno od Slovenských vinárov zahraničné vína z talianska zn. Primitivo , Francúzka z rôznych oblastí napr. Bordeax. Organizujeme pravidelne riadené ochutnávky vín z rôznych aj malých vinárstiev z neďalekého okolia s možnosťou ochutnávky špecialít patriacich k vínam z rôznych oblastí.'
                    },
                    {id:'smoothie',
                    nazov:'Smoothie',
                    img:smoothieImg,
                    text:'Smoothie z čerstvého ovocia a čerstvú šťavu Vám pripravíme na našich profesionálnych strojoch, ktoré sú schopné pri vysokých otáčkach zachovať čo najviac vlákniny a vitamínov.'
                    },
                    {id:'pecivo',
                    nazov:'Čerstvé pečivo',
                    img:pecivoImg,
                    text:'Kváskový chlieb, croissaty na slano, sladko a pečivo si pečieme vždy čerstvé z kvalitného cesta a môžete si u nás vychutnať aj menu z chleba Lavaš, alebo si ho zakúpiť a experimentovať doma.'
                    }]


const Produkty = () => {
   
return(
    <>
    
 <TemplateProdukt products={products}/>

 </>
)
}
export default Produkty;
