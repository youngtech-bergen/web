import { NextApiRequest, NextApiResponse } from 'next'
import connectToDatabase from '../../db'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = await connectToDatabase(process.env.mongo_uri)

    const events = await db
      .collection('events')
      .find({})
      .toArray()

    res.status(200).json(events)
  } catch (e) {
    res.status(500)
  }
}
