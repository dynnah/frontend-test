import React, { useState, useEffect } from 'react'
import Filter from '../../components/Filter'
import HeroCard from '../../components/HeroCard'
import { getCharacters } from '../../../services/characters'
import './index.css'


function Home() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await getCharacters();
            if (data) {
                setCharacters(data);
            }
        })();
    }, []);

    return (
        <div>
            <Filter />
            <div className="heroes-container">
                {characters.map(hero =>
                    <HeroCard key={hero.id} hero={hero} />
                )}
            </div>
        </div>

    )
}

export default Home