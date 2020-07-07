const moviesMock = [
  {
    id: '73cdb9d5-be35-43df-a8df-5ac7e11270d4',
    title: 'Beach Girls and the Monster, The',
    year: 2007,
    cover: 'http://dummyimage.com/126x127.png/cc0000/ffffff',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    duration: 1929,
    contentRating: 'PG',
    source: 'http://de.vu/nisi/vulputate/nonummy/maecenas/tincidunt.jsp',
    tag: [
      'Horror',
      'Comedy',
      'Drama',
      'Children|Comedy|Romance',
      'Action|Sci-Fi',
    ],
  },
  {
    id: 'e09730cb-3fbc-4c34-8a78-a66e5f7a1a56',
    title: 'Riot on Sunset Strip',
    year: 1992,
    cover: 'http://dummyimage.com/119x227.bmp/dddddd/000000',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    duration: 1915,
    contentRating: 'G',
    source: 'http://wordpress.com/cursus/urna/ut/tellus/nulla.xml',
    tag: ['Comedy|Horror', 'Drama', 'Crime|Drama', 'Documentary'],
  },
  {
    id: '1e120b79-f3b4-471c-95a7-dd3232983aa5',
    title: 'Confessor, The (a.k.a. The Good Shepherd)',
    year: 2012,
    cover: 'http://dummyimage.com/204x131.bmp/dddddd/000000',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    duration: 2009,
    contentRating: 'PG-13',
    source: 'http://google.cn/cursus/urna/ut/tellus/nulla/ut/erat.jpg',
    tag: ['Action|Comedy|Romance|Western'],
  },
  {
    id: '401ffcb4-7a60-48fc-88da-8daa43fb7885',
    title: 'Sunday Bloody Sunday',
    year: 1985,
    cover: 'http://dummyimage.com/147x126.png/ff4444/ffffff',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    duration: 1968,
    contentRating: 'G',
    source: 'https://ebay.com/eu/interdum/eu/tincidunt/in/leo/maecenas.js',
    tag: ['Comedy|Romance'],
  },
  {
    id: '3830a281-ce74-43ec-bda0-dec052863afa',
    title: 'Aurora',
    year: 2000,
    cover: 'http://dummyimage.com/122x227.png/cc0000/ffffff',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    duration: 1990,
    contentRating: 'PG',
    source:
      'https://usda.gov/vestibulum/ante/ipsum/primis/in/faucibus/orci.html',
    tag: ['Drama', 'Comedy|Romance', 'Drama'],
  },
  {
    id: '68319b2e-4f2d-4f75-9ce0-04b9b9b14f04',
    title: 'Trailer Park Boys',
    year: 2008,
    cover: 'http://dummyimage.com/114x246.bmp/dddddd/000000',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    duration: 1916,
    contentRating: 'R',
    source: 'https://amazon.de/vel.png',
    tag: ['Children|Comedy|Sci-Fi'],
  },
  {
    id: '7e30de39-c484-4b9a-93b2-a932c8624cc2',
    title: 'Homer & Eddie',
    year: 1993,
    cover: 'http://dummyimage.com/213x211.bmp/cc0000/ffffff',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    duration: 1905,
    contentRating: 'PG',
    source: 'http://amazon.com/adipiscing/elit/proin/risus/praesent/lectus.jpg',
    tag: [
      'Comedy',
      'Adventure|Comedy',
      'Comedy|Drama|Romance',
      'Action|Adventure|Comedy|Drama|Romance|Thriller',
    ],
  },
  {
    id: '86a9c0ab-c3e7-4271-803f-e811131ad2ae',
    title: 'Black Cat, White Cat (Crna macka, beli macor)',
    year: 2002,
    cover: 'http://dummyimage.com/248x202.jpg/5fa2dd/ffffff',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    duration: 1936,
    contentRating: 'NC-17',
    source: 'https://weibo.com/nulla/justo/aliquam.xml',
    tag: [
      'Action|Adventure|Drama',
      'Comedy',
      'Adventure|Comedy|Drama',
      'Documentary',
      'Crime|Thriller',
    ],
  },
  {
    id: 'b4139be5-1710-4c40-9a28-d6ed8afeb303',
    title: 'Black Angel',
    year: 2011,
    cover: 'http://dummyimage.com/185x161.png/dddddd/000000',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    duration: 2066,
    contentRating: 'PG-13',
    source: 'https://issuu.com/eget/nunc/donec/quis.js',
    tag: [
      'Drama',
      'Comedy|Crime|Drama|Romance',
      'Drama',
      'Comedy',
      'Drama|Romance',
    ],
  },
  {
    id: 'bc24b8d2-b172-4ef8-8659-933fbcb82fb4',
    title: 'The Wonders',
    year: 2002,
    cover: 'http://dummyimage.com/145x155.png/cc0000/ffffff',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    duration: 2047,
    contentRating: 'PG-13',
    source: 'http://tiny.cc/a/odio/in.xml',
    tag: [
      'Crime|Drama',
      'Comedy|Drama|Romance',
      'Documentary',
      'Comedy|Drama',
      'Crime|Drama|Romance|Thriller',
    ],
  },
];

module.exports = {
  moviesMock,
};
