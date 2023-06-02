import React from 'react';

import './Anakin.scss';
import '../fonts.scss';
// import tatuinBackground from '../../assets/anakin-background.jpeg';
import tatuinPlanet from '../../assets/tatuin-planet.png';
// import mustafarPlanet from '../../assets/mustafar-planet.png';
import sadVader from '../../assets/sad-vader.png';
import youngAnakin from '../../assets/yong-anakin.png';
import robotsTatuin from '../../assets/robots-tatuin.png';
import anakinChildBack from '../../assets/anakin-child-back.jpg';
// import landscape from '../../assets/landscape.png';
import chortFigure from '../../assets/chort.png';
import starBack from '../../assets/star-back.jpg';
// import anakinSword from '../../assets/anakin-sword.png'

function AnakinSkywalker() {

  return (
      <div className={'anakin-history'}>
        <header>
          <img className={'tatuinBackground'}></img>
          {/* <img src= {mustafarPlanet } className={'tatuinPlanet'}></img> */}
          <img src={sadVader} className={'sadVader'}></img>
          <p className={'quote'}> 
            You were the Chosen One! 
            It was said that you would destroy the Sith, not join them!
            Bring balance to the Force, not leave it in darkness!
          </p>
        </header>
        <section>
          <img src={anakinChildBack} className={'sec-section'}/>
          <img src={youngAnakin} className={'yong-anakin'}></img>
          <img src={robotsTatuin} className={'robots-tatuin'}></img>
          <img src={tatuinPlanet} className={'tatuin-planet'}></img>
          <img src={chortFigure} className={'chort-figure'}></img>
        </section>
        <footer>
          <img src={starBack}></img>
        </footer>
        {/* <footer>
          <div className={'anakinTeen'}></div>
          {/* <img src={landscape} className={'footer'}></img> */}
        {/* </footer> */}
        

        {/* <div className={'anakin-history__container'}>
          <div className={'anakin-history__quote'}>
            <p className={'anakin-history__obis-quote'}>
              You were the Chosen One! 
              It was said that you would destroy the Sith, not join them!
              Bring balance to the Force, not leave it in darkness!
            </p>
          </div> */}
       
          {/* <div className={'anakin-history__childhood'}>
            <div className={'anakin-history__childhood__birthday'} >
              <ul>
                <li>Originally, Anakin Skywalker was called Anikan Starkiller.</li>
                <li>He was born 41.9 BBY</li>
                <li>His homeworld is Tatooine.</li>
                <li>Shmi Skywalker is the oldest known Skywalker ancestor and is the mother of Anakin.</li>
                <li>Anakin’s mother claimed that her son was conceived without a father, Qui-Gon Jinn theorised that the will of the Force caused his birth.</li>
              </ul>
              <img src={youngAnakin}></img>
          </div> */}

          

            {/* <div> */}
              {/* <img className={'anakin-history__childhood__tatuin'} src={tatuinPlanet} /> */}
            {/* </div> */}

          {/* </div> */}


          {/* <div className='anakin-sword'>
            <img src={anakinSword} /> 
          </div> 
        </div> */}
      </div>
  );
}

export default AnakinSkywalker;
