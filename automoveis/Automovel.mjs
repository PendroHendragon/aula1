class Automovel{
    _cilindrada;
    _peso;
    constructor(cilindrada,peso){
        this._cilindrada = cilindrada;
        this._peso = peso;
    }

    showCilindrada(){
        return this._cilindrada;
    }
}


class Paraquedas{
    _alcance;

    constructor(alcance){
        this._alcance = alcance;
    }

    showAlcance(){
        return this._alcance;
    }
}



export {Automovel, Paraquedas};