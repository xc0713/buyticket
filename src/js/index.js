var btn = document.querySelector('.btn');
var list = document.querySelector('.list');
var lis = list.querySelectorAll('li');

for (var i = 0; i < lis.length; i++) {
    lis[i].onclick = function() {
        this.classList.add('active')
    }
    lis[i].classList.remove('active');
}
btn.onclick = function() {
    var time = document.querySelector('.time').innerHTML;
    var xhr = new XMLHttpRequest();
    xhr.open('get', '/api/get/train_ticketstime=' + time, true);
    xhr.onload = function(res) {
        if (res.target.status === 200) {
            console.log(res)
        }
    }
    location.href = "list.html?time=" + time;
}