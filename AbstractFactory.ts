interface BaseNivusTS{
    model(): string;
}

interface BaseTcrossTS{
    model(): string;
}

class NivusSedanTS implements BaseNivusTS{
    model(): string {
        return "Nivus sedan";
    }

}

class NivusHatbackTS implements BaseNivusTS{
    model(): string {
        return "Nivus hatback";
    }
}

class TcrossSedanTS implements BaseTcrossTS{
    model(): string {
        return "T-Cross sedan";
    }

}

class TcrossHatbackTS implements BaseTcrossTS{
    model(): string {
        return "T-cross Hatback";
    }
}

interface BaseAbstractFactoryTS{
    createNivus(): BaseNivusTS;
    createTcross(): BaseTcrossTS;
}

class SedanAbstractFactoryTS implements BaseAbstractFactoryTS{
    createNivus(): BaseNivusTS {
        return new NivusSedanTS();
    }

    createTcross(): BaseTcrossTS {
        return new TcrossSedanTS()
    }
}


class HatbackAbstractFactoryTS implements BaseAbstractFactoryTS{
    createNivus(): BaseNivusTS {
        return new NivusHatbackTS();
    }

    createTcross(): BaseTcrossTS {
        return new TcrossHatbackTS()
    }
}

function appFactoryTS(factory: new ()=> BaseAbstractFactoryTS){
    return new factory()
}

const carSedanFactory = appFactoryTS(SedanAbstractFactoryTS);
const carHatbackFactory = appFactoryTS(HatbackAbstractFactoryTS);

console.log(carSedanFactory.createNivus().model());
console.log(carSedanFactory.createTcross().model());

console.log(carHatbackFactory.createNivus().model());
console.log(carHatbackFactory.createTcross().model());