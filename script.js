document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData();
    formData.append('file', document.getElementById('image-input').files[0]);
    
    fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerHTML = `<h3>Kết quả Dự đoán: ${data.result}</h3>`;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').innerHTML = `<h3>Có lỗi xảy ra khi dự đoán. Vui lòng thử lại.</h3>`;
    });
});
