import { NextApiRequest, NextApiResponse } from 'next'
import connectToDatabase from '../../../../db'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {
      query: { slug }
    } = req

    const participant = req.body

    const db = await connectToDatabase(process.env.mongo_uri)
    const update = await db
      .collection('events')
      .findOneAndUpdate({ slug }, { $push: { participants: participant } })

    if (update.ok) {
      res.status(200).json(participant)
    } else {
      res.status(500)
    }
  } catch (e) {
    res.status(500)
  }
}
