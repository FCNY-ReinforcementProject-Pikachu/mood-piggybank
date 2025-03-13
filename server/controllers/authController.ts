import db from '../models'

export const login = async (req: any, res: any) => {
    try {
        const { username, password } = req.body;
        const user = await db.query(
            'SELECT * FROM users WHERE email = $1',
            [username]
        );

        if (user.rows.length === 0) {
            return res.status(401).json({ error: 'User not found' });
        }

        const dbUser = user.rows[0];
        return res.json({ user: dbUser });
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};