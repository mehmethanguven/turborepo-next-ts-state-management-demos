type Props = {
  title: string
}

export const Title = ({ title }: Props) => {
  return (
    <div className="p-4 mb-5 border text-xl bg-white rounded-lg shadow-lg md:min-w-[72rem]">
      {title}
    </div>
  )
}
