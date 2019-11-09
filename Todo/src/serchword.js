//内容検索
function serchWord() {
  //テキストに入れた、内容の名前
  let value_input = document.getElementById("value_input");

  //todoリストに入っている分ループ
  for (let i = 0; i < taskNumber; i++) {
    //class_name[1]に内容   [2]にタグ名
    let class_name = document.getElementsByClassName('"' + i + '"');

    //内容が指定されたかどうか。
    if (class_name[1] == null) {
      //内容がないときは何もしない
      class_name.style.display = "none";
    } else {
      //内容が検索したときにあって、かつ内容がvalue_inputに入れた内容と一致していないもの
      if (class_name[1] != value_input.value) {
        class_name.style.display = "none";
      }
    }
  }
}
