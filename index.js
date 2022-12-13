const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const app = require("./app");
const port = process.env.PORT || 8000;
dotenv.config();
mongoose.connect(
  process.env.DATABASE_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connected to DB");
  }
);
app.use(cors());
app.listen(port, () => console.log(`sever up at ${port}`));
