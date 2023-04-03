import { h } from "preact";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import Helmet from "preact-helmet";
import "../style/main.css";
const App = () => {
  return (
    <div id="root">
      <Helmet
        title="n3rd ~ the normies will convert!"
        meta={[
          {
            name: "og:description",
            content: "the normies will convert! learn & meet others :)",
          },
          { property: "og:type", content: "article" },
        ]}
      />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
export default App;
