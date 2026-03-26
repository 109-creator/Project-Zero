"use strict";

const scores = [
  { name: '田中', math: 67 },
  { name: '鈴木', math: 92 },
  { name: '佐藤', math: 51 }
];

for (const student of scores) {
    const name = student.name;
    const math = student.math;
    console.log(`${name}の数学の点数は${math}点です`);
}