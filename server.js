
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/data', (req, res) => {

    if (req.body.event == "send_cookie") {
        console.log(req.body.cookie);
        res.json({status: ok})
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
