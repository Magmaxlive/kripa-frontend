
export default function ParagraphSection(props) {
  return (
    <div className={`flex flex-col gap-3 ${props.class || 'justify-center items-center text-center'}`}>
        {props.paragraph &&
              <div className={`${props.textSize || 'text-base'} font-normal space-y-3 text-pretty max-w-4xl  ${props.paragraphColor || 'text-(--color-text)'}`}>{props.paragraph}</div>

        }
    </div>
  )
}
