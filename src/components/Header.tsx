import { ScrollText } from 'lucide-react'
import logo from '../assets/Logo.svg'
import { NavLink, useLocation } from 'react-router-dom'
import { Alarm } from '@phosphor-icons/react'

export function Header() {
  const { pathname } = useLocation()

  function setIconColorByPathname(iconLabel: string) {
    if (iconLabel === pathname) {
      return true
    } else {
      return false
    }
  }
  return (
    <div className="flex justify-between">
      <img src={logo} alt="triangulos verdes sobrepostos" />
      <div className="flex gap-4 items-baseline ">
        <NavLink to="/">
          <input type="radio" id="clock" name="option" className="sr-only" />

          <label
            htmlFor="clock"
            className="after:content-[''] after:h-[2px] after:mt-1 after:w-6 after:block after:hover:bg-emerald-400 cursor-pointer'"
          >
            <Alarm
              className={`${!setIconColorByPathname('/') ? 'text-white' : 'text-emerald-500'} cursor-pointer`}
              size={24}
            />
          </label>
        </NavLink>
        <NavLink to="/history">
          {({ isActive }) => (
            <>
              <input type="radio" id="list" name="option" className="sr-only" />
              <label
                htmlFor="list"
                className="after:content-[''] after:h-[2px] after:mt-1 after:w-6 after:block after:hover:bg-emerald-400 cursor-pointer'"
              >
                <ScrollText
                  className={`${!isActive ? 'text-white' : 'text-emerald-500'} cursor-pointer`}
                />
              </label>
            </>
          )}
        </NavLink>
      </div>
    </div>
  )
}
