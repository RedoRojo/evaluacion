import { getPalabras , getPalabrasMinusculas,ocurrencias} from "./contador";


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

    it("Deberia poder identificar las palabras en la frase: 'el esta,nose' que estan separadas por ' ' y '-'", () => {
        expect(getPalabras("el esta,nose")).toEqual(["el", "esta", "nose"]);
    });

    it("Deberia poder identificar las palabras en la frase: 'el esta;nose' que estan separadas por ' ' y '-'", () => {
        expect(getPalabras("el esta;nose")).toEqual(["el", "esta", "nose"]);
    });

    it("Deberia poder identificar las palabras en la frase: 'el esta.nose' que estan separadas por ' ' y '.'", () => {
        expect(getPalabras("el esta.nose")).toEqual(["el", "esta", "nose"]);
    });

    it("Deberia devolver una lista con todas la palabras en minusculas dada la lista de palabras como entrada", () => {
        expect(getPalabrasMinusculas("ESta.esta ESTA")).toEqual(["esta", "esta", "esta"]);
    });
    
    it("Deberia devolver las ocurrecias para cada palabra en la frase 'ESta.esta ESTA'", () => {
        expect(ocurrencias("ESta.esta ESTA")).toEqual({"esta": 3});
    });

  });
  
