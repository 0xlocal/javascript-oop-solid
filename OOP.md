# Object Oriented Programming (OOP)

Sebelum membahas paradigma OOP, sebaiknya kita juga harus tahu mengenai hubungan antara prinsip S.O.L.I.D ini di dalam konsep OOP. Jadi prinsip S.O.L.I.D ini merupakan paduan bagi kita saat kita akan mengembangkan sebuah sistem dengan pendekatan OOP. Jika kita mengikuti prinsip - prinsip ini kita dapat membuat sebuah sistem yang mudah kita gunakan dan kembangkan kembali, kokoh, dan tidak rapuh. Kita akan mempelajari apa itu OOP dan pilar - pilar utama dalam pendekatan OOP seperti _Encapsulation_, _Abstraction_, _Inheritance_, dan _Polimorphism_ yang akan kita bahas kali ini.

Pada pemrograman dengan menggunakan pendekatan OOP kita akan menemui beberapa istilah seperti _Class_, dimana didalam _Class_ terdapat _Attributes_ dan _Function_. Makna - makna dari istilah tersebut hampir sama atau bisa sangat berbeda. Contoh, _Properties_ atau _Atributte_ yang memiliki makna yang sama meskipun **tersendiri** namanya berbeda. Biasanya programmer lebih sering menggunakan _Attributes_ untuk istilah yang berkaitan dengan hal yang mengarah ke mekanisme atau proses yang dilakukan oleh _Object_ dan menggunakan istilah _Properties_ untuk mendeskripsikan karakteristik dari sebuah _Object_.

Mengapa _Object Oriented Programming_? OOP (_Object Oriented Programming_) masih merupakan salah satu paradigma atau teknik pemrograman yang populer dalam pengembangan aplikasi. Dengan paradigma OOP kita dapat dengan mudah memvisualisasikan kode karena OOP sendiri mirip dengan skenario kehidupan nyata. Dalam penerapan OOP kita menggabungkan kumpulan - kumpulan _Function_ atau _Attributes_ yang memiliki kesamaan dalam sebuah unit yang kita sebut sebagai _Object_.

---

**_Class_** merupakan sebuah blueprint yang dapat dikembangkan untuk membuat sebuah objek. Blueprint ini merupakan sebuah template yang di dalamnya menjelaskan seperti apa perilaku dari objek itu (berupa properti ataupun function).

![Class](https://i.imgur.com/V5ZvA46.png)

<center>

Contoh Class

</center>

Gambar diatas mencontohkan gambaran umum dari konsep OOP, dimana terdapat sebuah _blueprint_ Kucing, _Attributes_ yang dimiliki Kucing, dan kemampuan / _Function_ yang dapat dilakukan oleh kucing. Dalam _Object Oriented Programming_ (OOP), _Class_ merupakan sebuah **_blueprint_** yang dapat dikembangkan untuk membuat sebuah **_Object_**.

**_Blueprint_** ini merupakan sebuah _Template_ yang didalamnya menjelaskan seperti apa ciri - ciri dan perilaku dari _Object_ itu (berupa _Properties_ ataupun _Function_). Dalam dunia pemrograman khususnya dalam paradigma OOP, kita sering membuat banyak _Object_ dengan jenis yang sama. Dengan membuat _blueprint_ ini kita dapat mengurangi duplikasi kode dalam membuat _Object_ yang serupa.

---

## Class

Seperti yang telah dijelaskan dalam pembahasan _Object_, _Class_ merupakan sebuah _blueprint_. Didalam _class_ ini kita mendefinisikan sesuatu yang merupakan _Attribute_ ataupun _Behavior_.

| Attributes      | Function    |
| --------------- | ----------- |
| - String color  | + Playing() |
| - Double height | + Sleep()   |
| - Double length | + Eat()     |
| - Double weight | + puring()  |

Pada contoh sebuah _Class_ Kucing, _Attribute_ berupa warna, tinggi, lebar, dan berat. Sedangkan untuk _Behavior_ / _Function_ terdapat bermain, tidur, makan, bersuara, dan sebagainya.

```Javascript
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
```

Mari kita membuat beberapa _Instance_ dari _Class_ Kucing ini. Pada dasarnya _Instance_ dan _Object_ adalah hal yang sama. Karena ketika membahas sebuah _Object_, kita tahu bahwa sebuah _Object_ adalah _Instance_ hal yang sama. Karena ketika membahas sebuah _Object_, kita tahu bahwa sebuah _Object_ adalah _Instance_ dari sebuah _Class_ yang kita buat, atau dapat dikatakan sebagai sebuah realisasi dari sebuah _Blueprint_. _Object_ yang terbentuk dari sebuah _Class_ akan memiliki hak akses terhadap keseluruhan isi _Class_. Perhatikan contoh berikut.

```javascript
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
```

## Property

_Property_ (atau disebut juga dengan _Attribute_) adalah data yang terdapat dalam sebuah _Class_. Sebuah _Class_ tentu memiliki _Property_ dan mempresentasikan karakteristik dari _Class_ tersebut. Masing - masing _Class_ memiliki _Property_ yang berbeda. Contoh sebelumnya pada _Class_ Kucing, _Property_ yang dimiliki berupa color, height, length, dan weight.

```javascript
class Kucing {
  /**
   * Berikut adalah property sebuah class dalam constructor
   */
  constructor(color, height, length, weight) {
    this.color = color;
    this.height = height;
    this.length = length;
    this.weight = weight;
  }
}
```

Pada potongan kode di atas, kita dapat melihat _Property_ yang ada pada sebuah _Class_. Umumnya, setiap _Property_ memiliki struktur dasar seperti terdapat _modifier_, _data type_, nama konstanta / variable, dan nilai.
