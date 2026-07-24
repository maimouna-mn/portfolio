import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      let current = 'home'
      document.querySelectorAll('section[id]').forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - 120) current = sec.id
      })
      setActive(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="site">
      <nav className="nav">
        <div className="logo">
          Maimouna<span className="dot">.</span>
        </div>
        <ul
          className="nav-links"
          style={
            menuOpen
              ? {
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  background: '#f7f5ef',
                  padding: '20px 32px',
                  borderBottom: '1px solid #d9d3c4',
                  gap: '16px',
                }
              : {}
          }
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={active === link.href.slice(1) ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <a href="/cv-maimouna-ndiaye.pdf" className="btn btn-primary desktop-only">
            ↓ Download CV
          </a>
          <button
            className="burger"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  )
}
