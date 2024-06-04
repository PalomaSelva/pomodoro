import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function Layout() {
  return (
    <div className="bg-zinc-950 h-screen w-screen grid place-items-center md:p-0 p-3">
      <div className="bg-zinc-900 max-h-[810px]  h-[88vh] max-w-[1120px] w-full px-10 py-12">
        <Header />
        <Outlet />
      </div>
    </div>
  )
}
