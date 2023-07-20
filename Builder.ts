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

    constructor({model}){
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

}

class BaseCarTS{
    private _airBags!: number;
    private _color!: string;
    private _edition!: string;
    private _model!: string;

    constructor(edition: string = 'CVT', model: string = 'Sedan'){
        this._airBags = 2;
        this._color = "WHITE";
        this._edition = edition;
        this._model = model;

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

class NivusCarTS extends BaseCarTS{}
class TcrossCarTS extends BaseCarTS{}