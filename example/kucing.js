// Class merupakan sebuah blueprint dari sebuah object
class Kucing {
  constructor(color, height, length, weight) {
    this.color = color;
    this.height = height;
    this.length = length;
    this.weight = weight;
  }
  /**
   * Atribute / Properties
   * Properties mempresentasikan karakteristik dari class (blueprint)
   * Sebuah class memiliki properti yang berbeda
   */
  set color(value) {
    this.color = value;
  }

  get color() {
    return this.color;
  }

  set height(value) {
    this.height = value;
  }

  get height() {
    return this.height;
  }

  set length(value) {
    this.length = value;
  }

  get length() {
    return this.length;
  }

  set weight(value) {
    this.weight = value;
  }

  get weight() {
    return this.weight;
  }

  /**
   * Function merupakan sebuah prosedur / mini program
   * Ini merupakan cara sederhana untuk mengatur program kita
   * dan juga memodifikasi properti yang dimiliki oleh sebuah object
   * contohnya, kucing memilik beberapa behavior atau fungsi yang ia lakukan
   * contoh: makan, berjalan, atau berkomunikasi dengan hewan lain.
   */

  // Bersuara
  purring() {
    console.log("Meow ...");
  }

  // makan
  eat() {
    this.weight = this.weight + 1;
  }
}
