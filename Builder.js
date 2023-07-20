class CarProductionLine{
    setAirBags(howMany){
        throw Error("method not implemented");
    }
    setColor(color){
        throw Error("method not implemented");
    }
    setEdition(edition){
        throw Error("method not implemented");
    }
    resetProductionLine(){
        throw Error("method not implemented");
    }
    
}

class Car{
    constructor(){
        this.airBags = 2;
        this.color = "black";
        this.edition = ""
        this.model = ""
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

}

class SedanProductionLine extends CarProductionLine{
    constructor({model}){
        super();
        this.setInternalModel(model);
        this.resetProductionLine();
    }

    setAirBags(howMany){
        this.sedanCar.airBags = howMany;
        return this;
    }
    
    setColor(color){
        this.sedanCar.color = color;
        return this;
    }
    
    setEdition(edition){
        this.sedanCar.edition = edition;
        return this;
    }

    setInternalModel(model){
        return this.internalModel = model;
    }

    setModel(){
        this.sedanCar.model = 'Sedan';
    }

    resetProductionLine(){
        this.sedanCar = this.internalModel === "Nivus" ? new Nivus() : new Tcross();
    }

    build(){
        this.setModel();
        const sedanCar = this.sedanCar;
        this.resetProductionLine();
        return sedanCar;
    }

}

class Nivus extends Car{
    constructor(){
        super()
    }
}

class Tcross extends Car{
    constructor(){
        super();
    }
}

class Director{
    setProductionLine(productionLine){
        this.productionLine = productionLine;
    }

    constructCVTEdition(){
        this.productionLine.setAirBags(4).setColor("RED").setEdition("CVT");
    }

    constructSignatureEdition(){
        this.productionLine.setAirBags(4).setColor("WHITE").setEdition("SIGNATURE");
    }
}

function appBuilder(director, model) {
    const nivusProductionLine = new SedanProductionLine(
        {
            model
        })
    director.setProductionLine(nivusProductionLine);
    director.constructCVTEdition();

    return nivusProductionLine.build();
    
}

const director = new Director()
const nivusProduct = appBuilder(director, "Nivus");
const tcrossProduct = appBuilder(director, "Tcross");

console.log(nivusProduct);
console.log(tcrossProduct);
