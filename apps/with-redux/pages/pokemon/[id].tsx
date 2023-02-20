import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { HiArrowLeft } from 'react-icons/hi'
import { fetchPokemon } from 'store/reducers/pokemon-actions'

const Details = () => {
  const {
    query: { id },
  } = useRouter()
  const dispatch = useAppDispatch()
  const { pokemon, loading, error } = useAppSelector(state => state.pokemon)

  useEffect(() => {
    let isMount = true
    if (isMount && id) {
      dispatch(fetchPokemon(parseInt(id.toString())))
    }

    return () => {
      isMount = false
    }
  }, [id, dispatch])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64 text-3xl">
        Loading...
      </div>
    )
  }
  if (!pokemon) {
    return (
      <div className="flex items-center justify-center h-64 text-3xl">
        No pokemon found
      </div>
    )
  }
  if (error) {
    return (
      <div className="flex items-center justify-center h-64 text-3xl">
        Network error, please try again later.
      </div>
    )
  }
  return (
    <div className="md:w-[64rem]">
      <Head>
        <title>{pokemon?.name}</title>
      </Head>
      <div className="pl-2">
        <Link
          className="flex items-center w-24 p-4 mb-4 space-x-2 bg-white rounded-lg shadow-lg"
          href="/"
        >
          <HiArrowLeft color="bg-black" />
          <h2>Back</h2>
        </Link>
      </div>
      <div className="flex flex-col p-4 bg-white rounded-lg shadow-lg md:items-center md:justify-center md:flex-row md:space-x-20">
        <Image
          alt=""
          src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon?.image}`}
          height={0}
          width={0}
          sizes="60vh"
          className="w-auto max-h-96"
        />
        <div className="p-12 md:p-4">
          {/* <h3 className="font-bold">ID: {id}</h3> */}
          <h3 className="mt-5 font-bold">Name</h3>
          <p className="capitalize">{pokemon?.name}</p>

          <h3 className="mt-5 font-bold">Type</h3>
          {(pokemon?.type || []).map((item, idx) => (
            <p className="capitalize" key={idx}>
              {item}
            </p>
          ))}

          <h3 className="mt-5 font-bold">Stats:</h3>
          {(pokemon?.stats || []).map((item, idx) => (
            <p key={idx}>
              {item.name}: {item.value}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Details
