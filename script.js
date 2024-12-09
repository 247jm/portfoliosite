
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


  // Ohmyteethリスト動的生成
  const client03List = document.querySelector("#client03-list"); // クラスセレクタに修正
  let client03ListNum = 21;

  // 初期化しておく
  let listHTML3 = "";

  for (var i = 0; i < client03ListNum; i++) {
    listHTML3 += `<li><img class='logoimg' src='sozai/banner/client03_${
      i + 1
    }.jpg' alt=''></li>`;
  }

  // リストに追加
  client03List.innerHTML = listHTML3; // 1回だけ innerHTML3 を使って挿入


  // LAVAリスト動的生成
  const client04List = document.querySelector("#client04-list"); // クラスセレクタに修正
  let client04ListNum = 44;

  // 初期化しておく
  let listHTML4 = "";

  for (var i = 0; i < client04ListNum; i++) {
    listHTML4 += `<li><img class='logoimg' src='sozai/banner/client04_${
      i + 1
    }.jpg' alt=''></li>`;
  }

  // リストに追加
  client04List.innerHTML = listHTML4; // 1回だけ innerHTML4 を使って挿入


  // ABCリスト動的生成
  const client05List = document.querySelector("#client05-list"); // クラスセレクタに修正
  let client05ListNum = 35;

  // 初期化しておく
  let listHTML5 = "";

  for (var i = 0; i < client05ListNum; i++) {
    listHTML5 += `<li><img class='logoimg' src='sozai/banner/client05_${
      i + 1
    }.jpg' alt=''></li>`;
  }

  // リストに追加
  client05List.innerHTML = listHTML5; // 1回だけ innerHTML5 を使って挿入


  // HLCAリスト動的生成
  const client06List = document.querySelector("#client06-list"); // クラスセレクタに修正
  let client06ListNum = 172;

  // 初期化しておく
  let listHTML6 = "";

  for (var i = 0; i < client06ListNum; i++) {
    listHTML6 += `<li><img class='logoimg' src='sozai/banner/client06_${
      i + 1
    }.jpg' alt=''></li>`;
  }

  // リストに追加
  client06List.innerHTML = listHTML6; // 1回だけ innerHTML6 を使って挿入


  // TRYリスト動的生成
  const client07List = document.querySelector("#client07-list"); // クラスセレクタに修正
  let client07ListNum = 6;

  // 初期化しておく
  let listHTML7 = "";

  for (var i = 0; i < client07ListNum; i++) {
    listHTML7 += `<li><img class='logoimg' src='sozai/banner/client07_${
      i + 1
    }.jpg' alt=''></li>`;
  }

  // リストに追加
  client07List.innerHTML = listHTML7; // 1回だけ innerHTML7 を使って挿入


  // kredoリスト動的生成
  const client08List = document.querySelector("#client08-list"); // クラスセレクタに修正
  let client08ListNum = 102;

  // 初期化しておく
  let listHTML8 = "";

  for (var i = 0; i < client08ListNum; i++) {
    listHTML8 += `<li><img class='logoimg' src='sozai/banner/client08_${
      i + 1
    }.jpg' alt=''></li>`;
  }

  // リストに追加
  client08List.innerHTML = listHTML8; // 1回だけ innerHTML8 を使って挿入


  // loccaリスト動的生成
  const client09List = document.querySelector("#client09-list"); // クラスセレクタに修正
  let client09ListNum = 12;

  // 初期化しておく
  let listHTML9 = "";

  for (var i = 0; i < client09ListNum; i++) {
    listHTML9 += `<li><img class='logoimg' src='sozai/banner/client09_${
      i + 1
    }.jpg' alt=''></li>`;
  }

  // リストに追加
  client09List.innerHTML = listHTML9; // 1回だけ innerHTML9 を使って挿入
  

  // EIリスト動的生成
  const client10List = document.querySelector("#client10-list"); // クラスセレクタに修正
  let client10ListNum = 17;

  // 初期化しておく
  let listHTML10 = "";

  for (var i = 0; i < client10ListNum; i++) {
    listHTML10 += `<li><img class='logoimg' src='sozai/banner/client10_${
      i + 1
    }.jpg' alt=''></li>`;
  }

  // リストに追加
  client10List.innerHTML = listHTML10; // 1回だけ innerHTML10 を使って挿入


  // kolohaリスト動的生成
  const client11List = document.querySelector("#client11-list"); // クラスセレクタに修正
  let client11ListNum = 24;

  // 初期化しておく
  let listHTML11 = "";

  for (var i = 0; i < client11ListNum; i++) {
    listHTML11 += `<li><img class='logoimg' src='sozai/banner/client11_${
      i + 1
    }.jpg' alt=''></li>`;
  }

  // リストに追加
  client11List.innerHTML = listHTML11; // 1回だけ innerHTML11 を使って挿入


  // celbestリスト動的生成
  const client12List = document.querySelector("#client12-list"); // クラスセレクタに修正
  let client12ListNum = 12;

  // 初期化しておく
  let listHTML12 = "";

  for (var i = 0; i < client12ListNum; i++) {
    listHTML12 += `<li><img class='logoimg' src='sozai/banner/client12_${
      i + 1
    }.jpg' alt=''></li>`;
  }

  // リストに追加
  client12List.innerHTML = listHTML12; // 1回だけ innerHTML12 を使って挿入


  // gofundリスト動的生成
  const client13List = document.querySelector("#client13-list"); // クラスセレクタに修正
  let client13ListNum = 39;

  // 初期化しておく
  let listHTML13 = "";

  for (var i = 0; i < client13ListNum; i++) {
    listHTML13 += `<li><img class='logoimg' src='sozai/banner/client13_${
      i + 1
    }.jpg' alt=''></li>`;
  }

  // リストに追加
  client13List.innerHTML = listHTML13; // 1回だけ innerHTML13 を使って挿入

  // shishaリスト動的生成
  const client15List = document.querySelector("#client15-list"); // クラスセレクタに修正
  let client15ListNum = 15;

  // 初期化しておく
  let listHTML15 = "";

  for (var i = 0; i < client15ListNum; i++) {
    listHTML15 += `<li><img class='logoimg' src='sozai/banner/client15_${
      i + 1
    }.jpg' alt=''></li>`;
  }

  // リストに追加
  client15List.innerHTML = listHTML15; // 1回だけ innerHTML15 を使って挿入


  // xiserリスト動的生成
  const client16List = document.querySelector("#client16-list"); // クラスセレクタに修正
  let client16ListNum = 6;

  // 初期化しておく
  let listHTML16 = "";

  for (var i = 0; i < client16ListNum; i++) {
    listHTML16 += `<li><img class='logoimg' src='sozai/banner/client16_${
      i + 1
    }.jpg' alt=''></li>`;
  }

  // リストに追加
  client16List.innerHTML = listHTML16; // 1回だけ innerHTML16 を使って挿入



});