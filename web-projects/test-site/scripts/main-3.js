// 添加说明信息
const info = document.createElement('p');
info.textContent = 'Below is a dynamic list. Click anywhere on the page to add a new list item. Click an existing list item to change its text to something else.';
// document.querySelector('body').appendChild(info);
document.body.appendChild(info);

// 添加无序列表 ul
const list = document.createElement('ul');
// document.querySelector('body').appendChild(list);
document.body.appendChild(list);

// 页面点击添加 li
const html = document.querySelector('html');
html.onclick = () => {
    const listItem = document.createElement('li');
    const listContent = prompt('What content do you want the list item to have?');
    listItem.textContent = listContent;
    list.appendChild(listItem);

    listItem.onclick = () => {
        const listContent = prompt('Enter new content for your list item');
        this.textContent(listContent);
    }
}