import React from 'react';
import { Link } from "react-router-dom";

import './MainPage.scss';
import empireSign from '../../assets/empire-sign.png';
import rebelionSign from '../../assets/rebelion-sign.png';
import darthVader from '../../assets/darth-vader-figure.png';
import anakinFigure from '../../assets/anakin-figure.png';

function MainPage() {

  return (
    <div className={'main-page'}>
        <div className={'main-page__anakin'}>
          <img className={'main-page__rebellion-sign'} src={rebelionSign} />
          <Link to='/anakin'><
            img className={'main-page__anakin__figure'} src={anakinFigure}/>
          </Link>
      </div>
      <div className={'main-page__vader'}>
        <img className={'main-page__empire-sign'} src={empireSign} />
        <Link to='/vader'>
        <img className={'main-page__vader__figure'} src={darthVader} />
        </Link>
      </div>
    </div>
  );
}

export default MainPage;
