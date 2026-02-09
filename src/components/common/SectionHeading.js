
export default function SectionHeading(props) {
  return (
    <div className={`flex flex-col gap-6 ${props.class}`}>
      <h6 className="uppercase text-sm tracking-wide font-semibold text-[var(--color-primary)]">{props.minorHeading}</h6>
      <h1 className="lg:text-4xl text-3xl font-bold text-black text-pretty text-center">{props.mainHeading}</h1>
      <p className="text-sm font-normal text-pretty max-w-xl">{props.paragraph}</p>
    </div>
  )
}
