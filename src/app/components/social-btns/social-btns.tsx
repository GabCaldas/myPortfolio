import { GitIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/instagram";
import { LinkedinIcon } from "../icons/linkedin-icon";
import { TwitterIcon } from "../icons/twitter-icon";

import "./social-btns.scss";

export function SocialBtns(){
    return(
        <>
        <div className="social">
          <a href="https://www.instagram.com/gabr_caldas/" target="_blank">
            <InstaIcon/>
          </a>
          <a href="https://www.linkedin.com/in/gabriel-caldas-2570a5235/" target="_blank">
            <LinkedinIcon/>
            </a>
          <a href="https://github.com/GabCaldas" target="_blank">
            <GitIcon/>
          </a>
          <a href="https://twitter.com/gab__Caldas" target="_blank">
            <TwitterIcon/>
          </a>
        </div>
        
        </>
    )
}