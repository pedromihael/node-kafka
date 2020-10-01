import { Router } from 'express';

const routes = Router();

app.post('/certifications', async (req, res) => {
	// Chamar microserv
	return res.json({ ok: true });
});

export default routes;