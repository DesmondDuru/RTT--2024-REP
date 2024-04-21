
const cars = []; // array
console.log(cars);


// Object
const myOldCar = {}

const vehicle = {
    interiorColor: 'red',
    year: '2024',
    brand: 'Toyota',
    model: 'Tundra',
    isElectric: false,
    mileage: 1000,
    "active registration": true,
    exteriorColor: 'blue',
    engine: {
        cylinders: 6,
        hp: 4000,
        size: 3.2
    }
};

console.log(vehicle);
console.log(vehicle.color);
console.log(vehicle.isElectric);
console.log(vehicle.mileage);

console.log(vehicle["year"]);
console.log(vehicle["active registration"]);


// deletes an object's property
delete vehicle["active registration"];

// add a new property
vehicle.activeRegistration = false;

vehicle.package = 'Tech Package';

//
vehicle.model = 'Camry';

//
// vehicle.engine = {
//     cylinders: 6,
//     hp: 4000,
//     size: 3.2
// }

console.log(vehicle);
console.log(vehicle.engine.size);


//
for (const key in vehicle) {
    // console.log(key);
    // console.log(vehicle[key]);
    // console.log(`${key}: ${vehicle[key]}`);
}

const vehicle1 = {
	color: "blue",
	year: 1989,
	make: "Audi",
	engine: {
		cylinders: 6,
		hp: 4000,
		size: 3.2
	}
}

const vehicle2 = {
	color: "blue",
	year: 1989,
	make: "Audi",
	engine: {
		cylinders: 6,
		hp: 4000,
		size: 3.2
	}
}

console.log(vehicle1 === vehicle2); // false
console.log(vehicle1.color === vehicle2.color); // true
console.log(vehicle1.year === vehicle2.year); // true
console.log(vehicle1.engine === vehicle2.engine); // false
console.log(vehicle1.engine.cylinders === vehicle2.engine.cylinders);


// ==== Products =========

const products = [];


const tv = {
    brand: 'Sony',
    price: 350,
    isInStock: true,
    details: {
        colors: ['black'],
        sizes: ['42 inches', '55 inches'],
        smartTv: true,
        touchScreen: false,
    },
    isOnSale: true,
    categories: ['home', 'tech', 'outdoors']
}





const sneakers = {
    brand: 'Nike',
    price: 80,
    isInStock: true,
    details: {
        colors: ['black', 'white', 'red'],
        sizes: ['7', '8', '9', '10']
    },
    isOnSale: false,
    categories: ['sports', 'outdoors']
}

const pc = {
    brand: 'Dell',
    price: 500,
    isInStock: true,
    details: {
        colors: ['white'],
        sizes: ['16 inches'],
        touchScreen: true,
    },
    isOnSale: false,
    categories: ['home', 'tech']
}

// adds product to array
products.push(tv);
products.push(pc);
products.push(sneakers);

console.log(products);


// Loops over the array of products
for (const product of products) {
    // console.log(product);

    if (product.details.touchScreen) {
        console.log(`This ${product.brand} is touch screen and is $${product.price}`);
    }
    
    if (product.isOnSale) {
        console.log(`
        This ${product.brand} product 
        is on sale for $${product.price}
        `);
    }

    if (product.price >= 100 && product.price <= 350) {
        console.log(`
        We found a:
        ${product.brand} for $${product.price}
        `);
    }

   
}


// Loops over an Object
for (const key in sneakers) {
    console.log( `${key}: ${sneakers[key]}`);
}











// myOldCar.brand = 'Honda';
// myOldCar.year = '2000';
// myOldCar.color = 'White'
// console.log(myOldCar);