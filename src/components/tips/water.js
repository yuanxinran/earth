const items = [
  {
    _id: 1,
    name: 'Showers',
    img: require('../../imgs/usage2/shower.png'),
    wrong: '10-min shower',
    right: '5-min shower',
    save: '45 litres',
    x: 0,
    y: 0,
    offset: '20px'
  },
  {
    _id: 2,
    name: 'Brushing teeth',
    img: require('../../imgs/usage2/brush.png'),
    wrong: 'Tap running for 2 mins',
    right: 'Use a mug',
    save: '11.5 litres',
    x: '14%',
    y: 0,
    offset: '20px'
  },
  {
    _id: 3,
    name: 'Flushing toilet',
    img: require('../../imgs/usage2/toilet.png'),
    wrong: '4 full flushes/day',
    right: '2 full flushes, 2 half flushes',
    save: '3 litres',
    x: '28%',
    y: '20px',
    offset: 0
  },
  {
    _id: 4,
    name: 'Dish washing',
    img: require('../../imgs/usage2/wash.png'),
    wrong: 'Washing dishes under running tap',
    right: 'Filled sink/container',
    save: '28 litres',
    x: '42%',
    y: 0,
    offset: '20px'
  },
  {
    _id: 5,
    name: 'Washing machine',
    img: require('../../imgs/usage2/washing2.png'),
    wrong: 'Washing on a half load',
    right: 'Washing on a full load',
    save: '52.5 litres',
    x: '56%',
    y: '20px',
    offset: 0
  },
  {
    _id: 6,
    name: 'Leaking pipes',
    img: require('../../imgs/usage2/leak.png'),
    wrong: 'Leaking pipes',
    right: 'Repair leaks promptly',
    save: '45 litres',
    x: '70%',
    y: '0',
    offset: '20px'
  }
];

export function getItems() {
  return items;
}

export function getItem(n) {
  return items.find(m => m._id === parseInt(n));
}
