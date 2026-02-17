
export default function PagraphSection(props) {
  return (
    <div className={`flex flex-col gap-3 ${props.class || 'justify-center items-center text-center'}`}>
        {props.paragraph &&
              <div className={`text-base font-normal text-pretty max-w-4xl capitalize ${props.paragraphColor || 'text-(--color-text)'}`}>{props.paragraph}</div>

        }
    </div>
  )
}
