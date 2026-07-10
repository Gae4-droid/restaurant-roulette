const items = [
  "はま寿司","しゃぶ葉","ガスト","バーミヤン","スイパラ",
  "ポムの樹","串家物語","五右衛門","鎌倉パスタ","BOUQUET",
  "丸亀","おぼんdeごはん","油そば","中本","さちふくや",
  "しんぱち食堂","麻辣湯","カプリチョーザ"
];

const result = document.getElementById("result");
const button = document.getElementById("spin");

button.onclick = () => {
  button.disabled = true;

  const winner = items[Math.floor(Math.random() * items.length)];

  let count = 0;

  function spin() {
    result.textContent = items[Math.floor(Math.random() * items.length)];

    count++;

    if (count < 25) {
      // 最初は速く
      setTimeout(spin, 50);
    } else if (count < 35) {
      // 少し遅く
      setTimeout(spin, 120);
    } else if (count < 42) {
      // さらに遅く
      setTimeout(spin, 250);
    } else {
      result.textContent = "🎉 " + winner + " 🎉";
      button.disabled = false;
    }
  }

  spin();
};
