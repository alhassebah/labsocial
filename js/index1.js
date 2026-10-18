
/* const x = 10;

const test = () => {
    console.log(x);
};

test(); //output: 10
 */

const x = 10;
const test = () => {
    const x = 20;
    console.log(x);
}
test(); // Output: 20

const y = 10;
const test2 = () => {
    if (true) {
        const y = 30;

    }
    console.log(y);
}
test2(); // Output: 30

var z = 1;
const test3 = () => {
    if (true) {
        var z = 30;
    }
    console.log(z);
}
test3(); // Output: 30
console.log(z); // Output: 1


const fns = [];
for (let i = 1; i < 5; i++) {
    fns.push(() => console.log(i));
}
fns[0](); // Output: 0
fns[1](); // Output: 1
fns[2](); // Output: 2


//const name = 'Alhassane';
const show = () => {
    console.log(name);
}
show(); // Output: indéfini

const run = () => {
    if (true) {
        const age = 25;
    }
    console.log(age);
}
run(); // output error (global variable age is not defined)


const first = () => {
    const a = 1;
    second();
};

const second = () => {
    console.log(a);
};

first(); // output error (global variable a is not defined)

const check = () => {
    console.log(value);
    const value = 5;
};
check(); // Output: 5

const config = { mode: "dev" };
config.mode = "prod";
CONSOLE.LOG(config.mode); // Output: prod
config = { mode: "test" };


const cars = [
    {
        model: "Toyota",
        color: "white",
        speed: 1000
    },
    {
        model: "Rolls royce",
        color: "black",
        speed: 2000
    },

    {
        model: "Lamborghini",
        color: "Red",
        speed: 3000
    },
]
const somme = cars[0].speed + cars[1].speed + cars[2].speed;
console.log(somme); // Output: 6000


