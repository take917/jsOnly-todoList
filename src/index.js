const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;

  // テキストBOX入力値を初期化
  document.getElementById("add-text").value = "";

  // liタグの作成
  const li = document.createElement("li");

  // divタグの作成
  const div = document.createElement("div");
  //   生成divにクラスを適用
  div.className = "list-row";

  //  Pタグ作成
  const p = document.createElement("p");

  // 完了ボタン作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("click");
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
  p.innerText = inputText;
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  li.appendChild(div);
  console.log(li);
  console.log(document.getElementById("incomplete-list"));
  document.getElementById("incomplete-list").appendChild(li);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);
