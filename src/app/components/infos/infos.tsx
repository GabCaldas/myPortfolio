import { SectionHeader } from '@/app/sectionHeader/sectionHeader'
import './infos.scss'

export function Infos(){
  return(
    <div className="infos">
            <SectionHeader text='Languages'/>
            <div className="languages-info">
              <span>🇺🇸 EN - B2 (Intermediate-Advanced)</span>
              <span>🇧🇷 PT-BR - (Native Speaker)</span>
            </div>
            <SectionHeader text='Education'/>
          <div className="educational-info">
            <span>🎓</span>
            <span>Majoring in Information Systems - Unifacisa</span>
          </div>
    </div>
  
  )
  }