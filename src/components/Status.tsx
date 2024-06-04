type StatusTypes = 'andamento' | 'interrompido' | 'concluido'

interface StatusProps {
  statusType: StatusTypes
}

export function Status({ statusType }: StatusProps) {
  const status = {
    andamento: {
      descricao: 'Em andamento',
      cor: 'amber-600',
    },
    interrompido: {
      descricao: 'Interrompido',
      cor: 'red-600',
    },
    concluido: {
      descricao: 'Concluído',
      cor: 'emerald-600',
    },
  }

  const colorClass = 'bg-' + status[statusType].cor

  return (
    <span
      className={`before:content-[''] before:w-2 before:h-2 before:block before:${colorClass} before:rounded-full flex items-center gap-2`}
    >
      {status[statusType].descricao}
    </span>
  )
}
