
document.addEventListener("DOMContentLoaded", function () {
  // 再春館製薬リスト動的生成
  const client01List = document.querySelector("#client01-list"); // クラスセレクタに修正
  let client01ListNum = 9;

  // 初期化しておく
  let listHTML = "";

  for (var i = 0; i < client01ListNum; i++) {
    listHTML += `<li><img class='logoimg' src='sozai/banner/client01_${
      i + 1
    }.jpg' alt=''></li>`;
  }

  // リストに追加
  client01List.innerHTML = listHTML; // 1回だけ innerHTML を使って挿入


  // ORBISリスト動的生成
  const client02List = document.querySelector("#client02-list"); // クラスセレクタに修正
  let client02ListNum = 6;

  // 初期化しておく
  let listHTML2 = "";

  for (var i = 0; i < client02ListNum; i++) {
    listHTML2 += `<li><img class='logoimg' src='sozai/banner/client02_${
      i + 1
    }.jpg' alt=''></li>`;
  }

  // リストに追加
  client02List.innerHTML = listHTML2; // 1回だけ innerHTML2 を使って挿入
});
