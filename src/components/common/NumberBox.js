

export default function NumberBox({number,bg}) {
  return (
    <div className={`${bg || 'bg-(--color-button-bg)'} rounded-full font-extrabold text-3xl px-4 py-2 text-(--color-primary)`}>
                        {number}
    </div>
  )
}
