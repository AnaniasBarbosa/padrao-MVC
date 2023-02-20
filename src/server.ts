import { app } from "./app";

const port = process.env.PORT || "3000"
const server = app


server.listen(port, () => console.log(`SERVIDOR EM EXECUÇÃO NA PORTA: ${port}`))