
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const feedback = document.getElementById('feedback').value;
    document.getElementById('feedbackResult').textContent = 'Thank you for your feedback!';
    document.getElementById('feedback').value = '';
});
