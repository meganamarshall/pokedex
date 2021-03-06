import cards from '../data/pokedex.js';
import loadCards from './card-component.js';
import loadPaging from './paging-component.js';
import pageArray from './page-array.js';

loadCards(cards);

loadPaging(cards.length, pagingOptions => {
    const pagedPokedex = pageArray(cards, pagingOptions);
    loadCards(pagedPokedex);
});