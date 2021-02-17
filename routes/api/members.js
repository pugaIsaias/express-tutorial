const express = require("express");
const router = express.Router();
const members = require("../../Members");

//Gets all members
router.get("/", (req, res) => res.json(members));

//Get single member
router.get("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));

  found
    ? res.json(
        members.filter((member) => member.id === parseInt(req.params.id))
      )
    : res
        .status(400)
        .json({ msg: `No member with the id of ${req.params.id}` });
});

//Create member
router.post("/", (req, res) => {
  res.send(req.body);
});

module.exports = router;
