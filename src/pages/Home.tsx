import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { differenceInSeconds } from 'date-fns'
import { HandPalm } from '@phosphor-icons/react'
import { Play } from 'lucide-react'

const NewCycleFormValidatorSchema = z.object({
  task: z.string().min(1, 'Informe a tarefa'),
  minutesAmount: z.number().min(5).max(60),
})

type NewCycleFormData = z.infer<typeof NewCycleFormValidatorSchema>

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsAmount] = useState<number>(0)

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(NewCycleFormValidatorSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)

  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    let interval: number
    if (activeCycle) {
      interval = setInterval(() => {
        setAmountSecondsAmount(
          differenceInSeconds(new Date(), activeCycle.startDate),
        )
      }, 1000)
    }
    // limpa o efeito colateral anterior
    return () => {
      clearInterval(interval)
    }
  }, [activeCycle])

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
  }, [minutes, seconds, activeCycle])

  function handleCreateNewCycle(data: NewCycleFormData) {
    const newCycle: Cycle = {
      id: new Date().getTime().toString(),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }
    setCycles((state) => [...state, newCycle])
    setActiveCycleId(newCycle.id)
    setAmountSecondsAmount(0)
    reset()
  }

  function handleInterruptCycle() {
    setActiveCycleId(null)

    setCycles(
      cycles.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
  }

  const task = watch('task')
  const isSubmitDisabled = !task && seconds === '00'

  return (
    <div className="grid place-items-center h-full">
      <div className="flex flex-col max-w-[650px] md:w-[594px] justify-center items-center gap-12 h-full ">
        <div className="">
          <form
            className="flex flex-col  justify-center items-center gap-12 h-full"
            onSubmit={handleSubmit(handleCreateNewCycle)}
          >
            <div className="flex font-bold text-gray-200 gap-3">
              <label htmlFor="task">Vou trabalhar em</label>
              <input
                type="text"
                id="task"
                list="task-suggestions"
                {...register('task')}
                disabled={!!activeCycle}
                className={`bg-transparent border-b-2 border-gray-400  focus:border-emerald-500 focus:bg-zinc-700 w-64 text-center pb-1 outline-none [&::-webkit-calendar-picker-indicator]:!hidde'}`}
                placeholder="Dê um nome para o seu projeto"
              />
              <datalist id="task-suggestions">
                <option value="projeto1"> projeto1</option>
                <option value="projeto2">projeto1</option>
              </datalist>
              <label htmlFor="minutesAmount">durante</label>
              <input
                id="minutesAmount"
                type="number"
                disabled={!!activeCycle}
                max={60}
                min={0}
                step={5}
                className="w-9 bg-transparent border-b-2 border-gray-400  text-center pb-1 outline-none focus:border-emerald-500  focus:bg-zinc-700"
                placeholder="00"
                {...register('minutesAmount', { valueAsNumber: true })}
              />
              <label htmlFor="time">minutos.</label>
            </div>

            <div className=" flex font-robotoMono leading-[9rem] text-white">
              <div className="text-[10rem]  font-bold bg-zinc-600 rounded-md p-2 me-2">
                {minutes[0]}
              </div>
              <div className="text-[10rem] font-bold bg-zinc-600 rounded-md p-2 me-2">
                {minutes[1]}
              </div>
              <div className="text-[10rem] font-bold text-emerald-600">:</div>
              <div className="text-[10rem] font-bold bg-zinc-600 rounded-md p-2 me-2">
                {seconds[0]}
              </div>
              <div className="text-[10rem] font-bold bg-zinc-600 rounded-md p-2 me-2">
                {seconds[1]}
              </div>
            </div>
            {activeCycle ? (
              <button
                className="w-full text-base rounded flex items-center justify-center gap-2 h-14 py-1 px-1 text-white bg-red-600 hover:bg-red-700 disabled:opacity-70 disabled:cursor-not-allowed"
                type="button"
                onClick={handleInterruptCycle}
              >
                <HandPalm size={22} /> Interromper
              </button>
            ) : (
              <button
                className="w-full text-base rounded flex items-center justify-center gap-2 h-14 py-1 px-1 text-white bg-emerald-600 hover:bg-emerald-700 disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={isSubmitDisabled}
                type="submit"
              >
                <Play strokeWidth={1} /> Começar
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
