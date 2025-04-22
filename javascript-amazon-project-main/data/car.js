class Car {
	#brand;
	#model;
	speed = 0;
	isTrunkOpen = false;

	constructor(carDetails) {
		this.#brand = carDetails.brand;
		this.#model = carDetails.model;
	}

	displayInfo() {
		console.log(`${this.#brand}, Speed: ${this.speed} km/h Trunk: ${this.isTrunkOpen ? 'open' : 'closed'}`);
	}

	go() {
		this.speed += 5;
		if(!this.isTrunkOpen) {
			this.speed += 5;
		}

		if (this.speed > 200) {
			this.speed = 0;
		}
}

	brake() {
		this.speed -= 5;

		if (this.speed < 0) {
			this.speed = 0;
		}
	}

	openTrunk() {
		if(this.speed === 0) {
			this.isTrunkOpen = true;
	}
	}

	closeTrunk() {
		this.isTrunkOpen = false;
	}
}

class RaceCar extends Car {
	acceleration;

	go() {
		this.speed += this.acceleration;

		if(this.speed > 300) {
			this.speed = 300;
		}
	}
}

console.log(car2);

car1.displayInfo();
car1.go();
car1.go();
car1.go();
car1.brake();
car1.displayInfo();

car2.displayInfo();
car2.go();
car2.brake();
car2.brake();
car2.displayInfo();

const car1 = new Car({
	brand: 'BMW',
	model: 'M3'
});

const car2 = new raceCar({
	brand: 'Mercedes',
	model: 'AMG',
	acceleration: 10
});