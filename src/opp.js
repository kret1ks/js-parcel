import { calculator, subtract, multiply, divide} from "./js/calculator"

console.log("додавання:", calculator(10, 5));
console.log("множення:", multiply(10, 5));
console.log("ділення:", divide(10, 2));


const title = document.querySelector('h1');
if (title) {
    title.textContent = `Результат додавання: ${add(10, 20)}`;
}
