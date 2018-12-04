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

const tips = [
  {
    _id: 0,
    img: require('../../imgs/indoor/tips/cooking.jpg'),
    name: 'Cooking',
    description:
      'Wash vegetables and fruits in a large bowl or tub of water and scrub them with a vegetable brush instead of using your faucet as a power-washer.'
  },
  {
    _id: 1,
    img: require('../../imgs/indoor/tips/dish.jpg'),
    name: 'Dish Washing',
    description:
      'Get a dishwasher. They almost always use less water than washing dishes by hand, especially with water- and energy-efficient models.'
  },
  {
    _id: 2,
    img: require('../../imgs/indoor/tips/washing.jpg'),
    name: 'Laundry',
    description: 'Choose an ENERGY STAR water- and energy-efficient model.'
  },
  {
    _id: 3,
    img: require('../../imgs/indoor/tips/bath.jpg'),
    name: 'Bath & Shower',
    description: 'Think of baths as an occasional treat and stick to showers. '
  },
  {
    _id: 4,
    img: require('../../imgs/indoor/tips/toilet.jpg'),
    name: 'Toilet',
    description:
      'Put a plastic bottle filled with water in your toilet tank to reduce the amount of water used per flush'
  },
  {
    _id: 5,
    name: 'Recyling',
    description:
      'Recycle (or reuse) every bit of plastic you can and only throw it in the trash as a last resort.',
    img: require('../../imgs/watertips/recycling.jpg')
  },
  {
    _id: 6,
    name: 'Cut down your shower time',
    description: 'Cut 5 mins from your shower time ',
    img: require('../../imgs/watertips/shower.png')
  },
  {
    _id: 7,
    name: 'Carry reusable tableware',
    description: 'Cut 5 mins from your shower time ',
    img: require('../../imgs/watertips/tableware.jpg')
  },
  {
    _id: 8,
    name: 'Collect rain water',
    description:
      'Collect rain water through gutters. Use them to water your flowers.',
    img: require('../../imgs/watertips/rain.jpg')
  },
  {
    _id: 9,
    name: 'Fill the sink',
    description:
      'Fill up your sink with water, instead of letting it run the whole time that you’re scrubbing.',
    img: require('../../imgs/watertips/plates.jpg')
  },
  {
    _id: 10,
    name: 'Check your bill',
    description:
      'If your water bill spikes suddenly, there’s a good chance that a leak is the culprit.',
    img: require('../../imgs/watertips/bill.jpg')
  },
  {
    _id: 11,
    name: '...',
    description: null,
    img: require('../../imgs/watertips/blank.png'),
    show: true
  }
];

export function getItems() {
  return items;
}

export function getItem(n) {
  return items.find(m => m._id === parseInt(n));
}

export function getTips() {
  return tips;
}

export function getTip(n) {
  return tips.find(m => m._id === parseInt(n));
}
