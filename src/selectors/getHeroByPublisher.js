import { heroes }  from '../data/heroes';

export const getHeroByPublisher = ( publisher ) => {

  const validPublisher = [ 'DC Comics', 'Marvel Comics' ];

  //Retornar error si el publisher no es correcto
  if( !validPublisher.includes(publisher) ){
      throw new Error(`Publisher "${ publisher }" no es correcto`);
  }
  
  //Retornar los heroes iguales al publisher del argumento
  return heroes.filter( hero => hero.publisher === publisher );

};