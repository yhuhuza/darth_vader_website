import React from 'react';

import './Anakin.scss';
import tatuinPlanet from '../../assets/tatuin-planet.png';
import youngAnakin from '../../assets/yong-anakin.png';

function AnakinSkywalker() {

  return (
      <div className={'anakin-history'}>
        <div className={'anakin-history__container'}>
          <div className={'anakin-history__quote'}>
            <p className={'anakin-history__obis-quote'}>
               You were the Chosen One! 
              It was said that you would destroy the Sith, not join them! 
              Bring balance to the Force, not leave it in darkness!
            </p>
          </div>
       
          <div className={'anakin-history__childhood'}> 
            <p>ChildHood</p>
            <img src={tatuinPlanet} />
            <img src={youngAnakin}></img>
          </div>
        </div>
      </div>
  );
}

export default AnakinSkywalker;
