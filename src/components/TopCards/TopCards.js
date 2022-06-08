import style from './TopCards.module.css';
import React, { useState } from 'react';
import Cards from '../Cards/Cards';

const TopCards = (props) => {

    const [cards, setCards] = useState([
        { id: 'c1', header: '30+', body: 'years of individual experience.' },
        { id: 'c2', header: '100+', body: 'projects completed over the years.' },
        { id: 'c3', header: '10+', body: 'experts to help you build a better solution.' }
    ]);

    return (
        <Cards cardData={cards}></Cards>
    );
}

export default TopCards;