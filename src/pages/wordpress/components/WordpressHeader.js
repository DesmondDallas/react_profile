//import WordMod from "./wordpress/styles/wordpress.module.scss";
import "../styles/wordpress_header.scss";

// style for button
import { Button, ButtonLabel } from "../../../components/Button.style";

const WordpressHeader = () => {
  return (
    //className={WordMod.headSec}
    <div id="header_section">
      <div class="header_section_left">
        <h1>Desmond Dallas</h1>
        <h3>HTML, CSS & Javascript Developer</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          quas id illo, magni ipsa veritatis sit fuga doloribus, porro voluptas
          maxime optio ducimus hic recusandae perspiciatis dolorum minima, sint
          officia.
        </p>
        <Button>
          <a href="https://www.facebook.com">
            <ButtonLabel>Contact Me</ButtonLabel>
          </a>
        </Button>
      </div>
    </div>
  );
};

export default WordpressHeader;
