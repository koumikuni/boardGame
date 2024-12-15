import { weightedRandom } from './random';

const places = ['オフィス', '工場', '映画館', 'モール'];
const placeWeights = [3, 3, 1, 1];

function generatePlace(excludedPlace?: string): string {
  let availablePlaces = places;
  let availableWeights = placeWeights;

  if (excludedPlace) {
    const index = places.indexOf(excludedPlace);
    availablePlaces = places.filter((_, i) => i !== index);
    availableWeights = placeWeights.filter((_, i) => i !== index);
  }

  return weightedRandom(availablePlaces, availableWeights);
}

export function generateTasks(): [string, string, string] {
  const place1 = generatePlace();
  const place2 = generatePlace(place1);

  const task1 = generateTask1(place1);
  const task2 = generateTask2(place2);
  const task3 = generateTask3();

  return [task1, task2, task3];
}

function generateTask1(place: string): string {
  const time = weightedRandom(['9:00', '9:15', '9:30', '9:45', '10:00'], [1, 2, 3, 4, 5]);
  const length = weightedRandom(['15分', '30分', '45分'], [2, 2, 1]);
  
  return `タスク1：${place}に${time}までに到着し${length}以上滞在する`;
}

function generateTask2(place: string): string {
  const time = weightedRandom(['11:00', '11:15', '11:30', '11:45', '12:00'], [1, 1, 3, 1, 1]);
  const length = weightedRandom(['15分', '30分', '45分'], [2, 2, 1]);
  
  return `タスク2：${place}に${time}までに到着し${length}以上滞在する`;
}

function generateTask3(): string {
  const time = weightedRandom(['14:00', '14:15', '14:30', '14:45', '15:00'], [1, 2, 3, 2, 1]);
  
  return `タスク3：ホームに${time}までに戻る`;
}

