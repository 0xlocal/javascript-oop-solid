# What is SOLID?

> "SOLID principles are a means of forcing us to stop and think about the 'right' way to do something."

SOLID merupakan 5 prinsip untuk membuat desain perangkat lunak lebih mudah untuk dipahami, fleksibel, dan mudah untuk dipelihara.

## Single Responsibility Principle

![Just because you can, Doesn't mean you should](https://scontent-cgk1-1.xx.fbcdn.net/v/t1.6435-9/89614694_2840591446022199_2699237064062271488_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=9267fe&_nc_eui2=AeGUB1ChbjJKMUBYCd2yRg2hmLEuK1uuK2aYsS4rW64rZkq3Wyg_ToWUTEDQsMuyJff-Ge-RR-mPAAQPjExRn4zG&_nc_ohc=MBn2P2-friUAX9RhZi2&tn=kk-_EoVOAxabc0Y8&_nc_ht=scontent-cgk1-1.xx&oh=487d2697f0b74f4bc53859ec1105610d&oe=617FAFA1)

> "A class should have one reason to change" - Robert Martin

Single Responsibility artinya satu hal melakukan satu aksi. Setiap _module_ atau _class_ harus mempunyai tanggung jawab terhadap satu bagian fungsionalitas yang disediakan oleh software, dan tanggung jawab itu harus sepenuhnya di enkapsulasi oleh _class_ / _module_. Semua _services_ harus disesuaikan dengan tanggung jawab tersebut.

Jadi, ketika kita membuat _module_ atau _class_, pastikan kelas tersebut bertanggung jawab atas sebuah fungsional, dan ketika perlu terjadi perubahan, alasan perubahan tersebut berkaitan dengan tanggung jawab _class_ / _module_ tersebut. Jika sebuah _class_ atau _module_ bertanggung jawab atas banyak fungsionalitas, itu akan menjadi sebuah masalah karena akan mengakibatkan fungsionalitas lain yang terdapat di _kelas_ tersebut bisa terganggu. Sehingga dengan mengimplementasikan prinsip ini, mengurangi resiko kesalahan atau _bug_ terhadap fungsionalitas lain.

Ketika terdapat sesuatu diluar tanggung jawab _class_ atau _module_ tersebut, pastikan proses yang berbeda dengan tanggung jawab dilakukan diluar _class_ atau _module_ tersebut.

## Open/closed Principle

> Open/Closed Principle stands for Open for extension, but Closed for modification.

Entitas pada sebuah Software (_Classes_, _Modules_, _Functions_, etc.) harus terbuka untuk _Extension_, tapi tertutup untuk _Modification_.

## Liskov Subtitution Principle

## Interface Segregation Principle

## Dependecies Inversion Principle
