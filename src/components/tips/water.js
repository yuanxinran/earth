const items = [
  {
    _id: 1,
    name: 'Showers',
    content: 'Cut down 5 mins for shower time',
    save: '45 litres',
    x: 0,
    y: 100.06
  },
  {
    _id: 2,
    name: 'Brushing your teeth',
    content: 'Cut down 5 mins for shower time',
    save: '11.5 litres',
    x: 92,
    y: 97.06
  },
  {
    _id: 3,
    name: 'Flushing toilet',
    content: 'Cut down 5 mins for shower time',
    save: '3 litres',
    x: 205,
    y: 115.06
  },
  {
    _id: 4,
    name: 'Dish washing',
    content: 'Cut down 5 mins for shower time',
    save: '28 litres',
    x: 340,
    y: 95.06
  },
  {
    _id: 5,
    name: 'Washing machine',
    content: 'Cut down 5 mins for shower time',
    save: '52.5 litres',
    x: 440,
    y: 115.06
  },
  {
    _id: 6,
    name: 'Recyling paper',
    content: 'Recyle paper cups, cardboards, etc.',
    save: '45 litres',
    x: 520,
    y: 100.06
  }
];

export function getItems() {
  return items;
}

export function getItem(n) {
  return items.find(m => m._id === parseInt(n));
}
