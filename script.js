const jihanki = document.getElementById('jihanki');

// ドリンクの画像名配列 (例)
const drinkImages = ['ehimemikan.jpg', 'fuji.jpg', 'jihanki.jpg', 'jonagold.jpg', 'ourin.jpg', 'toki.jpg', 'tsugaru.jpg', 'sekaiichi.jpg'];

// ドリンクをランダムな位置に配置する関数
function addDrink() {
  const drink = document.createElement('div');
  drink.classList.add('drink');
  drink.style.backgroundImage = `url(${drinkImages[Math.floor(Math.random() * drinkImages.length)]})`;
  drink.style.left = `${Math.random() * 250}px`; // 自動販売機内のランダムな位置に配置
  drink.style.top = `${100 + Math.random() * 250}px`; // 自動販売機内のランダムな位置に配置

  jihanki.appendChild(drink);

  // クリックイベント (ドラッグ&ドロップも可能)
  drink.addEventListener('mousedown', (event) => {
    drink.style.position = 'fixed'; // ドリンクを固定
    drink.style.left = event.clientX - 25 + 'px'; // マウスカーソルに追従
    drink.style.top = event.clientY - 25 + 'px'; // マウスカーソルに追従
  });
  document.addEventListener('mouseup', () => {
    drink.style.position = 'absolute'; // ドリンクを元の位置に戻す
    // ドリンクをランダムな位置に戻す処理も追加可能
  });
}

// 初期表示時に複数のドリンクを配置
for (let i = 0; i < 5; i++) {
  addDrink();
}