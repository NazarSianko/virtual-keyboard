const Layout = [
  [['Backquote', 'ё', 'Ё', '`', '~'],
    ['Digit1', '1', '!', '1', '!'],
    ['Digit2', '2', '\'', '2', '@'],
    ['Digit3', '3', '№', '3', '#'],
    ['Digit4', '4', ';', '4', '$'],
    ['Digit5', '5', '%', '5', '%'],
    ['Digit6', '6', ':', '6', '^'],
    ['Digit7', '7', '?', '7', '&'],
    ['Digit8', '8', '*', '8', '*'],
    ['Digit9', '9', '(', '9', '('],
    ['Digit0', '0', ')', '0', ')'],
    ['Minus', '-', '_', '-', '_'],
    ['Equal', '=', '+', '=', '+'],
    ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace'],
  ],
  [
    ['Tab', 'Tab', 'Tab', 'Tab', 'Tab'],
    ['KeyQ', 'й', 'Й', 'q', 'Q'],
    ['KeyW', 'ц', 'Ц', 'w', 'W'],
    ['KeyE', 'у', 'У', 'e', 'E'],
    ['KeyR', 'к', 'К', 'r', 'R'],
    ['KeyT', 'е', 'Е', 't', 'T'],
    ['KeyY', 'н', 'Н', 'y', 'Y'],
    ['KeyU', 'г', 'Г', 'u', 'U'],
    ['KeyI', 'ш', 'Ш', 'i', 'I'],
    ['KeyO', 'щ', 'Щ', 'o', 'O'],
    ['KeyP', 'з', 'З', 'p', 'P'],
    ['BracketLeft', 'х', 'Х', '[', '{'],
    ['BracketRight', 'ъ', 'Ъ', ']', '}'],
    ['Backslash', '\\', '/', '\\', '|'],
    ['Delete', 'Del', 'Del', 'Del', 'Del'],
  ],
  [
    ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],
    ['KeyA', 'ф', 'Ф', 'a', 'A'],
    ['KeyS', 'ы', 'Ы', 's', 'S'],
    ['KeyD', 'в', 'В', 'd', 'D'],
    ['KeyF', 'а', 'А', 'f', 'F'],
    ['KeyG', 'п', 'П', 'g', 'G'],
    ['KeyH', 'р', 'Р', 'h', 'H'],
    ['KeyJ', 'о', 'О', 'j', 'J'],
    ['KeyK', 'л', 'Л', 'k', 'K'],
    ['KeyL', 'д', 'Д', 'l', 'L'],
    ['Semicolon', 'ж', 'Ж', ';', ':'],
    ['Quote', 'э', 'Э', '\'', '\''],
    ['Enter', 'Enter', 'Enter', 'Enter', 'Enter'],
  ],
  [
    ['ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'],
    ['KeyZ', 'я', 'Я', 'z', 'Z'],
    ['KeyX', 'ч', 'Ч', 'x', 'X'],
    ['KeyC', 'с', 'С', 'c', 'C'],
    ['KeyV', 'м', 'М', 'v', 'V'],
    ['KeyB', 'и', 'И', 'b', 'B'],
    ['KeyN', 'т', 'Т', 'n', 'N'],
    ['KeyM', 'ь', 'Ь', 'm', 'M'],
    ['Comma', 'б', 'Б', '.', '<'],
    ['Period', 'ю', 'Ю', ',', '>'],
    ['Slash', '.', ',', '/', '?'],
    ['ArrowUp', '▲', '▲', '▲', '▲'],
    ['ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift'],
  ],
  [
    ['ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
    ['MetaLeft', 'Win', 'Win', 'Win', 'Win'],
    ['AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'],
    ['Space', ' ', ' ', ' ', ' '],
    ['AltRight', 'Alt', 'Alt', 'Alt', 'Alt'],
    ['ArrowLeft', '◄', '◄', '◄', '◄'],
    ['ArrowDown', '▼', '▼', '▼', '▼'],
    ['ArrowRight', '►', '►', '►', '►'],
    ['ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
  ],
];
let lang = 'eng';
let caps = false;
const container = document.createElement('div');
const textArea = document.createElement('textarea');
const keyboard = document.createElement('div');
textArea.classList.add('textArea');
keyboard.classList.add('keyboard');
container.classList.add('container');


container.append(textArea);
container.append(keyboard);
document.body.append(container);
for (let i = 0; i < Layout.length; i++) {
  const row = document.createElement('div');
  row.classList.add('row');
  for (let j = 0; j < Layout[i].length; j += 1) {
    const key = document.createElement('div');
    key.classList.add('key');
    key.classList.add(Layout[i][j][0]);

    key.insertAdjacentHTML(
      'afterBegin',
      `<div class='rus hidden'>
            <span class='caseDown hidden '>${Layout[i][j][1]}</span>
            <span class='caseUp hidden'>${Layout[i][j][2]}</span>
          </div>
          <div class='eng '>
            <span class='caseDown '>${Layout[i][j][3]}</span>
            <span class='caseUp hidden'>${Layout[i][j][4]}</span>
          </div>`,
    );
    row.appendChild(key);
  }
  keyboard.appendChild(row);
}

function active(elem) {
  elem.classList.add('active');
}
function removeActive(elem) {
  elem.classList.remove('active');
}




function upperCase() {
  const keyboardKeys = keyboard.querySelectorAll(`div > .${lang}`);
  for (let i = 0; i < keyboardKeys.length; i++) {
    keyboardKeys[i].querySelectorAll('span')[0].classList.toggle('hidden');
    keyboardKeys[i].querySelectorAll('span')[1].classList.toggle('hidden');
  }
};
 function switchLanguage()  {
  const firstLang = keyboard.querySelectorAll(`div > .${lang}`);

  for (let i = 0; i < firstLang.length; i++) {
    firstLang[i].classList.toggle('hidden');
    firstLang[i].querySelectorAll('span')[0].classList.toggle('hidden');
  }
  if (lang === 'rus') {
    lang = 'eng';
    localStorage.setItem('lang', lang);
  } else {
    lang = 'rus';
    localStorage.setItem('lang', lang);
  }
  const secondLang = keyboard.querySelectorAll(`div > .${lang}`);
  for (let i = 0; i < secondLang.length; i += 1) {
    secondLang[i].classList.toggle('hidden');
    secondLang[i].querySelectorAll('span')[0].classList.toggle('hidden');
  }
};


