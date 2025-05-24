class Calculator {
  constructor(a, b, operation) {
    this.a = a;
    this.b = b;
    this.operation = operation;
  }

  calculate() {
    switch (this.operation.toLowerCase()) {
      case 'add':
        return this.a + this.b;
      case 'subtract':
        return this.a - this.b;
      case 'multiply':
        return this.a * this.b;
      case 'divide':
        if (this.b === 0) {
          return 'Divide by zero error.';
        }
        return this.a / this.b;
      default:
        return 'Error: Invalid operation';
    }
  }
}

// const calc1 = new Calculator(10, 20, 'add');
// console.log(calc1.calculate());
