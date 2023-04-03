import { Fragment, h } from "preact";
const Footer = () => {
  return (
    <Fragment>
      <footer>
        <hr />
        <div id="footer" class="mcl-row">
          {/* <img src="https://avatars.githubusercontent.com/u/128863208?s=200&v=4" alt="n3rd"></img> */}
          <div class="mcl-column">
            <ul class="align-right">
              <li>
                <a href="https://fv.youngchief.xyz/@n3rd">fediverse</a>
              </li>
            </ul>
          </div>
          <div class="mcl-column">
            <ul class="align-left">
              <li>
                <a href="https://git.youngchief.xyz/n3rd">gitea</a>
              </li>
              <li>
                <a href="https://github.com/n3rdclub">gh</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};
export default Footer;
