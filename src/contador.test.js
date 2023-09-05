import { getPalabras } from "./contador";


describe("Contador de frases", () => {
    it("Deberia poder identificar las palabras en la frase: 'el password' que estan separadas por un espacio", () => {
      expect(getPalabras("el password")).toEqual(["el", "password"]);
    });

    it("Deberia poder identificar las palabras en la frase: 'el password de' que estan separadas por un espacio", () => {
        expect(getPalabras("el password de")).toEqual(["el", "password", "de"]);
    });

    it("Deberia poder identificar las palabras en la frase: 'el password de-Jose' que estan separadas por ' ' y '-'", () => {
        expect(getPalabras("el password de-Jose")).toEqual(["el", "password", "de", "Jose"]);
    });

    it("Deberia poder identificar las palabras en la frase: 'el password de-Jose, pero' que estan separadas por ' ' y '-'", () => {
        expect(getPalabras("el password de-Jose, pero")).toEqual(["el", "password", "de", "Jose", "pero"]);
    });
  });
  
