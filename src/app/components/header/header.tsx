
import Image from "next/image"

export function Header(){
  return(
    <div className="header">
      <div>
        <h1>Hi, I&lsquo;m Caldas!👋</h1>
        <h2>Front-End Developer</h2>
        <h3>(this personal site is a project to test responsiveness and componentization in React)</h3>
      </div>
      <Image
        src="/me.jpg"
        alt="Vercel Logo"
        width={325}
        height={290}
        priority
      />
    </div>
  )
}