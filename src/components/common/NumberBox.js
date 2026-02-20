

export default function NumberBox({number,bg,color}) {
  return (
    <div className={`${bg || 'bg-(--color-button-bg)'} rounded-full font-extrabold text-3xl px-4 py-2 ${color || 'text-(--color-primary)'} `}>
                        {number}
    </div>
  )
}
