import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { Game, GameResponse } from '../types'

export default function useGames() {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState<string>('')
  const [loaded, setLoaded] = useState<boolean>(false)

  useEffect(() => {
    apiClient
      .get<GameResponse>('games')
      .then((res) => {
        console.log(res.data)
        setGames(res.data.results)
      })
      .catch((err) => setError(err.response))
      .finally(() => setLoaded(true))
  }, [])

  return { games, error, loaded }
}
