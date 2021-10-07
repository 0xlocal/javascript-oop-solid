const main = () => {
  /**
   * Object merupakan instance dari sebuah class
   */

  //membuat instance/object dari class Kucing
  const persian = new Kucing();
  persian.color = "putih";
  persian.height = 24.0;
  persian.length = 46.0;
  persian.weight = 2.0;

  //membuat instance/object dari class Kucing menggunakan constructor
  const bengal = new Kucing("Coklat", 22.0, 39.0, 2.3);
  const anggora = new Kucing("Abu-abu", 25.0, 41.0, 2.4);
};

main();
