

export default function IconBox({icon,bg,color}) {
  return (
    <div className={`${bg || 'bg-(--color-button-bg)'} rounded-full h-fit w-fit p-4 ${color || 'text-(--color-primary)'} `}>
                        {icon}
    </div>
  )
}
