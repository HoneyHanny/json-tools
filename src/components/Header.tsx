import { Link, useRouterState } from '@tanstack/react-router'
import { Button } from './ui/button'
import { ModeToggle } from './mode-toggle'

export default function Header() {
  const { location } = useRouterState()

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/stringify', label: 'Stringify' },
    { to: '/unstringify', label: 'Unstringify' },
  ]

  return (
    <header className="p-2 flex gap-2 justify-between">
      <nav className="flex flex-row">
        <div className="px-2 font-bold">
          {navLinks.map(({ to, label }) => {
            const isActive = location.pathname === to
            return (
              <Link to={to} key={to}>
                <Button
                  variant="link"
                  disabled={isActive}
                  tabIndex={isActive ? -1 : 0}
                  className={isActive ? 'relative' : ''}
                >
                  <span
                    className={
                      isActive
                        ? 'bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent animate-gradient-shine'
                        : ''
                    }
                  >
                    {label}
                  </span>
                </Button>
              </Link>
            )
          })}
        </div>
      </nav>
      <div className="flex flex-row">
        <ModeToggle />
      </div>
    </header>
  )
}
