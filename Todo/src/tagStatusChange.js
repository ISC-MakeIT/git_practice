const completeFnc = () => {
  //移動先の子要素にコピペした後に、移動前の要素を削除する
  document.getElementById("end").appendchild(taskNumber[0]);
  document.getElementById("doing").removeChild(taskNumber[0]);

  //[1]以外の[0]の子要素を削除する
  for (let i = 2; i <= 6; i++) {
    taskNumber[0].removeChild(taskNumber[i]);
  }
};

const deleteFnc = () => {
  //子要素から親要素を取得
  const parent = document.getElementsByClassName("taskNumber")[0].parentNode;

  //取得した親要素を使ってタスクをdarkに移動させる
  document.getElementById("dark").appendChild(taskNumber[0]);
  parent.removeChild(taskNumber[0]);
};

const interruptionFnc = () => {
  //要素を移動させる
  document.getElementById("break").appendchild(taskNumber[0]);
  document.getElementById("going").removeChild(taskNumber[0]);

  //必要のないボタンを見せないようにCSSを変える
  document.getElementsByClassName(
    "taskNumber"
  )[3] /*完了ボタン*/.getElementsByClassName.style.display = "none";
  document.getElementsByClassName(
    "taskNumber"
  )[5] /*中断ボタン*/.getElementsByClassName.style.display = "none";
};

const resumeFnc = () => {
  //再びボタン機能を視覚化するためにCSSを変更する
  document.getElementsByClassName(
    "taskNumber"
  )[3] /*完了ボタン*/.getElementsByClassName.style.display = "inline";
  document.getElementsByClassName(
    "taskNumber"
  )[5] /*中断ボタン*/.getElementsByClassName.style.display = "inline";

  //要素を移動させる
  document.getElementById("going").appendchild(taskNumber[0]);
  document.getElementById("break").removeChild(taskNumber[0]);
};
