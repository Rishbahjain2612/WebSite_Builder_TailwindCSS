// Get the Add buttons
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
                <i class="material-icons" data-parent=${storedValue}>remove</i>
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
        let maxNum = add.getAttribute("data-maxnum");

        // Check if the element has already been added
        if (maxNum === "0")
        {
            alert('Max number reached');
        } else
        {
            maxNum--; // Decrement the max number
            add.setAttribute("data-maxnum", maxNum); // Update the attribute

            let element =
                `<div
            class="p-2 border border-gray-400 border-alternatives-border text-sm font-semibold focus:outline-none flex justify-between" value="${edit}">
            <button class="focus:outline-none remove" onClick="removeEle(event)">
                <i class="material-icons" data-parent=${add.getAttribute("data-value")}>remove</i>
            </button>
            <div class="text-center w-full">
                ${add.getAttribute("data-value")}
            </div>
        </div>`;

            localStorage.setItem(edit, add.getAttribute("data-value"));
            count++;
            localStorage.setItem("count", count);

            document.getElementById("selected-order").innerHTML += element;
        }
    });
});

function removeEle(event) {
    const removeButton = event.target;
    console.log(removeButton);
    console.log(removeButton.getAttribute("data-parent"));
    const parentELE = document.getElementById(removeButton.getAttribute("data-parent"));
    console.log(parentELE);
    let maxnumParent = parentELE.getAttribute("data-maxnum");
    console.log(maxnumParent);
    maxnumParent++;
    parentELE.setAttribute("data-maxnum", maxnumParent);

    const parentElement = removeButton.parentElement.parentElement;
    const value = parentElement.getAttribute('value');

    // increment the max-count for the positioning element

    // Remove from localStorage
    localStorage.removeItem(value);

    // Remove from DOM
    parentElement.remove();

    // Decrement count
    count--;
    localStorage.setItem('count', count);
}
