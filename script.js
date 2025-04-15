function calculateHash() {
    const fileInput = document.getElementById("fileInput").files[0];
    if (!fileInput) {
        alert("Please select a file first.");
        return;
    }
    const reader = new FileReader();
    reader.onload = function(event) {
        const hash = CryptoJS.SHA256(event.target.result).toString();
        document.getElementById("hashOutput").value = hash;
    };
    reader.readAsBinaryString(fileInput);
}

function compareHash() {
    const generatedHash = document.getElementById("hashOutput").value;
    const inputHash = document.getElementById("hashCompare").value;
    if (!generatedHash || !inputHash) {
        alert("Please generate and enter a hash first.");
        return;
    }
    document.getElementById("status").innerText = generatedHash === inputHash ? "✅ Hashes Match!" : "❌ Hashes Do Not Match!";
}
