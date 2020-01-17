//import { ILocation } from '.'

export interface ILocation {
  address: string
  longitude: number
  latitude: number
}

export interface IEvent {
  _id: string
  slug: string
  name: string
  startDate: Date
  endDate: Date
  description: string
  speakers: string[]
  location: ILocation
  ical: string
}
