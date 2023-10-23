const addElements = document.querySelectorAll('.add');
let count = parseInt(localStorage.getItem('count')) || 0;

// Retrieving elements from localStorage
for (let i = 0; i < count; i++)
{
    let elID = "el_ordered" + i;
    let storedValue = localStorage.getItem(elID);
    if (storedValue)
    {
        let element =
            `<div
            class="p-2 border border-gray-400 border-alternatives-border text-sm font-semibold focus:outline-none flex justify-between" value="${elID}">
            <button class="focus:outline-none remove" onClick="removeEle(event)">
                <i class="material-icons">remove</i>
            </button>
            <div class="text-center w-full">
                ${storedValue}
            </div>
    </div>`;

        document.getElementById("selected-order").innerHTML += element;
    }
}

// Adding elements to Local Storage and on the Selected List
addElements.forEach(add => {
    add.addEventListener('click', () => {
        let edit = "el_ordered" + count;
        let element =
            `<div
        class="p-2 border border-gray-400 border-alternatives-border text-sm font-semibold focus:outline-none flex justify-between" value="${edit}">
        <button class="focus:outline-none remove" onClick="removeEle(event)">
            <i class="material-icons">remove</i>
        </button>
        <div class="text-center w-full">
            ${add.value}
        </div>
    </div>`

        localStorage.setItem(edit, add.value);
        localStorage.setItem("count", count);
        count++;

        document.getElementById("selected-order").innerHTML += element;
    })
});

function removeEle(event) {
    let removeButton = event.target;
    let parentElement = removeButton.parentNode.parentNode;

    // Remove from localStorage
    let value = parentElement.getAttribute('value');
    localStorage.removeItem(value);

    // Remove from DOM
    parentElement.parentNode.removeChild(parentElement);

    // Decrement count
    count--;
    localStorage.setItem("count", count);
}