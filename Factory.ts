interface BaseCarTS{
    showCar(): string;
}

class CarNivusTS extends BaseCarTS{
    showCar(): string{
        return "Nivus";
    }
}

class CarTcrossTS extends BaseCarTS{
    showCar(): string {
        return "TCross"
    }
}

interface CarFactoryTS{
    makeCar(): BaseCarTS;
}

class NivusFactoryTS implements CarFactoryTS{
    makeCar(): BaseCarTS{
        return new CarNivusTS();
    }
}

class TcrossFactoryTS implements CarFactoryTS{
    makeCar(): BaseCarTS {
        return new CarTcrossTS();
    }
}


function appCarFactoryTS(factoryCar: CreateFactory): BaseCarTS{
    const factory = {
        'nivus': NivusFactoryTS,
        'tcross': TcrossFactoryTS
    }
    return new factory[factoryCar]().makeCar();
}

type CreateFactory = 'nivus' | 'tcross';
let carTS: BaseCarTS = appCarFactoryTS('nivus')

console.log(carTS.showCar())