// Ambil elemen display
const display = document.querySelector('input[name="display"]');

// Fungsi untuk memperbarui display
function updateDisplay(value) {
    display.value += value;
}

// Fungsi untuk menghapus display
function clearDisplay() {
    display.value = '';
}

// Fungsi untuk menghapus karakter terakhir
function deleteLastCharacter() {
    display.value = display.value.toString().slice(0, -1);
}

// Fungsi untuk menghitung hasil
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// Menambahkan event listener pada setiap tombol
document.querySelectorAll('input[type="button"]').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        switch (value) {
            case 'AC':
                clearDisplay();
                break;
            case 'DE':
                deleteLastCharacter();
                break;
            case '=':
                calculateResult();
                break;
            case '.':
            case '/':
            case '*':
            case '-':
            case '+':
            case '00':
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                updateDisplay(value);
                break;
        }
    });
});
