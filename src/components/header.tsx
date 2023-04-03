import { h } from "preact";
import N3RDText from "./n3rdText";
const Header = () => {
  return (
    <header>
      <div id="header">
        {/* <img src="https://avatars.githubusercontent.com/u/128863208?s=200&v=4" alt="n3rd"></img> */}
        <div class="align-left" id="header-left">
          <span>
            <N3RDText />
            <span> ~ the normies will convert!</span>
          </span>
        </div>
        <div class="align-right" id="header-right">
          <nav>
            <ul>
              <li>
                <a href="https://github.com/n3rdclub">gh</a>
              </li>
              <li>
                <a href="https://git.youngchief.xyz/n3rd">gitea</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <hr />
    </header>
  );
};
export default Header;
