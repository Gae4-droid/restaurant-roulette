const items = ["🍔 マック","🐙 銀だこ","🥯 ビアードパパ","🍙おむすび","🍗 KFC","🥞 クレープ","🍞 ねこねこパン","☕ スタバ","🧋 ゴンチャ","☕ タリーズ","🍗 モスチキン","🍨 サーティワン","🍩 ミスド","🥙 ケバブ"];

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
