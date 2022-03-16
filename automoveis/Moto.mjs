import {Automovel} from "./Automovel.mjs";

class Moto extends Automovel{

    constructor(cilindrada, peso){
        super(cilindrada,peso);
    }
}

let moto = new Moto(100,120);
console.log(moto.showCilindrada());

