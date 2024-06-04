import { HandPalm } from '@phosphor-icons/react'
import { Play } from 'lucide-react'

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  playRunning: boolean
}

export function Button({ playRunning, ...rest }: ButtonProps) {
  return (
    <>
      {playRunning ? (
        <button
          className="w-full text-base rounded flex items-center justify-center gap-2 h-14 py-1 px-1 text-white bg-red-600 hover:bg-red-700 disabled:opacity-70 disabled:cursor-not-allowed"
          {...rest}
        >
          <HandPalm size={22} /> Interromper
        </button>
      ) : (
        <button
          className="w-full text-base rounded flex items-center justify-center gap-2 h-14 py-1 px-1 text-white bg-emerald-600 hover:bg-emerald-700 disabled:opacity-70 disabled:cursor-not-allowed"
          {...rest}
        >
          <Play strokeWidth={1} /> Começar
        </button>
      )}
    </>
  )
}
