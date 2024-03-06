import { getEventById } from '@/lib/actions/events.action'
import { SearchParamProps } from '@/types'

const EventDetails = async ({ params: { id }}: SearchParamProps) => {

    const event = await getEventById(id)

  return (
    <div>EventDetails</div>
  )
}

export default EventDetails