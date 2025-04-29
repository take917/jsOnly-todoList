const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;

  // テキストBOX入力値を初期化
  document.getElementById("add-text").value = "";
  createIncompleteTodo(inputText);
};

// 未完了のTODOを作成
const createIncompleteTodo = (todo) => {
  // liタグの作成
  const li = document.createElement("li");

  // divタグの作成
  const div = document.createElement("div");
  //   生成したdivにクラスを適用
  div.className = "list-row";

  //  Pタグ作成
  const p = document.createElement("p");

  // 完了ボタン作成
  const completeButton = document.createElement("button");
  //ボタンの表示を完了にする
  completeButton.innerText = "完了";
  //ボタンクリック時のイベントの設定
  completeButton.addEventListener("click", () => {
    // 親要素の取得
    const moveTarget = completeButton.closest("li");
    // 該当の次の要素を削除
    completeButton.nextElementSibling.remove();
    // 要素の削除
    completeButton.remove();
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    backButton.addEventListener("click", () => {
      //   該当要素の前の要素のテキストを取得
      const todoText = backButton.previousElementSibling.innerText;
      createIncompleteTodo(todoText);
      backButton.closest("li").remove();
    });
    // ターゲットの最初の要素に要素を追加
    moveTarget.firstElementChild.appendChild(backButton);
    document.getElementById("complete-list").appendChild(moveTarget);
  });

  //削除ボタン作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.closest("li");
    document.getElementById("incomplete-list").removeChild(deleteTarget);
    // console.log(deleteTarget);
  });

  // 生成divにクラスを適用
  p.className = "todo-item";

  // 生成したタグにテキストを入れる
  p.innerText = todo;
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  li.appendChild(div);
  console.log(li);
  console.log(document.getElementById("incomplete-list"));
  document.getElementById("incomplete-list").appendChild(li);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);
