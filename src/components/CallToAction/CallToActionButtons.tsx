import React from 'react'
import { Phone, Calendar } from 'lucide-react'
import Button from '../UI/Button'

interface CallToActionButtonsProps {
  phoneNumber: string
  scheduleUrl: string
}

const CallToActionButtons: React.FC<CallToActionButtonsProps> = ({ phoneNumber, scheduleUrl }) => (
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <Button
      href={`tel:${phoneNumber}`}
      className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg flex items-center justify-center gap-2 text-lg font-semibold shadow-lg transition"
    >
      <Phone size={20} />
      Call Now
    </Button>
    <Button
      href={scheduleUrl}
      className="bg-white/10 hover:bg-gray-100 text-primary px-8 py-4 rounded-lg flex items-center justify-center gap-2 text-lg font-semibold shadow-lg transition border border-primary"
    >
      <Calendar size={20} />
      Schedule Appointment
    </Button>
  </div>
)

export default CallToActionButtons
