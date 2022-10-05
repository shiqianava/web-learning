// 添加段落
const info = document.createElement('p');
info.textContent = 'Below is a dynamic list. Click anywhere on the page to add a new list item. Click an existing list item to change its text to something else.';
document.body.appendChild(info);

// 添加空列表
const list = document.createElement('ul');
document.body.appendChild(list);

// 添加页面和列表点击事件
const html = document.querySelector('html');
html.onclick = () => {
    const listItem = document.createElement('li');
    const listContent = prompt('请输入想显示的内容');
    listItem.textContent = listContent;
    list.appendChild(listItem);

    listItem.onclick = (e) => {
        e.stopPropagation();
        const listContent = prompt('修改内容');
        // 箭头函数不会生成自己的 this，此处 this 代表 Windows 对象
        // this.textContent = listContent;
        listItem.textContent = listContent;
    }
};
