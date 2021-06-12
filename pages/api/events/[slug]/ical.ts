import { NextApiRequest, NextApiResponse } from 'next'
import { IEvent } from '@typings/event'
import 'isomorphic-unfetch'
import connectToDatabase from '../../../../db'
import ical from 'ical-generator'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {
      query: { slug },
    } = req

    const uri =
      process.env.NODE_ENV === 'production'
        ? process.env.mongo_uri_prod
        : process.env.mongo_uri_dev

    const db = await connectToDatabase(uri)

    const event: IEvent = await db.collection('events').findOne({ slug })

    const cal = ical({
      timezone: 'Europe/Berlin',
    })

    // Create the iCal event
    cal.createEvent({
      id: event._id,
      start: new Date(event.startDate),
      end: new Date(event.endDate),
      summary: event.name,
      description: event.description,
      location: {
        title: event.location.address,
        geo:
          event.location.latitude && event.location.longitude
            ? {
                lat: event.location.latitude,
                lon: event.location.longitude,
              }
            : undefined,
      },
      url: `https://youngte.ch/events/${event.slug}`,

      organizer: {
        name: 'YoungTech Bergen',
        email: 'hello@youngte.ch',
      },
    })

    res.setHeader('Content-type', 'text/calendar; charset=utf-8')
    res.setHeader('Content-Disposition', 'inline; filename=event.ics')

    res.status(200).send(cal.toString())
  } catch (e) {
    res.status(500)
  }
}
