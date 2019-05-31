import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';


const CardContainer = () => (
    <a href="www.reactjs.org" target="_blank">
        <div className="card-container">
            <CardBanner />
            <CardContent />
        </div>
    </a>
);

export default CardContainer;