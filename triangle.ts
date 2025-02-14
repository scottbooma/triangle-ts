export class Triangle {
  sideOne: number;
  sideTwo: number;
  sideThree: number;
  constructor(sideOne: number, sideTwo: number, sideThree: number) {
    this.sideOne = sideOne;
    this.sideTwo = sideTwo;
    this.sideThree = sideThree;
  }
  get isEquilateral() {
    return (
      this.sideOne === this.sideTwo &&
      this.sideOne === this.sideThree &&
      this.sideOne != 0
    );
  }
  get isIsosceles() {
    return (
      (this.sideOne === this.sideTwo &&
        this.sideOne + this.sideTwo >= this.sideThree) ||
      (this.sideOne === this.sideThree &&
        this.sideOne + this.sideThree >= this.sideTwo) ||
      (this.sideThree === this.sideTwo &&
        this.sideThree + this.sideTwo >= this.sideOne)
    );
  }
  get isScalene() {
    return (
      this.sideOne != this.sideTwo &&
      this.sideOne != this.sideThree &&
      this.sideOne + this.sideTwo >= this.sideThree &&
      this.sideOne + this.sideThree >= this.sideTwo &&
      this.sideThree + this.sideTwo >= this.sideOne
    );
  }
  get isDegenerate() {
    return (
      (this.sideOne === this.sideTwo &&
        this.sideOne + this.sideTwo === this.sideThree &&
        this.sideThree != 0) ||
      (this.sideOne === this.sideThree &&
        this.sideOne + this.sideThree === this.sideTwo &&
        this.sideTwo != 0) ||
      (this.sideThree === this.sideTwo &&
        this.sideThree + this.sideTwo === this.sideOne &&
        this.sideOne != 0)
    );
  }
}
