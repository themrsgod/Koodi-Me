const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

// Chat Engine Project ID and Project Key
const CHAT_ENGINE_PROJECT_ID = "d07ca29e-cce6-4d73-a5db-313a88b2c0f0";
const CHAT_ENGINE_PRIVATE_KEY = "65856793-0664-4bc9-a7ed-de47944c5bac";


//sends request to the signup page in the frontend.
app.post("/signup", async (req, res) => {
  const { username} = req.body;

  // Store a user-copy on Chat Engine!
  // Note: the private Key and The Secret Key are generated from the chat engine servers.
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "Private-Key": "65856793-0664-4bc9-a7ed-de47944c5bac" } }
    )
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

// app.post("/login", async (req, res) => {
//   const { username, secret } = req.body;

//   // Fetch this user from Chat Engine in this project!
//   // Docs at rest.chatengine.io
//   try {
//     const r = await axios.get("https://api.chatengine.io/users/me/", {
//       headers: {
//         "Project-ID": CHAT_ENGINE_PROJECT_ID,
//         "User-Name": username,
//         "User-Secret": secret,
//       },
//     });
//     return res.status(r.status).json(r.data);
//   } catch (e) {
//     return res.status(e.response.status).json(e.response.data);
//   }
// });

app.listen(3001);

// vvv On port 3001!      

/
// const app = express();
// app.use(express.json());
// app.use(cors({ origin: true }));

// const CHAT_ENGINE_PROJECT_ID = "d07ca29e-cce6-4d73-a5db-313a88b2c0f0";
// const CHAT_ENGINE_PRIVATE_KEY = "65856793-0664-4bc9-a7ed-de47944c5bac";

// app.post("/authenticate", async (req, res) => {
//   const { username } = req.body;
//   try {
//         const r = await axios.put(
//           "https://api.chatengine.io/users/",
//           { username:username, secret:username, first_name:username},
//           { headers: { "Private-Key": "65856793-0664-4bc9-a7ed-de47944c5bac" } }
//         );
//         return res.status(r.status).json(r.data);
//       } catch (e) {
//         return res.status(e.response.status).json(e.response.data);
//       }
//     });


