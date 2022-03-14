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

export default Automovel;