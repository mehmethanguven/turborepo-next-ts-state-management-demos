import React from 'react'
type Props = {
  filter: string
  setFilter: (value: string) => void
}

export const PokemonFilter = ({ filter, setFilter }: Props) => {
  return (
    <div className="m-1 md:min-w-[72rem]">
      <input
        type="text"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        className="w-full p-3 bg-white border rounded-lg shadow-lg md:mb-10"
        placeholder="Filter"
      />
    </div>
  )
}
