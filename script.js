// todo Fitur:
// todo 1. menambahkan
// todo 2. coret kalau sudah selesai
// todo 3. hapus

// todo 1. ambil nilai teksnya
let newTask = document.querySelector('#newTask');
let add = document.querySelector('#add');
const list = document.querySelector('#list');

let clearBtn = document.createElement('button');
let clearTxt = document.createTextNode('Clear');
let container = document.querySelector('.container');
clearBtn.className = 'clear';
clearBtn.appendChild(clearTxt);
container.appendChild(clearBtn);

// clearBtn.addEventListener("click", function (e) {
//   e.target.previousElementSibling.style.display = "none";
// });

add.addEventListener('click', function (e) {
  // Todo 2. tambah list baru
  e.preventDefault();
  let li = document.createElement('li');
  li.className = 'listItems';
  let sp = document.createElement('span');
  let txt = document.createTextNode(newTask.value);

  if (newTask.value !== '') {
    sp.appendChild(txt);
    li.appendChild(sp);
    list.appendChild(li);

    let closeBtn = document.createElement('button');
    let txtBtn = document.createTextNode('x');
    closeBtn.className = 'close';

    closeBtn.appendChild(txtBtn);
    li.appendChild(closeBtn);

    newTask.value = '';
    li.addEventListener('click', function (e) {
      e.target.style.textDecoration = 'line-through';
    });
    closeBtn.addEventListener('click', function (e) {
      e.target.parentElement.style.display = 'none';
    });
    clearBtn.addEventListener('click', function () {
      li.remove('li');
    });
  } else {
    alert('No Task Input, Please write some task!');
  }
});
