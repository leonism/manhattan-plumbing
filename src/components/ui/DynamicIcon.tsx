import React from 'react'
import * as Icons from 'lucide-react'
import { LucideProps } from 'lucide-react'

interface DynamicIconProps extends LucideProps {
  name: string
}

const DynamicIcon = ({ name, ...props }: DynamicIconProps) => {
  const IconComponent = (Icons as any)[name]

  if (!IconComponent) {
    // Fallback to a default icon if the name doesn't match
    return <Icons.HelpCircle {...props} />
  }

  return <IconComponent {...props} />
}

export default DynamicIcon
