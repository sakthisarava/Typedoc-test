interface CarInterface {
    model: string;
    year: string;
    getUnitsSold(): number;
  }
  
  class Car implements CarInterface {
    model: string;
    year: string;
    getUnitsSold() {
      // logic to return number of units sold
      return 100;
    }
  
    constructor(model: string, year: string) {
      this.model = model;
      this.year = year;
    }
  }
  