const express = require("express");
const path = require("path");
const logger = require("./middleware/Logger");
const members = require("./Members");

const app = express();

//Init middleware
//app.use(logger);

//Gets all members
app.get("/api/members", (req, res) => res.json(members));

//Get single member
app.get("/api/members/:id", (req, res) => {
  res.json(members.filter((member) => member.id === parseInt(req.params.id)));
});

//Set static folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
