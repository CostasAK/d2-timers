import "./Footer.scss";

import { FaGithub } from "react-icons/fa";
import { KofiButton } from "react-kofi-button";
import SVG from "react-inlinesvg";
import avatar from "../assets/initialen.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="credits">
        <div>
          <span>Made by</span>  
          <a href="https://github.com/CostasAK">
            <SVG src={avatar} className="avatar" /> <span>CostasAK</span>
          </a>
        </div>
        <KofiButton
          username="costasak"
          label="Support me"
          preset="thin"
          backgroundColor="kofiGrey"
        />
        <div>
          <a href="https://github.com/CostasAK/d2-buddy">
            <FaGithub /> <span>Source</span>
          </a>
        </div>
      </div>
    </footer>
  );
}