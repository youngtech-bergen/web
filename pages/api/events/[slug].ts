import { NextApiRequest, NextApiResponse } from 'next'
import connectToDatabase from '../../../db'
import { IEvent } from '../../../typings/event'

export default async (req: NextApiRequest, res: NextApiResponse<IEvent>) => {
  try {
    const {
      query: { slug }
    } = req

    const uri =
      process.env.NODE_ENV === 'production'
        ? process.env.mongo_uri_prod
        : process.env.mongo_uri_dev

    const db = await connectToDatabase(uri)
    const event = await db.collection('events').findOne({ slug })

    res.status(200).json(event)
  } catch (e) {
    return res.status(500).send(null)
  }
}
