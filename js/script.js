//文字　→ ””
//数字　→ そのまま書く
console.log("こんにちは");
console.log(123);
console.log("123");
console.log(123 + 456);

//要素を取得する
document.getElementById('header');

//変数を用意
const kinnnikun = document.getElementById('header');
//変数を出力
console.log(kinnnikun);


const apple = "りんご";
console.log(apple);

const mikan = 123 + 456;
console.log(mikan);

//クラスを一つだけ取得する
const navigationItem =document.querySelectorAll('.navigationItem'); 
console.log(navigationItem[4]);

//element.textContent = 'こんにちは';    // テキストだけ変える
//element.innerHTML = '<b>強調</b>';    // HTMLも含めて変更



// element.addEventListener('click', () => {
//   // クリックされたときの処理
// });


//予約ボタンをクリックする→温泉がヤーになる
//予約ボタンを取得→クリックイベントを用意する

const reservationButton = document.querySelector('.reservationButton');
console.log(reservationButton);
reservationButton.addEventListener('click', () => {
    navigationItem[4].textContent = "ヤー";
  // クリックされたときの処理
});