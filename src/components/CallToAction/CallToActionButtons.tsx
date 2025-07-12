import React from 'react'
import { Phone, Calendar } from 'lucide-react'
import Button from '../UI/Button'

interface CallToActionButtonsProps {
  phoneNumber: string
  scheduleUrl: string
}

const CallToActionButtons: React.FC<CallToActionButtonsProps> = ({ phoneNumber, scheduleUrl }) => (
  <div className="flex flex-col justify-center gap-4 sm:flex-row">
    <Button
      href={`tel:${phoneNumber}`}
      className="bg-primary hover:bg-primary-dark flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-lg font-semibold text-white shadow-lg transition"
    >
      <Phone size={20} />
      Call Now
    </Button>
    <Button
      href={scheduleUrl}
      className="text-primary border-primary flex items-center justify-center gap-2 rounded-lg border bg-white/10 px-8 py-4 text-lg font-semibold shadow-lg transition hover:bg-gray-100"
    >
      <Calendar size={20} />
      Schedule Appointment
    </Button>
  </div>
)

export default CallToActionButtons
