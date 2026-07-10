const items = [
  "はま寿司",
  "しゃぶ葉",
  "ガスト",
  "バーミヤン",
  "スイパラ",
  "ポムの樹",
  "串家物語",
  "五右衛門",
  "鎌倉パスタ",
  "BOUQUET",
  "丸亀",
  "おぼんdeごはん",
  "油そば",
  "中本",
  "さちふくや",
  "しんぱち食堂",
  "麻辣湯",
  "カプリチョーザ"
];

const result = document.getElementById("result");
const button = document.getElementById("spin");

button.onclick = () => {

  button.disabled = true;

  let count = 0;
  let speed = 50;

  function spin() {

    result.textContent =
      items[Math.floor(Math.random() * items.length)];

    count++;

    if (count < 30) {
      speed += 8; // 少しずつ遅くする
      setTimeout(spin, speed);
    } else {
      const winner =
        items[Math.floor(Math.random() * items.length)];

      result.textContent = "🎉 " + winner + " 🎉";

      button.disabled = false;
    }
  }

  spin();
};
