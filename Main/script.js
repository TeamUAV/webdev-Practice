const btn = document.querySelector('#send');
const msgDisplay = document.querySelector('.msg-display');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    const msgBox = document.querySelector('#msgbox');
    const text = msgBox.value;
    msgBox.value = "";
    const msgBubble = document.createElement('div');
    msgBubble.classList.add('msg-bubble');
    const content = document.createElement('div');
    content.classList.add('content');
    content.innerHTML = text;
    const nameTag = document.createElement('div');
    nameTag.classList.add('name-tag');
    nameTag.innerHTML = "Team UAV";
    msgBubble.appendChild(content);
    msgBubble.appendChild(nameTag);
    msgDisplay.appendChild(msgBubble);
});
