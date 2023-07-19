interface BaseCPU{
    type: string;
    setSeries(series: string): void;
    getSeries(): string;
}

interface BaseMemory{
    type: string;
    setCapacityInGB(capacityInGB: string): void;
    getCapacityInGB(): string;

}

interface BaseDisplay{
    type: string;
    setResolution(resolution: string): void;
    getResolution(): string;
}

class CPULatop implements BaseCPU{
    private series!: string;
    public type = "Laptop"

    setSeries(series: string): void {
        this.series = series;
    }
    getSeries(): string {
        return this.series + ", " + this.type;
    }

}

class CPUPhone implements BaseCPU{
    private series!: string;
    public type = "Phone";

    setSeries(series: string): void {
        this.series = series;
    }
    getSeries(): string {
        return this.series + ", " + this.type;
    }

}

class CPUTablet implements BaseCPU{
    private series!: string;
    public type = "Tablet";
    setSeries(series: string): void {
        this.series = series;
    }
    getSeries(): string {
        return this.series +", "+ this.type;
    }

}

class MemoryLaptop implements BaseMemory{
    type: string = "Laptop";
    private memory!: string;
    setCapacityInGB(capacityInGB: string): void {
        this.memory = capacityInGB;
    }
    getCapacityInGB(): string {
        return `${this.memory}, ${this.type}`
    }
}

class MemoryPhone implements BaseMemory{
    type: string = "Phone";
    private memory!: string;
    setCapacityInGB(capacityInGB: string): void {
        this.memory = capacityInGB;
    }
    getCapacityInGB(): string {
        return `${this.memory}, ${this.type}`
    }
}

class MemoryTablet implements BaseMemory{
    type: string = "Tablet";
    private memory!: string;
    setCapacityInGB(capacityInGB: string): void {
        this.memory = capacityInGB;
    }
    getCapacityInGB(): string {
        return `${this.memory}, ${this.type}`
    }
}

class DisplayLatop implements BaseDisplay{
    type: string = "Laptop";
    private resolution!: string;
    setResolution(resolution: string): void {
        this.resolution = resolution;
    }
    getResolution(): string {
        return `${this.resolution}, ${this.type}`
    }

}

class DisplayPhone implements BaseDisplay{
    type: string = "Phone";
    private resolution!: string;
    setResolution(resolution: string): void {
        this.resolution = resolution;
    }
    getResolution(): string {
        return `${this.resolution}, ${this.type}`
    }

}

class DisplayTablet implements BaseDisplay{
    type: string = "Tablet";
    private resolution!: string;
    setResolution(resolution: string): void {
        this.resolution = resolution;
    }
    getResolution(): string {
        return `${this.resolution}, ${this.type}`
    }

}

interface BaseComponentsFactory{
    createCPU(): BaseCPU;
    createMemory(): BaseMemory;
    createDisplay(): BaseDisplay; 
}

class LatopFactory implements BaseComponentsFactory{
    createCPU(): BaseCPU {
        return new CPULatop();
    }
    createMemory(): BaseMemory {
        return new MemoryLaptop();
    }
    createDisplay(): BaseDisplay {
        return new DisplayLatop();
    }

}

class PhoneFactory implements BaseComponentsFactory{
    createCPU(): BaseCPU {
        return new CPUPhone();
    }
    createMemory(): BaseMemory {
        return new MemoryPhone();
    }
    createDisplay(): BaseDisplay {
        return new DisplayPhone();
    }

}

class TabletFactory implements BaseComponentsFactory{
    createCPU(): BaseCPU {
        return new CPUTablet();
    }
    createMemory(): BaseMemory {
        return new MemoryTablet();
    }
    createDisplay(): BaseDisplay {
        return new DisplayTablet();
    }

}

function componentsFactory(factory: new ()=> BaseComponentsFactory): BaseComponentsFactory{
    return new factory();
}

const laptopFactory = componentsFactory(LatopFactory);
const phoneFactory = componentsFactory(PhoneFactory);
const tabletFactory = componentsFactory(TabletFactory);

console.log(laptopFactory);
console.log(laptopFactory.createCPU().type);
console.log(laptopFactory.createMemory().type);
console.log(laptopFactory.createDisplay().type);

console.log(phoneFactory);
console.log(phoneFactory.createCPU().type);
console.log(phoneFactory.createDisplay().type);
console.log(phoneFactory.createMemory().type);

console.log(tabletFactory);
console.log(tabletFactory.createCPU().type);
console.log(tabletFactory.createDisplay().type);
console.log(tabletFactory.createMemory().type);
