import { NextApiRequest, NextApiResponse } from 'next';
import { User } from './models';
import mongoose from 'mongoose';
import { DBConn } from './utils';

// export const createUser = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
//     if (req.method !== 'POST') {
//         return res.status(405).json({ message: 'Method Not Allowed' });
//     }

//     try {
//         DBConn()
//         const user = await User.create(req.body);
//         res.status(201).json(user);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };


