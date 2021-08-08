// todo: Desenvolver função para aumentar a temperatura da cor do texto de #count-el à medida que se clica no botão de increment
// todo: Desenvolver função que reinicia a temperatura da cor do texto todas as vezes que o botão de save for pressionado

let count = 0;

let countEl = document.getElementById("count-el");
/**                                            L--------> The DOM: Document Object Model (aka how you use JavaScript
 * JS, please store the text of the element with the id                                   to modify a website)
 */

function increment() {
  count += 1;
  countEl.textContent = count; // innerText struggles to get non-readable human text
  // JS, please update its text to the value of the variable count
}

let saveEl = document.getElementById("save-el");
function save() {
  let previousEntry = count + " - ";
  saveEl.textContent += previousEntry;
}

function resetCounter() {
  countEl.textContent = 0;
  count = 0;
}

function resetAll(){
  countEl.textContent = 0;
  count = 0;
  saveEl.textContent = "";
}
