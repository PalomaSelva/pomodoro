import { Clock, ScrollText } from 'lucide-react'
import logo from '../assets/Logo.svg'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

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
        <Link to="/">
          <input type="radio" id="clock" name="option" className="sr-only" />

          <label
            htmlFor="clock"
            className="after:content-[''] after:h-[2px] after:mt-1 after:w-6 after:block after:hover:bg-emerald-400 cursor-pointer'"
          >
            <Clock
              className={`${!setIconColorByPathname('/') ? 'text-white' : 'text-emerald-500'} cursor-pointer`}
              size={21}
            />
          </label>
        </Link>
        <Link to="/history">
          <input type="radio" id="list" name="option" className="sr-only" />
          <label
            htmlFor="list"
            className="after:content-[''] after:h-[2px] after:mt-1 after:w-6 after:block after:hover:bg-emerald-400 cursor-pointer'"
          >
            <ScrollText
              className={`${!setIconColorByPathname('/history') ? 'text-white' : 'text-emerald-500'} cursor-pointer`}
            />
          </label>
        </Link>
      </div>
    </div>
  )
}
