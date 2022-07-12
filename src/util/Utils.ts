export class Utils {
  getPlaces() {
    let numbers = []; // new empty array

    let min, max, r, n, p;

    min = 1;
    max = 21;
    r = 21; // how many numbers you want to extract

    for (let i = 0; i < r; i++) {
      do {
        n = Math.floor(Math.random() * (max - min + 1)) + min;
        p = numbers.includes(n);
        if (!p) {
          numbers.push(n);
        }
      } while (p);
    }

    return numbers;
  }
}
