import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Scan, BookOpen, Briefcase, Users } from 'lucide-react'
import './Navigation.css'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { path: '/', label: 'Scan', icon: Scan },
    { path: '/learn', label: 'Learn', icon: BookOpen },
    { path: '/services', label: 'Services', icon: Briefcase },
    { path: '/team', label: 'Our Team', icon: Users }
  ]

  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo">
          <div className="logo-icon">🦷</div>
          <span className="logo-text">Dental Care</span>
        </Link>

        <ul className="nav-links">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path
            
            return (
              <li key={item.path}>
                <Link 
                  to={item.path} 
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
