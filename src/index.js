/** const,let  */
var val1 = "var変数";
console.log(val1);
let val2 = "変数";
console.log(val2);
const val4 = {
  name: "aa",
  age: 28
};
val4.name = "uuu";
console.log(val4);
/** アロー関数  */
const func3 = (num1, num2) => {
  return num1 + num2;
};
console.log(func3(3, 4)); /*7が出力 */

/** 分割代入 とテンプレート文字列 */
const profile = {
  name: "aaa",
  age: 22
};
const message1 = `私の名前は${profile.name}です。年齢は${profile.age}`;
console.log(message1);
/** profileを何回も書かなくて済む  */
const { name, age } = profile;
const message2 = `私の名前は${name}です。年齢は${age}`;
console.log(message2);

/** スプレッド構文  */
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [9, 0, 7, 6, 8];
/** 配列の残り  */
function unshift(array, ...rest) {
  return [...array, ...rest];
}
console.log(unshift(arr1, 6, 7, 8, 9));
/** 配列をコピー */
const arr3 = [...arr1];
console.log(arr3);
/** 配列を結合 */
const arr4 = [...arr1, ...arr2];
console.log(arr4);
