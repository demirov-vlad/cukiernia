import { useLocation, useNavigate } from 'react-router-dom'

const ScrollLink = ({
  to,
  children,
}: {
  to: string
  children: React.ReactNode
}) => {
  const location = useLocation()
  const navigate = useNavigate()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const targetId = to.replace('#', '') // Remove '#' from the id
    const isOnMainPage = location.pathname === '/'

    if (isOnMainPage) {
      // If on the main page, scroll directly
      const section = document.getElementById(targetId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // If on another page, navigate first, then scroll
      navigate('/')
      setTimeout(() => {
        const section = document.getElementById(targetId)
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' })
        }
      }, 300) // Delay to allow navigation to complete
    }
  }

  return (
    <a
      href={to}
      onClick={handleClick}
      className='font-medium text-[#2C2C2C] hover:text-[#C4A484]'
    >
      {children}
    </a>
  )
}

export default ScrollLink
