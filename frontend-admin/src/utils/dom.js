export const ui = {
  openModal: (modalId) => {
    document.getElementById(modalId).classList.add('show');
  },

  closeModal: () => {
    document.querySelector('.show').classList.remove('show');
  },

  showFlashMessage: ({ type, message }) => {
    const flashContainer = document.querySelector('.flashMessage');
    if (!flashContainer) return;

    flashContainer.innerHTML = message;
    flashContainer.classList.add('show', type);

    setTimeout(() => {
      flashContainer.classList.remove('show', type);
      flashContainer.innerHTML = '';
    }, 3000);
  },

  hideCustomMenu: () => {
    const contextMenu = document.querySelector('#contextMenu');
    contextMenu.classList.remove('show');
  },

  showCustomMenu: (x, y, onDelete) => {
    const contextMenu = document.querySelector('#contextMenu');
    const deleteButton = document.querySelector('#deleteLessonMenuItem');
    const menuWidth = 128;
    const menuHeight = 40;
    const menuLeft = Math.min(x + 6, window.innerWidth - menuWidth - 8);
    const menuTop = Math.min(y + 6, window.innerHeight - menuHeight - 8);

    if (contextMenu.classList.contains('show')) {
      contextMenu.classList.remove('show');
    }

    contextMenu.style.cssText = `
      position: fixed;
      top: ${menuTop}px;
      left: ${menuLeft}px;
      min-width: ${menuWidth}px;
      padding: 4px;
      background: white;
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      box-shadow: 0 10px 24px rgb(15 23 42 / 16%);
      z-index: 1000;
      box-sizing: border-box;
    `;

    deleteButton.style.cssText = `
      width: 100%;
      margin: 0;
      padding: 0.45rem 0.65rem;
      border: 0;
      border-radius: 4px;
      background: white;
      color: #b91c1c;
      font: inherit;
      font-size: 0.875rem;
      line-height: 1.2;
      text-align: left;
      cursor: pointer;
    `;

    deleteButton.onclick = onDelete;
    contextMenu.classList.add('show');

    const closeMenu = (e) => {
      if (!contextMenu.contains(e.target)) {
        ui.hideCustomMenu();
        document.removeEventListener('click', closeMenu);
      }
    };

    document.addEventListener('click', closeMenu);
  },
};
