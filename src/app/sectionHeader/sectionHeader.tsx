import "./sectionHeader.scss"

interface sectionHeaderProp{
  text:string
}

export function SectionHeader( {text}: sectionHeaderProp){
  return (
    <h3 className="section-header">
      {text}
    </h3>
  )
}