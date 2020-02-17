import { NextApiRequest, NextApiResponse } from 'next'
import connectToDatabase from '../../db'
import { IEvent } from '../../typings/event'

export default async (req: NextApiRequest, res: NextApiResponse<IEvent[]>) => {
  try {
    const uri =
      process.env.NODE_ENV === 'production'
        ? process.env.mongo_uri_prod
        : process.env.mongo_uri_dev

    const db = await connectToDatabase(uri)

    const events = await db
      .collection('events')
      .find({})
      .toArray()

    res.status(200).json(events)
  } catch (e) {
    res.status(500).send(null)
  }
}
