import React from 'react';
import '../@extensions/Array-extensions';
import '../@extensions/string-extensions';
interface IX {
  a: number;
  b: number;
}

export const Home = () => {
  const text: string = 'hi'.padZero(5);
  const union = ['a', 'b'].union(['c', 'd']).join(', ');
  const x: IX[] = [
    { a: 1, b: 2 },
    { a: 2, b: 3 },
    { a: 3, b: 4 },
  ];

  const y = x.toRecord('a');
  const y1 = x.toRecord('b', (item, i) => item.a * i);
  const y2 = ['a', 'b'].toRecordSelf((item, i) => `${item}: ${i}`);

  return (
    <div>
      {text}' ' {union}
      <div>toRecord: default</div>
      <div>{JSON.stringify(y, null, 4)}</div>
      <div>toRecord</div>
      <div>{JSON.stringify(y1, null, 4)}</div>
      <div>toRecordSelf</div>
      <div>{JSON.stringify(y2, null, 4)}</div>
    </div>
  );
};
