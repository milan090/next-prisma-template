import { handler } from "src/server/api-handler";

export default handler().get((req, res) => {
  return res.send("Hello world")
})