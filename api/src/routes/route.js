const express = require("express")
const router = express.Router()
const clientMocks = require("../../clients.mock")

router.get("/", (req, res) => {
  try {
    const data = clientMocks.map((client) => {
      return {
        name: client.name,
        _id: client._id,
        image_src: client.image_src,
        enterprises: client.enterprises.length,
        realties: client.enterprises.reduce(
          (acumulador, enterprise) =>
            acumulador + parseInt(enterprise.realties, 10),
          0
        ),
      }
    })
    res.status(200).json({data})
  } catch (error) {
    return res.status(500).json({ error: "Erro interno ao buscar dados" })
  }
})

router.get("/:id", (req, res) => {
  const clientId = req.params.id
  const client = clientMocks.find((c) => c._id === clientId)

  if (client) {
    res.status(200).json(client)
  } else {
    res.status(404).json({ message: "Cliente não encontrado" })
  }
})

module.exports = router

/* realties: client.enterprises.reduce((acumulador, client) => acumulador += client.realties, 0)
*/

/* realties: client.enterprises.reduce((acumulador, enterprise) => acumulador + parseInt(enterprise.realties, 10), 0)
 */