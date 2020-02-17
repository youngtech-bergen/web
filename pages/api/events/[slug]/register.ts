import { NextApiRequest, NextApiResponse } from 'next'
import connectToDatabase from '../../../../db'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {
      query: { slug }
    } = req

    const participant = req.body

    const uri =
      process.env.NODE_ENV === 'production'
        ? process.env.mongo_uri_prod
        : process.env.mongo_uri_dev

    const db = await connectToDatabase(uri)
    const update = await db
      .collection('events')
      .findOneAndUpdate({ slug }, { $push: { participants: participant } })

    if (update.ok) {
      res.status(200).json(participant)
    } else {
      res.status(500)
    }
  } catch (e) {
    res.status(500).send(null)
  }
}
