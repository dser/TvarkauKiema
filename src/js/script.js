document.getElementById('uploadForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const input = document.getElementById('cameraInput');
    const status = document.getElementById('status');

    if (!input.files.length) {
        status.textContent = 'No file selected.';
        return;
    }

    const file = input.files[0];
    const formData = new FormData();
    formData.append('image', file);

    try {
        // Replace 'https://your-server-endpoint/upload' with your server's URL
        const response = await fetch('https://your-server-endpoint/upload', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            status.textContent = 'Upload successful!';
        } else {
            status.textContent = `Upload failed: ${response.statusText}`;
        }
    } catch (error) {
        status.textContent = `Error: ${error.message}`;
    }
});
