import React,{useEffect} from 'react';
import {BrowserRouter as BRouter,Switch,Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import AOS from 'aos';

import 'aos/dist/aos.css';
import './app.css';
//Links
import NavIndex from './NavIndex';
import Contact from './Contact';
import Bistro from './Bistro';
import NoMatch from './NoMatch';
//Imgs
import EshopImg from './imgs/bajovita.jpeg';
import BajovitaImg from './imgs/bajovitaBistroLogo.jpg';
import NoeImg from './imgs/noe.jpeg'

import backImg2 from './imgs/health-food.jpeg';




function App() {
  
  return (
    <BRouter>
      <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/bistro'  component={Bistro}/>
      <Route path="*">
            <NoMatch />
          </Route>
      </Switch>

   </BRouter>
  );
}

const Home = ()=>{
  //Alt ALL iamges
  const imgAlt = "Bajovita Bistro Presov";
  //Animations AOS
  AOS.init({
    offset: 50, // offset (in px) from the original trigger point
    delay: 50, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    debounceDelay: 50,
    once: false,
  });

// Scroll to top 
useEffect(() => {
  window.scrollTo(0, 0)
}, [])
  const rev1 ="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmarta.rybarova.9%2Fposts%2F10219525304796487&width=500";
  const rev2 ="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fjaroslav.macej.3%2Fposts%2F3423689630981577&width=500";
  const rev3 = "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Feva.skvarlova%2Fposts%2F10216180204679211&width=500";
  const rev4 ="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fjoshco1%2Fposts%2F2313531818668540&width=500";
  
  return(
    <main>
      <NavIndex/>
      <section className='firstSection'>
        <ul data-aos="fade-up">
          <Link to='/bistro/#menu' ><li  ><i className="fas fa-motorcycle"></i> Donáškové Menu 0918 971 923 <i className="fas fa-motorcycle"></i></li></Link>
        </ul>
      </section>
      
        <section  id='Onas' className='secondSection'>

          <ul data-aos='slide-right'>
            <li><h2>Bajovita - Bistro</h2></li>
            <li>Bajovita bistro je priestor kde si každý nájde svoje miesto </li>
            <li className='socialNetworks'>
      <a href="https://www.facebook.com/bajovitaobchod/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/bajovitabistro/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i> </a>
    </li>
      </ul>
      <ul data-aos="slide-right">
                    <li><h2>Kde nás nájdete</h2></li>
                    <li>Pavla Horova 21</li>
                    <li>Prešov</li>
                    <li>Slovakia</li>
                    <li>T.č.: 0918 971 923</li>
                    <li>Email: <a href='mailto:bajovitabistro@gmail.com'> bajovitabistro@gmail.com</a></li>
                </ul>
      
                 <ul data-aos="slide-right">
                    <li><h2>Otváracie hodiny</h2></li>
                    <li>Po-Štv	9:00-21:00</li>
                    <li>Pia	9:00-22:00</li>
                    <li>So	9:00-22:00</li>
                    <li>Ne	15:00-20:00</li>
                 </ul>
        <ul data-aos="slide-right">
          <li><h3>COVID-19 Zmenena otváracia doba</h3></li>
                <li> Pondelok až Sobota 13:00-19:00 </li>
                  <li>Ne  15:00-19:00</li>
          </ul>
        <ul data-aos="slide-right" className='prehliadka'>
        <li><a href='http://virtualis.sk/wp-content/uploads/Panoramas/bajovita2020/' target="_blank" rel="noopener noreferrer"><h2>Virtualna prehliadka Bistra</h2></a></li>
          </ul>
         
        </section>
        <div className='fixed-bg'></div>
        <section id='Produkty' className='projects'>
          <h1 data-aos="flip" >Projekty</h1>
          <div className='projects-group'>
          <a href='https://www.bajovita.sk/' target="_blank" rel="noopener noreferrer" data-aos="slide-up">
        <ul>
          <li><img src={EshopImg} key={EshopImg} alt="Bajovita Eshop Presov" /></li>
          <li><h3>Eshop Bajovita</h3></li>
           <li>Eshop ponúka produkty zdravej výživy nie len pre aktívnych športovcov, ale pre nás všetkých ktorí sa 
             rozhodli udržať si zdravie a výborný biologický vek čo do najvyššieho veku s možnosťou priameho nákupu v 
             priestoroch Bajovita bistro.
            </li>
            <li><button><a href='https://www.bajovita.sk/' target="_blank" rel="noopener noreferrer">Prejsť na Eshop</a></button></li>
        </ul>
        </a>
       <Link to='/bistro' >
        <ul data-aos="slide-up">
          <li><img src={BajovitaImg} key={BajovitaImg} alt={imgAlt} /></li>
          <li><h3>Bajovita - bistro</h3></li>
          <li>
          Je veľmi príjemné mať možnosť stráviť spoločné chvíle pri dobrom jedle vynikajúcej káve s pohárom dobrého vína ,
           alebo piva a príjemnou obsluhou.</li>
            <li><button><Link to='/bistro'>Prejsť na Eshop</Link></button></li>
        </ul>
        </Link>
        <a href='http://noeeast.sk/' target="_blank" rel="noopener noreferrer" data-aos="slide-up">
        <ul>
          <li><img src={NoeImg} key={NoeImg} alt="Centrum prevencie zdravia Noe East" /></li>
          <li><h3>NOE East</h3></li>
          <li>Centrum prevencie zdravia Noe East je určená pre klientov ktorí sa rozhodli udržiavať a kontrolovať svoj zdravotný
             stav neinvazívnymi diagnostickými prostriedkami. Za aktívnej účasti seba samého pri realizácii samoliečebných procesov s
              účasťou prírodných produktov.
             S možnosťou diagnostiky, Zyto scanner a Dynamica medecine.-analyzátor podľa srdcovej frekvencie.
        </li>
            <li><button><a href='http://noeeast.sk/' target="_blank" rel="noopener noreferrer">Prejsť na Eshop</a></button></li>
        </ul>
        </a>
        </div>
        </section>
        <div className='fixed-bg' style={{backgroundImage:`url(${backImg2})`}}></div>
        <section id='Recenzie' className='reviews'>
          <h1>Recenzie</h1>
          <article className='reviews-group'> 
          <iframe src={rev1}  title={rev1}  ></iframe>
          <iframe src={rev2} title={rev2} ></iframe>
          <iframe src={rev3}  title={rev3} ></iframe>
          <iframe src={rev4} title={rev4} ></iframe>
          </article>
        </section>
        <Contact></Contact>
      
      </main>
  )
}

export default App;
