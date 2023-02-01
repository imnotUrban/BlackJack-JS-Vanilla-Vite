/**
 * Retorna el valor aucumulado de la carta (?)
 * @param {<string>} carta del deck 
 * @returns {<Number>} 
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}