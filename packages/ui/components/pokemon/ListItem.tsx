import Image from 'next/image'
import Link from 'next/link'

type Props = {
  id: number
  name: string
  image: string
}
export const ListItem = ({ id, name, image }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg md:h-96 ">
      <Link href={`pokemon/${id}`}>
        <Image
          alt={name}
          src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${image}`}
          height={0}
          width={0}
          sizes="100vh"
          className="w-auto max-h-64"
        />
        <h2 className="p-2 text-2xl">
          {id} - {name}
        </h2>
      </Link>
    </div>
  )
}
