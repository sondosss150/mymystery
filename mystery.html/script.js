function checkCode() {
    const input = document.getElementById('codeInput').value;
    const feedback = document.getElementById('feedback');
    
    if(input === 'S3E6') {  // Replace 'your-code-here' with the actual code
        window.location.href = 'nextpage.html';  // Replace 'nextpage.html' with your next page
    } else {
        feedback.textContent = 'Incorrect code. Try again!';
        feedback.style.color = 'red';
    }
}
