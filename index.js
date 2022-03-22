const express = require("express")
const app = express()

const PORT = 2000

app.use(express.json())

const employee = [
    {
        full_name: "Luna Stroman",
        gender: "Female",
        occupation: "Metrics",
        id: 1
      },
      {
        full_name: "Gussie Orn",
        gender: "Female",
        occupation: "Marketing",
        id: 2
      },
      {
        full_name: "Evans Crooks",
        gender: "Male",
        occupation: "Markets",
        id: 3
      },
      {
        full_name: "Breanna Mayer",
        gender: "Male",
        occupation: "Infrastructure",
        id: 4
      },
      {
        full_name: "Alexys Metz",
        gender: "Male",
        occupation: "Security",
        id: 5
      },
]

app.get("/employee", (req, res) => {
    if (employee.length) {
        res.status(200).json({
            message: "Employee fetched success!",
            result: employee
        })
    } else {
      res.status(404).send("No users found!")
    }
})



app.listen(PORT, () => {
    console.log("Server running in port", PORT)
})