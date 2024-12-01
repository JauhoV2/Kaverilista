let countV1 = 0;
let kaverit = [];

function addFriendV1() {
    if (countV1 >= 10) {
        alert("Olet jo lisännyt 10 nimeä!");
        return;
    }

    let person = prompt("Nimi");
    if (person != null && person.trim() !== "") {
        countV1++;
        const kaverilista1 = document.getElementById("Kaverilista1");
        const listItem = document.createElement("li");
        listItem.textContent = `${countV1}. ${person}`;
        kaverilista1.appendChild(listItem);
    }
}

function addFriendV2() {
    const nameInput = document.getElementById("nameInput");
    const name = nameInput.value.trim();
    if (name === "") {
        alert("Anna nimi ennen lisäämistä.");
        return;
    }

    kaverit.push(name);
    nameInput.value = "";
    updateFriendList();
}

function sortList() {
    kaverit.sort();
    updateFriendList();
}

function updateFriendList() {
    const kaverilista2 = document.getElementById("Kaverilista2");
    kaverilista2.innerHTML = "";
    kaverit.forEach((kaveri, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${kaveri}`;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Poista";
        deleteButton.onclick = () => removeFriend(index);
        listItem.appendChild(deleteButton);
        kaverilista2.appendChild(listItem);
    });
}

function removeFriend(index) {
    kaverit.splice(index, 1);
    updateFriendList();
}
