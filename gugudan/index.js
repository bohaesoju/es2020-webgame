const resultText = document.querySelector('#result');

document.querySelector('#click').addEventListener('click', () => {
    const firstValue = document.querySelector('#first').value
    const secondValue = document.querySelector('#second').value
    if(firstValue){
        if(secondValue){
            const multipleResult = firstValue * secondValue
            resultText.textContent = multipleResult
        } else {
            resultText.textContent = '두 번째 값을 입력하세요'
        }
    } else {
        resultText.textContent = '첫 번째 값을 입력하세요'
    }
})

