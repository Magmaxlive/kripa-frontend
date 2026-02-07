
export default function SectionHeading(props) {
  return (
    <div className={`flex flex-col gap-6 ${props.class}`}>
      <h6 className="uppercase text-sm tracking-wide font-semibold text-[var(--color-primary)]">{props.minorHeading}</h6>
      <h1 className="text-4xl font-bold text-black text-pretty">{props.mainHeading}</h1>
      <p className="text-sm font-normal text-pretty max-w-xl">{props.paragraph}</p>
    </div>
  )
}
