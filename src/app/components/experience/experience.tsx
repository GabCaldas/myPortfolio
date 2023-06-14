import { SectionHeader } from "@/app/sectionHeader/sectionHeader"
import Image from "next/image"
import './experience.scss'
export function Experience (){
  return (
      <div className="experience">
        <SectionHeader text="Experience"/>
        <p>2 years studying the concepts and technologies
 of front-end programming, solid
          foundation of programming logic, algorithms and data structures </p>
          <div className="experience-time">
            <div className="experience-language">
              <Image
            src="/react.png"
            alt="React Logo"
            width={40}
            height={40}
            priority/>
          <div className="experience-unity">
            <div className="experience-measure measure-1">
              <span  className="experience-years">1 Year</span>
            </div>
        </div>
        </div>
        <div className="experience-language"><Image
          src="/ts.png"
          alt="Typescript Logo"
          width={40}
          height={40}
          priority />
        <div className="experience-unity">
          <div className="experience-measure measure-1">
          <span >1 Year</span>
          </div>
        </div>
        </div>
          <div className="experience-language">
          <Image
          src="/js2.png"
          alt="Javascript Logo"
          width={40}
          height={40}
          priority
        />
        <div className="experience-unity">
          <div className="experience-measure measure-2">
          <span >2 Years</span>
          </div>
        </div>
        </div>
        <div className="experience-language">
        <Image
          src="/java.png"
          alt="Java Logo"
          width={40}
          height={40}
          priority
        />
        <div className="experience-unity">
          <div className="experience-measure measure-1">
          <span>1 Year</span>
          </div>
        </div>
        </div>   
        </div>
      </div>
  )
}