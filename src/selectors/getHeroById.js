import { heroes }  from '../data/heroes';

export const getHeroById = ( id ) => {

    //Retornar heroe = id del argumento
    return heroes.find( hero => hero.id === id );
    
}