//変数
let you = 'Hello World';

you = 'Hello World2'; //変数は書き換え可能

//定数
const I = 'Hello You'; //定数は書き換え不可

//配列
let inoki = ['いーち','にーい','さーん','だー！！']; //複数の文字列を入れて定義する事ができる

console.log(inoki[0]); //コンソールログで出力できてるか確認


//ループ分
let index = 0;
//indexの中身が5以下なら{}内の命令が実行される
while(index < inoki.length){ //inokiの配列の数をlengthで引っ張ってくる
	//繰り返したい命令
	console.log(inoki[index]); //inokiの配列を出力する
	index++;//indexに1を足す
}

//if / else
// if(inoki.length > 5){ //inokiの配列が5以上だったら下の文字を出力
// 	console.log('ボンバイエ！');
// } else { //5より少なければ下の文字を出力
// 	console.log('ボンバ、、！');
// }

//関数 (同じ命令を何度も使いたい時)(任意のタイミングで命令を実行させたい時)
const test = (arg) => {
	//ここに実行したい命令を書く
	if(inoki.length > arg){
		console.log('ボンバイエ！');
	} else {
		console.log('ボンバ、、！');
	}
};

// test(3);//関数testに定義されている為これで出力される
// test(5);
// test(4);
// test(6);
//argは引数として比較する数を決めてif文を使用する事ができる。

//オブジェクト (変数や定数は1:1なのに対してオブジェクトは複数の値を持てる) データの塊
const unko2 = {
	color: 'pink',
	size: 'large',
	purfume: 'mint'
	goToilet: () => { //関数を定義する事もできる
		console.log('Hello world!');
	}
};

// console.log(unko2.size);//オブジェクトの中身を指定して出力する
console.log(unko2.goToilet());

//デフォルトのオブジェクト
//window(ブラウザ全体のオブジェクト)
console.log(window.innerHeight); //ウインドウページの全体の高さがわかる
console.log(window.innerWidth); //横幅がわかる

window.alert('Hello World!'); //ポップアップをつける事ができる

//document(表示しているページ全体のオブジェクト)
console.log(document.getElementsByTagName('button')[0]);//HTMLの何かを指定・参照したい時に使う

//event(ユーザーがアクションをしたタイミングで何かをしたい時に使う)
//button０が押された時ポップアップを起動させてみる
document.getElementsByTagName('button')[0].addEventListner('click', ()=> {
	//クリック後の命令を書く
	window.alert('Hello World!');
});
//引数を２つ指定する事ができる(1:どのイベントを使うかを指定)(2:関数を指定する)












