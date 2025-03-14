import db from '../models';
import bcrypt from 'bcrypt';

const authController = { 
    
    signup:  async (req: any, res: any) => {
    try {
        const { username, password } = req.body;

        // Check if the user already exists
        const existingUser = await db.query(
            'SELECT * FROM users WHERE username = $1',
            [username]
        );

        if (existingUser.rows.length > 0) {
            return res.status(400).json({ error: 'Username already taken' });
        }

        // Hash the password before saving
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Insert new user into the database
        const newUser = await db.query(
            'INSERT INTO users (username, password_hash) VALUES ($1, $2) RETURNING id, username',
            [username, hashedPassword]
        );

        return res.status(201).json({ message: 'User created successfully', user: newUser.rows[0] });
    } catch (error) {
        console.error('Signup error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
},

login:  async (req: any, res: any) => {
    try {
        console.log('im here')
        const { username, password } = req.body;
        console.log('user: ', username)
        const user = await db.query(
            'SELECT * FROM users WHERE username = $1',
            [username]
        );

        if (user.rows.length === 0) {
            return res.status(401).json({ error: 'User not found' });
        }

        const dbUser = user.rows[0];

        // Verify password using bcrypt
        const isMatch = await bcrypt.compare(password, dbUser.password_hash);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        return res.json({ message: 'Login successful', user: { id: dbUser.id, username: dbUser.username } });
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

}


export default authController;