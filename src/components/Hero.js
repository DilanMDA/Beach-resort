//functional component
import React from 'react'

export default function Hero({ hero}) {
    return (
        <header className= {hero}>
            
        </header>
    );
}

Hero.defaultProps = {
    hero: 'defaultHero'
};