const jihanki = document.getElementById('jihanki');

// ドリンクの画像名配列 (例)
const drinkImages = ['ehimemikan.jpg', 'fuji.jpg', 'jihanki.jpg', 'jonagold.jpg', 'ourin.jpg', 'toki.jpg', 'tsugaru.jpg', 'sekaiichi.jpg'];

// ドリンクをランダムな位置に配置する関数
function addDrink() {
  const drink = document.createElement('div');
  drink.classList.add('drink');
  drink.style.backgroundImage = `url(${drinkImages[Math.floor(Math.random() * drinkImages.length)]})`;
  drink.style.left = `${Math.random() * 250}px`;
  drink.style.top = `${100 + Math.random() * 250}px`;

  jihanki.appendChild(drink);

  // ドラッグアンドドロップ機能
  drink.draggable = true;

  drink.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', drink.id);
  });

  drink.addEventListener('dragover', (event) => {
    event.preventDefault();
  });

  drink.addEventListener('drop', (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    const target = document.getElementById(data);
    target.style.left = event.clientX - 25 + 'px';
    target.style.top = event.clientY - 25 + 'px';
  });
}

// 初期表示時に複数のドリンクを配置
for (let i = 0; i < 5; i++) {
  addDrink();
}