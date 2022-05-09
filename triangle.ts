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
}
