class HelloClass {
  
  private name = '';
  
  constructor(name: string) {
    this.name = name;
  }

  sayHello() {
    return `Hello, ${this.name}`;
  }
}

