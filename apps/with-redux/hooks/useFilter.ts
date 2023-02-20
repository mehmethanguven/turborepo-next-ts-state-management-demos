import { useCallback, useEffect, useMemo, useState } from 'react'
import { IPokemon } from '../types'
import { useAppDispatch } from './redux-hooks'
import { fetchPokemons, filterPokemons } from 'store/reducers/pokemon-actions'

export function useFilter() {
  const [filter, setFilter] = useState('')
  const dispatch = useAppDispatch()
  useEffect(() => {
    let isMount = true
    if (isMount) {
      dispatch(fetchPokemons())
    }
    return () => {
      isMount = false
    }
  }, [dispatch])

  const handleFilter = useCallback(
    (value: string) => {
      dispatch(filterPokemons(value))
      setFilter(value)
    },
    [dispatch],
  )
  return { filter, handleFilter }
}
