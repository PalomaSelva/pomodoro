import { Status } from '../components/Status'

export function History() {
  return (
    <div className="font-bold text-2xl h-full text-gray-100 max-w-[935px] m-auto py-4 flex flex-col gap-3">
      <h2>Meu Histórico</h2>
      <div className="overflow-auto h-[407px]  bg-neutral-800">
        <table className="w-full border-spacing-0 border-collapse">
          <thead>
            <tr className="bg-stone-700 text-sm rounded">
              <th className="py-3 px-6 text-left w-1/2 rounded-tl-lg">
                Tarefa
              </th>
              <th className="py-3 px-2 text-left">Duração</th>
              <th className="py-3 px-2 text-left">Início</th>
              <th className="py-3 px-2 text-left rounded-tr-lg">Status</th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="bg-stone-800 text-sm text-gray-100 h-16">
              <td className="border-t-4 border-stone-900 p-4">
                Conserto de débitos técnicos
              </td>
              <td className="border-t-4 border-stone-900 p-4">25 minutos</td>
              <td className="border-t-4 border-stone-900 p-4">
                Há cerca de 2 meses
              </td>
              <td className="border-t-4 border-stone-900 p-4">
                <Status statusType="concluido" />
              </td>
            </tr>
            <tr className="bg-stone-800 text-sm text-gray-100 h-16">
              <td className="border-t-4 border-stone-900 p-4">
                Conserto de débitos técnicos
              </td>
              <td className="border-t-4 border-stone-900 p-4">25 minutos</td>
              <td className="border-t-4 border-stone-900 p-4">
                Há cerca de 2 meses
              </td>
              <td className="border-t-4 border-stone-900 p-4">
                <Status statusType="andamento" />
              </td>
            </tr>
            <tr className="bg-stone-800 text-sm text-gray-100 h-16">
              <td className="border-t-4 border-stone-900 p-4">
                Conserto de débitos técnicos
              </td>
              <td className="border-t-4 border-stone-900 p-4">25 minutos</td>
              <td className="border-t-4 border-stone-900 p-4">
                Há cerca de 2 meses
              </td>
              <td className="border-t-4 border-stone-900 p-4">
                <Status statusType="interrompido" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
