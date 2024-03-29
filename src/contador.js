function getPalabras(texto) {
    let palabras = []; 
    let palabra  = ""; 
    for(let i = 0; i<texto.length; i++) {
        if(texto[i] === " " || texto[i] === "-" || texto[i] === "," || texto[i] === ";" || texto[i] === ".") {
            if(palabra.length > 0) palabras.push(palabra);
            palabra = ""; 
        } else palabra += texto[i];
    }
    if(palabra.length > 0) palabras.push(palabra);
    return palabras; 
}

function getPalabrasMinusculas(texto) {
    let palabras = getPalabras(texto); 
    for(let i = 0; i<palabras.length; i++) {
        palabras[i] = palabras[i].toLowerCase(); 
    }
    return palabras; 
}
function ocurrencias(texto) {
    let palabras  = getPalabrasMinusculas(texto); 

    let contador = {}; 

    for(let i = 0; i<palabras.length; i++) {
        if(contador[palabras[i]] == undefined) contador[palabras[i]] = 1;
        else contador[palabras[i]]++; 
    }
    return contador; 
}

export {getPalabras, getPalabrasMinusculas, ocurrencias};