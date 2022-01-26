import { heroes } from "../data/heroes";

const getHeroesByPublisher = (publisher) => {
    const validPublisher = ["DC Comic", "Marvel Comic"];

    if(validPublisher.includes(publisher)){
        throw new Error(`Publisher "${publisher}" no es correcto`);
    }

    return heroes.filter(hero => hero.publisher === publisher)
}
 
export default getHeroesByPublisher;