class Car{
    constructor({airBags, color, edition, model}={}){
        this.airBags = airBags;
        this.color = color;
        this.edition = edition;
        this.model = model;
    }

    setAirBags(airBags){
        this.airBags = airBags;
    }

    setColor(color){
        this.color = color;
    }

    setEdition(edition){
        this.edition = edition;
    }

    setModel(model){
        this.model = model;
    }

    clone(){
        throw Error("method not implemented");
    }
}

class Nivus extends Car{
    constructor(cloneCar){
        super({
            airBags: cloneCar.airBags,
            color: cloneCar.color,
            edition: cloneCar.edition,
            model: cloneCar.model
        });
    }

    clone(){
        return new Nivus(this);
    }
}

class Tcross extends Car{
    constructor(cloneCar){
        super({
            airBags: cloneCar.airBags,
            color: cloneCar.color,
            edition: cloneCar.edition,
            model: cloneCar.model
        });
    }
    clone(){
        return new Tcross(this )
    }
}


function appBuilder(car,params) {
    return new car(params);
    
}

const nivusProduct = appBuilder(Nivus,{
    airBags:2,
    color: "RED",
    edition: "CVT",
    model: "Sedan"
});
const tcrossProduct = appBuilder(Tcross,{
    airBags:4,
    color: "BLUE",
    edition: "CVT",
    model: "Sedan"
});

console.log("Originals")
console.log(nivusProduct);
console.log(tcrossProduct);

console.log("Clones")
console.log(nivusProduct.clone());
console.log(tcrossProduct.clone());