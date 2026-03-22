'use strict';

// サンプル数samplesのとき
// モンテカルロ法を使って円周率を求める
function calcPi(samples) {
  const radius = 1; // 円の半径。単位円でよい。
  const squareLength = 2 * radius; // 正方形の長さ

  let inner = 0; // 内部に打たれた点の数
  for(let i = 0; i < samples; i++) {
    // -raidusからradiusまでの範囲の乱数
    const x = Math.random() * squareLength - radius;
    const y = Math.random() * squareLength - radius;
    
    // ランダムな点が円の内部にあればinnerを増加させる
    const distance = Math.sqrt(x * x + y * y);
    if (distance <= 1) { inner++; }
  }

  // 円周率を計算して返す
  return 4 * inner / samples;
}

console.log(calcPi(100))