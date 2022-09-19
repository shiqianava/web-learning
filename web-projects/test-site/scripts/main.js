let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

// 页面点击提示事件
/* document.querySelector('html').onclick = () => {
    alert('别戳我，我怕疼');
} */

/* document.querySelector('html').addEventListener('click', () => {
    alert('别戳我，我怕疼');
}) */

// 点击图片，更换新图片
let myImage = document.querySelector('img');
myImage.onclick = () => {
    myImage.getAttribute('src') === 'images/test-1.webp' ? 
    myImage.setAttribute('src', 'images/test-2.jpeg') : 
    myImage.setAttribute('src', 'images/test-1.webp');
}

// 添加个性化欢迎信息，点击button后，在标题加入用户名字，并保存
let myButton = document.querySelector('button');

function setUserName() {
    let myName = prompt('请输入你的名字');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storeName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了' + storeName;
}

myButton.onclick = () => {
    setUserName();
} 



