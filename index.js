document.addEventListener("DOMContentLoaded", function () {
    const namaForm = document.getElementById("biodata");
    const namaInput = document.getElementById("name");
    const genderInput = document.getElementById('gender')

    namaForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const nama = namaInput.value;
        if (namaInput){
            localStorage.setItem("nama", nama);
            window.location.href = "colorpicker/colorpicker.html";
        }
        const gender = genderInput.value
        if (genderInput){
            localStorage.setItem('gender', gender)
            window.location.href = "colorpicker/colorpicker.html"
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const namaDisplay = document.getElementById("namaDisplay");
    const nama = localStorage.getItem("nama");
    const genderDisplay = document.getElementById('genderDisplay')
    const gender = localStorage.getItem('gender')

    if (nama) {
        namaDisplay.innerHTML = nama;
    }

    if (gender){
        genderDisplay.innerHTML = gender;
    }
});
