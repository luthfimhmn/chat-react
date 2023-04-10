const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = 3001;
app.use(express.json());
app.use(cors({ origin: true }));

const projectId = 'a99be2bc-df39-4b89-9e1c-d213398f4257'
const PrivateKey = '326e2b50-e9b7-4c3d-9c07-e140148c6677'

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put('https://api.chatengine.io/users/', {
        username,
        secret: username,
        first_name: username
    }, {headers: {"private-key": PrivateKey}})

    return res.status(r.status).json(r.data)
  } catch (error) {
    console.log(error)
    return res.status(error.response.status).json(error.response.data);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})