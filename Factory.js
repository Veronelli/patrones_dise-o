// Create an abstract class for Product

class WolkswagenCar{
	showCar(){
		throw Error("Method not implemented");

	}
}

class CarNivus extends WolkswagenCar{
	showCar(){
		return "Nivus";
	}
}

class CarTcross extends WolkswagenCar{
	showCar(){
		return "Tcross";
	}
}

// Abstract class Factory

class CarFactory{
	makeCar(){
		throw Error("Method not implemented");
	}
}

class NivusFactory extends CarFactory{
	makeCar(){
		return new CarNivus();	
	}
}

class TcrossFactory extends CarFactory{
	makeCar(){
		return new CarTcross();
	}
}

function appCarFactory(factory){
	return new factory().makeCar()
}


let car = appCarFactory(TcrossFactory);
console.log(car.showCar());


