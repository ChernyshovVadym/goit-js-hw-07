const input = document.querySelector(`#name-input`)
const span = document.querySelector(`#name-output`)
input.addEventListener('input', () => {
    const inputValue = input.value.trim();
    if (
        inputValue === ''
    ) {
        span.textContent = 'Anonymous'
        return
    }
    span.textContent = inputValue;
})
