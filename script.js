const fileInput = document.getElementById("fileInput");
const preview = document.getElementById("preview");

fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function(e) {
        preview.src = e.target.result;
        preview.style.display = "block";
    };

    reader.readAsDataURL(file);
});

const addTechBtn = document.getElementById("addTechBtn");
const catalog = document.getElementById("catalog");

addTechBtn.addEventListener("click", () => {
    const techName = document.getElementById("techName").value;
    const techImageInput = document.getElementById("techImage");
    const file = techImageInput.files[0];

    if (!techName || !file) {
        alert("Введите название техники и выберите изображение.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const card = document.createElement("div");
        card.className = "catalog-card";

        const nameEl = document.createElement("h4");
        nameEl.textContent = techName;

        const imgEl = document.createElement("img");
        imgEl.src = e.target.result;

        card.appendChild(nameEl);
        card.appendChild(imgEl);

        catalog.appendChild(card);

        // очищаем форму
        document.getElementById("techName").value = "";
        techImageInput.value = "";
    };
    reader.readAsDataURL(file);
});
