type AvailableType = 'red' | 'black' | 'gray' | 'yellow';
type EditionType = 'cvt' | 'signature' | 'default';

type CarConstructorParam = {
    edition: EditionType,
    color: AvailableType,
    model: string,
    airBags: number
}
abstract class PrototypeCar{
    _airBags!: number;
    _color!: AvailableType;
    _edition!: EditionType;
    _model!: string;

    constructor({
        airBags,
        edition,
        model,
        color}: CarConstructorParam){
        this._airBags = airBags || 2;
        this._color = color || "red";
        this._edition = edition;
        this._model = model;

    }

    abstract clone(): PrototypeCar;

}

class NivusTS extends PrototypeCar{
    _model = "Nivus";

    constructor(carToClone?: CarConstructorParam);
    constructor(carToClone: CarConstructorParam){
        super({
            airBags: carToClone?.airBags,
            edition: carToClone?.edition,
            model: carToClone?.model,
            color: carToClone?.color
        })

    }

    clone(): NivusTS {
        return new NivusTS({
            airBags: this._airBags,
            color: this._color,
            edition: this._edition,
            model: this._model
        });
    }
}
class TcrossTS extends PrototypeCar{
    _model = "Tcross";

    constructor(carToClone?: CarConstructorParam);
    constructor(carToClone: CarConstructorParam){
        super({
            airBags: carToClone?.airBags,
            edition: carToClone?.edition,
            model: carToClone?.model,
            color: carToClone?.color
        })

    }

    clone(): TcrossTS {
        return new TcrossTS({
            airBags: this._airBags,
            color: this._color,
            edition: this._edition,
            model: this._model
        });
    }
}

const nivusParams: CarConstructorParam ={
    airBags:4,
    color: "gray",
    edition: "cvt",
    model: "Sedan"
}

const tcrosParams: CarConstructorParam = {
    airBags:6,
    color: "yellow",
    edition: "default",
    model: "Sedan"
}
const nivusCar = new NivusTS(nivusParams)
const tcrosCar = new TcrossTS(tcrosParams)

console.log(`Originals`);
console.log(nivusCar);
console.log(tcrosCar);

console.log("Clone");
console.log(nivusCar.clone());
console.log(tcrosCar.clone());