import express from 'express';
import cors from 'cors';
import topScorerRouter from './routes/topscorers.js';
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/topscorer', topScorerRouter);

app.listen(3001, () => console.log(`app listening on port ${PORT}`));

export default app;
