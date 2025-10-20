
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/data', (req, res) => {

    console.log(req.body)

  if (req.body.event == "send_cookie_request") {
    console.log(req.body.cookie)
  }

});

app.listen(port, () => console.log(`Server running on ${port}`));