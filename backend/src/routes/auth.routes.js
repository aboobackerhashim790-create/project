import { Router } from 'express';

const router = Router();

// Demo only: hard-coded credentials for a quick test.
router.post('/login', (req, res) => {
  const { email, password } = req.body ?? {};

  if (email === 'test@example.com' && password === 'password123') {
    return res.json({ message: 'Login successful', user: { email } });
  }

  return res.status(401).json({ message: 'Invalid email or password' });
});

export default router;
