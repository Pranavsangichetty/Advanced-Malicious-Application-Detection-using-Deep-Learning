
let scannedFiles = 0;
let detectedThreats = 0;

document.getElementById('fileScanForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fileInput = document.getElementById('fileInput');
    if (fileInput.files.length > 0) {
        scannedFiles++;
        const isThreat = Math.random() < 0.2;
        document.getElementById('scanResult').textContent = isThreat ? 'Threat detected!' : 'File is clean.';
        if (isThreat) detectedThreats++;
    } else {
        document.getElementById('scanResult').textContent = 'Please select a file to scan.';
    }
});
