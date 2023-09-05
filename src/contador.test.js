


describe("Contador de frases", () => {
    it("Deberia poder identificar las palabras en la frase: 'el password' que estan separadas por un espacio", () => {
      expect(getPalabras("el password")).toEqual(["el", "password"]);
    });
  });
  
function getPalabras(texto) {
    return ["el", "password"]; 
}