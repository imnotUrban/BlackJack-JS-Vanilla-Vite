

/**
 *  Esta función me permite tomar una carta
 * @param {Array<String> } deck Ejemplo: ['JH', 'QC', 'QH', 'AD', '8C', 'AS', '5D', '6H', '4D', 'JC', 'QS', '6D', '3D', '10C', 'KC', 'QD', 'JS', '5H', '2H', '8D', '4S', '8H', '5S', '9S', '9H', '2C', 'KD', '9D', 'KS', '3H', '2S', '7D', '10S', 'AH', 'JD', '6C', 'AC', '6S', '4C', '9C', '7C', '10D', '7S', '3C', '2D', '5C', '8S', '10H', '3S', '7H', 'KH', '4H']
 * @returns {String} retorna una carta del deck
 */
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}