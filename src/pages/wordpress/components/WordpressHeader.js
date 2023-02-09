//import WordMod from "./wordpress/styles/wordpress.module.scss";
import "../styles/wordpress_header.scss";

// style for button
import { Button, ButtonLabel } from "../../../components/Button.style";

const WordpressHeader = () => {
  return (
    //className={WordMod.headSec}
    <div id="header_section">
      <div class="header_section_left">
        <h1>Search Engine Optimisation</h1>
        <h3>Stoke-on-Trent</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          quas id illo, magni ipsa veritatis sit fuga doloribus, porro voluptas
          maxime optio ducimus hic recusandae perspiciatis dolorum minima, sint
          officia.
        </p>
        <Button backgroundColor="red">
              <ButtonLabel>Click this Button</ButtonLabel>
            </Button>
        <a class="button_1" href="contact.html">
          Contact Me
        </a>
      </div>

    </div>
  );
};


export default WordpressHeader