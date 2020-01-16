import { NextApiRequest, NextApiResponse } from 'next'
import connectToDatabase from '../../../db'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {
      query: { slug }
    } = req

    const db = await connectToDatabase(process.env.mongo_uri)
    const event = await db.collection('events').findOne({ slug })

    res.status(200).json(event)
  } catch (e) {
    res.status(500)
  }
}
