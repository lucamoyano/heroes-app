import React, { useMemo } from 'react'
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher'
import { HeroCard } from './HeroCard';

export const HeroeList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroByPublisher( publisher ), [publisher]);
    // const heroes = getHeroByPublisher( publisher );

    return (
        <div className="card-columns animate__animated animate__fadeIn">
            {
                heroes.map( hero => (
                    <HeroCard
                        key={ hero.id }
                        { ...hero }
                    />
                ))
            }
        </div>
    )
}
