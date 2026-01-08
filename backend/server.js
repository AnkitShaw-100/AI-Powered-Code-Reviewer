import dotenv from "dotenv";

// Load environment variables FIRST, before any other imports
dotenv.config();

import app from "./src/app.js";

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
