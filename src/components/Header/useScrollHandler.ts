// Import React hooks: useState for state management, useEffect for side effects
import { useState, useEffect } from 'react'

// Define and export a custom hook named useScrollHandler
export default function useScrollHandler() {
  // Initialize state variable 'scrolled' with false as default value
  const [scrolled, setScrolled] = useState(false)

  // useEffect hook to handle side effects (scroll event listening)
  useEffect(() => {
    // Define scroll event handler function
    const handleScroll = () => {
      // Update state based on scroll position (true if scrolled > 10px)
      setScrolled(window.scrollY > 10)
    }

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll)

    // Cleanup function - removes event listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll)
  }, []) // Empty dependency array means this runs only on mount/unmount

  // Return the current scrolled state value
  return scrolled
}
