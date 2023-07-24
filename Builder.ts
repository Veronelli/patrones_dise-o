interface CarProductLineTS{
    setAirBags(airBags: number): CarProductLineTS;
    setColor(color: string): CarProductLineTS;
    setEdition(edition: string): CarProductLineTS;
    setModel(): CarProductLineTS;
    resetProductionLine(): void;
}

class SedanProductionLineTS implements CarProductLineTS{
    private _sedanProductionLine!: BaseCarTS;
    private _model!: string;

    constructor({model}:any){
        this._model = model;
        this.resetProductionLine();
    }

    setAirBags(airBags: number): SedanProductionLineTS {
        this._sedanProductionLine.setAirBags(airBags);
        return this;
    }
    setColor(color: string): SedanProductionLineTS {
        this._sedanProductionLine.setColor(color);
        return this;
    }
    setEdition(edition: string): SedanProductionLineTS {
        this._sedanProductionLine.setEdition(edition);
        return this;
    }
    setModel(): SedanProductionLineTS {
        this._model = this._sedanProductionLine.getModel();
        return this;
    }
    resetProductionLine(): void {
        this._sedanProductionLine = this._model === 'Nivus' ? new NivusCarTS() : new TcrossCarTS();

    }

    build(): BaseCarTS{
        this.setModel();
        const sedanProductionLine = this._sedanProductionLine;
        this.resetProductionLine();
        return sedanProductionLine;
    }

}

class HashbackProductLineTS implements CarProductLineTS {
    private _hashbackProduct!: BaseCarTS;
    private _model!: string;

    constructor({model}: any){
        this._model = model;
        this.resetProductionLine();
    }

    setAirBags(airBags: number): CarProductLineTS {
        this._hashbackProduct.setAirBags(airBags);
        return this;
    }

    setColor(color: string): CarProductLineTS {
        this._hashbackProduct.setColor(color);
        return this;
    }

    setEdition(edition: string): CarProductLineTS {
        this._hashbackProduct.setEdition(edition);
        return this;
    }

    setModel(): CarProductLineTS {
        this._hashbackProduct.setModel(this._model);
        return this;
    }

    resetProductionLine(): void {
        this._hashbackProduct = this._model == 'Nivus' ? new NivusCarTS() : new TcrossCarTS();
    }

    build(): BaseCarTS{
        this.setModel()
        const hashbackProductLineTS = this._hashbackProduct
        this.resetProductionLine();
        return hashbackProductLineTS;

    }

}

class BaseCarTS{
    private _airBags!: number;
    private _color!: string;
    private _edition!: string;
    protected _model!: string;

    constructor(edition: string = 'CVT', model: string = 'Sedan'){
        this._airBags = 2;
        this._color = "WHITE";
        this._edition = edition;
        this._model = model || this._model;

    }
    
    setAirBags(airBags: number): void{
        this._airBags = airBags;
    
    }
    
    setColor(color: string): void{
        this._color = color;

    }
    
    setEdition(edition: string): void{
        this._edition = edition;
    
    }

    setModel(model: string): void{
        this._model = model;

    }
    getModel(): string{
        return this._model;
    }

}

class NivusCarTS extends BaseCarTS{
    _model = "Nivus";
}
class TcrossCarTS extends BaseCarTS{
    _model = "Tcross";
}

interface DirectorTS{
    setProductionLine(productionLine: CarProductLineTS): void;
    constructCvtEdition(): void;
    constructSignatureEdition(): void;
    constructSportEdition(): void;
}

class SedanDirectorTS implements DirectorTS{
    private productionLine!: CarProductLineTS;

    setProductionLine(productionLine: CarProductLineTS):void{
        this.productionLine = productionLine;

    }

    constructCvtEdition():void{
        this.productionLine
        .setAirBags(4)
        .setColor("BLACK")
        .setEdition("CVT");
    }

    constructSignatureEdition():void {
        this.productionLine
        .setAirBags(6)
        .setColor("RED")
        .setEdition("SIGNATURE");
    }

    constructSportEdition():void {
        this.productionLine
        .setAirBags(2)
        .setColor("Brown")
        .setEdition("Sport");
    }
}

class HashbackDirectorTS implements DirectorTS{
    private productionLine!: CarProductLineTS;

    setProductionLine(productionLine: CarProductLineTS):void{
        this.productionLine = productionLine;

    }

    constructCvtEdition():void{
        this.productionLine
        .setAirBags(8)
        .setColor("BLACK")
        .setEdition("CVT");
    }

    constructSignatureEdition():void {
        this.productionLine
        .setAirBags(10)
        .setColor("RED")
        .setEdition("SIGNATURE");
    }


    constructSportEdition():void {
        this.productionLine
        .setAirBags(4)
        .setColor("Brown")
        .setEdition("Sport");
    }
}

function appBuilderTS(director: DirectorTS): void{
    const tcrossSedanProductionLine = new SedanProductionLineTS(
        {
            model:'Tcross'
        });

    director.setProductionLine(tcrossSedanProductionLine);
    director.constructCvtEdition();
    const tcrossSedanCVT = tcrossSedanProductionLine.build();
    console.log(tcrossSedanCVT);

    director.constructSignatureEdition();
    const tcrossSedanSignature = tcrossSedanProductionLine.build();
    console.log(tcrossSedanSignature);

    director.constructSportEdition();
    const tcrossSedanSport = tcrossSedanProductionLine.build();
    console.log(tcrossSedanSport);

    const nivusSedanProductionLine = new HashbackProductLineTS({
        model: 'Nivus'
    });
    
    director.setProductionLine(nivusSedanProductionLine);
    director.constructCvtEdition();
    const nivusSedanCVT = nivusSedanProductionLine.build();
    console.log(nivusSedanCVT);

    director.constructSignatureEdition();
    const nivusSedanSignature = nivusSedanProductionLine.build();
    console.log(nivusSedanSignature);


    director.constructSportEdition();
    const nivusSedanSport = nivusSedanProductionLine.build();
    console.log(nivusSedanSport)

}

appBuilderTS(new SedanDirectorTS());
appBuilderTS(new HashbackDirectorTS());
