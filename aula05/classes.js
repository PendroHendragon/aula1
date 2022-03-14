class Animal{
    _especie = "";
    _genero = "";
    _nome = "";

    constructor(especie, genero, nome){
        this._especie = especie;
        this._genero = genero;
        this._nome = nome;
    }
    status(){
        return {"nome":this._nome,"genero":this._genero,"especie":this._especie};
    }
}

class Dog extends Animal{
    _petName = "";

    constructor(especie, genero, nome, petName){
        super(especie,genero,nome);
        this._petName = petName;
    }
    status(){
        let data = super.status();
        data.push();
        return data//data.push({"petName":this._petName})
    }
}

let dog1 = new Dog("C.lupus","canis","C.l. familiaris","Doginho");
console.log(dog1._petName);
console.log(dog1.status());