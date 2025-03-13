import db from '../models'

const bankController = {
    deposit: async (req, res) => {
        try {
            const { amount, mood } = req.body;
            const result = await db.query(
                'INSERT INTO transactions (amount, mood, type) VALUES ($1, $2, $3) RETURNING *',
                [amount, mood, 'deposit']
            );
            res.json(result.rows[0]);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    withdraw: async (req, res) => {
        try {
            const { amount } = req.body;
            const result = await db.query(
                'INSERT INTO transactions (amount, type) VALUES ($1, $2) RETURNING *',
                [amount, 'withdraw']
            );
            res.json(result.rows[0]);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

};

export default bankController;