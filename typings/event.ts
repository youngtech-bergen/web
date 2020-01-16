export type Event = {
  _id: string
  slug: string
  name: string
  startDate: Date
  endDate: Date
  description: string
  speakers: Array<string>
}
