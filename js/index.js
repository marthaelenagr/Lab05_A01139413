// Martha Elena García Ramos
// A01139413

// picks up value typed by user in text input to generate a <li> element to add it to the <ul> from index.html
function addItemBtn() {
    let cont = 0;
    let item = document.querySelector("input");
    let list = document.querySelector("ul");
    let addBtn = document.querySelector(".addItem");
    let results = document.querySelector(".results");
  
    //event listener for "add item" button
    addBtn.addEventListener("click", event => {
      event.preventDefault();
      //generate <li> element with name of item and "check" & "delete" buttons
      list.innerHTML += `<li id="${cont}"> 
          <p>
          ${item.value}
          </p>
          <button class="${cont} check">check</button>
          <button class="${cont} delete">delete</button>
      </li>`;
      cont++;
    });

    //event listener for "check" & "delete" button
    results.addEventListener("click", event => {
        if (event.target.matches(".delete")) {
            deleteElement(event.target.classList[0]);
        }
        if (event.target.matches(".check")) {
            let element = document.getElementById(event.target.classList[0]);
            checkElement(element);
        }
    });
  }

  //delete <li> element
  function deleteElement(elementId) {
    let element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
  }
  
  //check <li> element (cross the text with CSS format)
  function checkElement(element) {
    if(element.matches('.checked')){
      element.classList.remove("checked");
    } 
    else {
      element.classList.add("checked");
    }
  }

  function init() {
    addItemBtn();
  }
  
  init();