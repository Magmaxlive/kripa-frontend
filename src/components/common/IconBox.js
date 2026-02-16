

export default function IconBox({icon,bg}) {
  return (
    <div className={`${bg || 'bg-(--color-button-bg)'} rounded-full h-fit w-fit p-4 text-(--color-primary)`}>
                        {icon}
    </div>
  )
}
