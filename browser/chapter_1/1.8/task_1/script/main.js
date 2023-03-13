"use strict"

/* Напишите функцию showNotification(options), которая создаёт уведомление: <div class="notification"> с заданным содержимым. Уведомление должно автоматически исчезнуть через 1,5 секунды. */

function showNotification({top = 0, right = 0, className, html}) {
    let div = document.createElement('div');
    div.classList.add('notification');
    div.classList.add(className);
    div.textContent = html;
    div.style.top = top + 'px';
    div.style.right = right + 'px';

    document.body.prepend(div);

    setTimeout(() => div.remove(), 1500);
  }

  // test it
  let i = 1;
  setInterval(() => {
    showNotification({
      top: 10,
      right: 10,
      html: 'Hello ' + i++,
      className: "welcome"
    });
  }, 2000);
  