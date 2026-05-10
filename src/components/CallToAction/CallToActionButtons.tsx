import React from 'react'
import { Phone, Calendar } from 'lucide-react'
import Button from '@/components/ui/Button'

interface CallToActionButtonsProps {
  phoneNumber: string
  scheduleUrl: string
}

const CallToActionButtons: React.FC<CallToActionButtonsProps> = ({ phoneNumber, scheduleUrl }) => (
  <div className="flex flex-col justify-center gap-4 sm:flex-row">
    <Button
      href={`tel:${phoneNumber}`}
      className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-blue-700"
    >
      <Phone size={20} />
      Call Now
    </Button>
    <Button
      href={scheduleUrl}
      className="flex items-center justify-center gap-2 rounded-lg border border-white bg-white/10 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-white/20"
    >
      <Calendar size={20} />
      Schedule Appointment
    </Button>
  </div>
)

export default CallToActionButtons
