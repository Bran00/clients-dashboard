const express = require("express")
const router = express.Router()
const clientMocks = require("../../clients.mock")

router.get("/clients", (req, res) => {
  res.json(clientMocks)
})

router.get("/clients/:id", (req, res) => {
  const clientId = req.params.id
  const client = clientMocks.find((c) => c._id === clientId)

  if (client) {
    res.json(client)
  } else {
    res.status(404).json({ message: "Cliente não encontrado" })
  }
})

module.exports = router
