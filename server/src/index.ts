import express from 'express';
import { CatalogRouter } from './features/catalog/catalog.router.js';
import { AuthRouter } from './features/auth/auth.router.js';
import { UserRouter } from './features/user/user.router.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/catalog', CatalogRouter);
app.use('/api/auth', AuthRouter);
app.use('/api/user', UserRouter);

app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
});