
//タグの検索
function serchTag() {
  //テキストに入れた、タグの名前
  let tag = document.getElementById("tag");

  //todoリストに入っている分ループ
  for (let i = 0; i < /*リストの長さ*/ ; i++) {
    //class_name[1]に内容   [2]にタグ名
    let class_name = document.getElementsByClassName('"' + i + '"');

    //タグが指定されたかどうか。
    if (class_name[2] == null) {
      //タグがないときは何もしない
      class_name.style.display = "none";
    } else {
      //タグが検索したときにあって、かつタグがtextに入れたタグと一致していないもの
      if (class_name[2] != tag.value) {
        class_name.style.display = "none";
      }
    }
  }

}
