class NivusBase{
    model(){
    }
}

class TcrossBase{
    model(){
        throw Error("This method is not implemented");
    }
}

class NivusSedan extends NivusBase{
    model(){
        return "Nivus Senda 2023";
    }
}

class NivusHatback extends NivusBase{
    model(){
        return "Nivus Hatback 2023";
    }
}

class TcrossSedan extends TcrossBase{
    model(){
        return "Tcross Sedan 2023";
    }
}

class TcrossHatback extends TcrossBase{
    model(){
        return "Tcross Hatback 2023";
    }
}

class CarAbstractFactory {
    createNivus(){
        throw Error("This method is not implemented");

    }
    
    createTcross(){
        throw Error("This method is not implemented");

    }
}


class SedanCarFactory extends CarAbstractFactory{
    createNivus(){
        return new NivusSedan();

    }
    createTcross(){
        return new TcrossSedan();
    }

}

class HatbackCarFactory extends CarAbstractFactory{
    createNivus(){
        return new NivusHatback();

    }
    createTcross(){
        return new TcrossHatback();
    }
}

function appAbstractFactory(factory){
    return new factory()
}

carSedanFactory = appAbstractFactory(SedanCarFactory);
carHatbackFactory = appAbstractFactory(HatbackCarFactory);

console.log(carSedanFactory.createNivus().model());
console.log(carSedanFactory.createTcross().model());

console.log(carHatbackFactory.createNivus().model());
console.log(carHatbackFactory.createTcross().model());
