
export default function SectionHeading(props) {
  return (
    <div className={`flex flex-col gap-6 ${props.class || 'justify-center items-center text-center'}`}>
      <h6 className={`uppercase text-sm tracking-wide font-bold ${props.minorHeadingColor || 'text-(--color-primary)'}`}>{props.minorHeading}</h6>
        {props.mainHeading &&
                <h1 className={`lg:text-4xl text-3xl font-bold ${props.mainHeadingColor || 'text-black'} text-pretty text-center capitalize`}>{props.mainHeading}</h1>
        }

        {props.paragraph &&
              <div className={`text-base space-y-2 font-normal text-pretty max-w-4xl ${props.paragraphColor || 'text-(--color-text)'}`}>{props.paragraph}</div>

        }
    </div>
  )
}
