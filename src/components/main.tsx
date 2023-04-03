import { Fragment, h } from "preact";
import N3RDText from "./n3rdText";
const Main = () => {
  return (
    <Fragment>
      <h1>
        <N3RDText />
      </h1>
      <h2>About</h2>
      <p>
        Welcome to <N3RDText />!<br />
        Created by youngchief, loved by everyone. (hopefully)
        <br />
        You can learn nerdy topics like coding with fun & effective workshops!{" "}
        <br />
        The mission is to teach people of all ages the magic of coding, and
        other "nerdy" topics.
      </p>
      <h2>Friends!</h2>
      <ul>
        <li>
          <a href="https://hackclub.com/" style="font-weight:bold;">Hack Club</a>: Radical club support!
          Free <a href="https://zoom.us/pricing">Zoom Pro</a>, and{" "}
          <a href="https://toolbox.hackclub.com/">more</a>!
        </li>
        {/* <li>
          <a href="https://replit.com/" style="font-weight:bold;">Replit</a>: They even gave us{" "}
          <a href="https://replit.com/site/teams-for-education">
            Teams for Education
          </a>{" "}
          for the whole club!
        </li> */}
      </ul>
    </Fragment>
  );
};
export default Main;
