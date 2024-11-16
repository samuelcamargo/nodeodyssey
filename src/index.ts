import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
 res.send("Hello, Express with TypeScript!");
});

app.listen(PORT, () => {
 console.log(`Server running at http://localhost:${PORT}`);
});
