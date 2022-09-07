import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());


app.listen(3001, () => console.log(`app listening on port ${PORT}`));
