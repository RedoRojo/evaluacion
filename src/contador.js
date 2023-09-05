function getPalabras(texto) {
    let palabras = []; 
    let palabra  = ""; 
    for(let i = 0; i<texto.length; i++) {
        if(texto[i] === " " || texto[i] === "-") {
            palabras.push(palabra);
            palabra = ""; 
        } else palabra += texto[i];
    }
    if(palabra.length > 0) palabras.push(palabra);
    return palabras; 
}

export {getPalabras};