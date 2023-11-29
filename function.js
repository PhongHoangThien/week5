const guitarList = [];

document.getElementById("addGuitarButton").addEventListener("click", () => {
    const guitarName = document.getElementById("guitarName").value;
    const guitarID = document.getElementById("guitarID").value;

    const existingGuitar = guitarList.find(guitar => guitar.id === guitarID);

    if (existingGuitar) {
        alert("Mã sản phẩm đã tồn tại.");
    } else {
        if (guitarName && guitarID) {
            guitarList.push({ id: guitarID, name: guitarName });
            updateGuitarList();
        } else {
            alert("Hãy điền đầy đủ thông tin sản phẩm.");
        }
    }

    
});

document.getElementById("addGuitarButton2").addEventListener("click", () => {
    const guitarName = document.getElementById("guitarName").innerHTML;
    const guitarID = document.getElementById("guitarID").innerHTML;

    const existingGuitar = guitarList.find(guitar => guitar.id === guitarID);

    if (existingGuitar) {
        alert("Mã sản phẩm đã tồn tại.");
    } else {
        if (guitarName && guitarID) {
            guitarList.push({ id: guitarID, name: guitarName });
            updateGuitarList();
        } else {
            alert("Hãy điền đầy đủ thông tin sản phẩm.");
        }
    }

    
});

document.getElementById("editGuitarButton").addEventListener("click", () => {
    const guitarID = document.getElementById("editGuitarID").value;
    const newGuitarName = document.getElementById("newGuitarName").value;

    const guitarToUpdate = guitarList.find(guitar => guitar.id === guitarID);

    if (guitarToUpdate) {
        guitarToUpdate.name = newGuitarName;
        updateGuitarList();
    } else {
        alert("Không tìm thấy sản phẩm này.");
    }
});

document.getElementById("deleteGuitarButton").addEventListener("click", () => {
    const guitarID = document.getElementById("deleteGuitarID").value;

    const guitarIndexToDelete = guitarList.findIndex(guitar => guitar.id === guitarID);

    if (guitarIndexToDelete !== -1) {
        guitarList.splice(guitarIndexToDelete, 1);
        updateGuitarList();
    } else {
        alert("Không tìm thấy sản phẩm.");
    }
});

document.getElementById("searchGuitarButton").addEventListener("click", () => {
    const searchID = document.getElementById("searchGuitar").value;

    const foundGuitar = guitarList.find(guitar => guitar.id === searchID);

    if (foundGuitar) {
        alert(`Tên hãng: ${foundGuitar.name}`);
    } else {
        alert("Không tìm thấy sản phẩm này.");
    }
});

function updateGuitarList() {
    const guitarUl = document.getElementById("guitarUl");
    guitarUl.innerHTML = "";

    guitarList.forEach(guitar => {
        const listItem = document.createElement("li");
        listItem.textContent = `Tên hãng: ${guitar.name}, Mã Guitar: ${guitar.id}`;
        guitarUl.appendChild(listItem);
    });
}