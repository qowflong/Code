
const expressionElement = document.getElementById('expression');
const resultElement = document.getElementById('result');

let currentExpression = '';
function appendCharacter(char) {
    // Nếu đang là số '0' ban đầu thì thay thế luôn
    if (currentExpression === '0' && !isNaN(char)) {
        currentExpression = char;
    } else {
        currentExpression += char;
    }
    expressionElement.innerText = currentExpression;
}
function clearAll() {
    currentExpression = '';
    expressionElement.innerText = '';
    resultElement.innerText = '0';
}
function calculateResult() {
    if (!currentExpression) return;
    try {
        let formattedExpression = currentExpression
            .replaceAll('÷', '/')
            .replaceAll('×', '*')
            .replaceAll('%', '/100');

        let calcResult = eval(formattedExpression);

        resultElement.innerText = calcResult;
    } catch (error) {
        resultElement.innerText = 'Lỗi!';
    }
}