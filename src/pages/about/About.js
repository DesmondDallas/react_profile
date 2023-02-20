import React from "react";
import "../about/About.scss";

function About() {
  return (
    <div className="aboutPage">
      <div id="about">
        <div class="iframe-container">
          <iframe
            id="video"
            title="About Code To Program"
            frameBorder="0"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe>
        </div>
        <div class="about_top_container">
          <div class="about_top_inner">
            <div class="about_top_menu">
              <div>
                <h1>
                  Hello.{<br></br>}
                  I'm Desmond Dallas
                </h1>
                <p>
                  <span>Web Design & Developer</span>
                </p>
              </div>
              <div class="about_top_menu_inner">
                <ul>
                  <li class="numbered_heading">
                    <a href="https://study.com/academy/lesson/how-to-write-a-program-coding-testing-debugging.html" data-info="CTP" class="about-contact-button">
                      Resume
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li class="numbered_heading">
                    <a href="https://study.com/academy/lesson/how-to-write-a-program-coding-testing-debugging.html">Portfolio</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li class="numbered_heading">
                    <a href="https://study.com/academy/lesson/how-to-write-a-program-coding-testing-debugging.html" id="modalBtn">
                      Video
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div id="myModal" class="modal">
            <div class="modal-content">
              <div class="modal-exit-btn">
                <span class="close">&times;</span>
                <p>Exit video</p>
              </div>
              <iframe
                id="video"
                src="https://www.youtube.com/embed/W0LHTWG-UmQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=W0LHTWG-UmQ"
                frameborder="0"
                title="About Code To Program"
                allowFullScreen
                // may change to 'allowfullscreen' if not working
              ></iframe>
            </div>
          </div>
        </div>

        <div class="about_bottom_content">
          <p>Freelancer Available for hire</p>
          <div>
            <ul>
              <li>
                <span>T:</span> +44 7485 673802
              </li>
              <li class="mail">
                <a href="mailto:dallas.desmond1@gmail.com">
                  E: <span>Web.Developer@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section id="my_skills" className="height_100">
        <div class="my_skills_text">
          <span id="letter_a">A</span>
          <span>r</span>
          <span>t </span>
          <span>o</span>
          <span>f </span>
          <span class="letter_c">C</span>ode
        </div>

        <div class="page_skills_left">
          <div class="page_skills_left_inner">
            <h2 className="page_skills_left_title">
              Self-taught web developer
            </h2>
            <p>
              I am a passionate about solving business problems through
              human-centered design. Curious by nature and business minded.
              aspernatur pariatur neque, expedita in dignissimos voluptatum
              asperiores libero. Sit omnis maxime minus. Lorem ipsum dolor sit
              amet consectetur adipisicing.
            </p>

            {<br></br>}

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              dolorem ratione explicabo voluptatibusunde sequi. Dolore dolorum
              aspernatur pariatur neque, expedita in dignissimos voluptatum
              asperiores libero. Sit omnis maxime minus. Lorem ipsum dolor sit
              amet consectetur adipisicing.
            </p>
          </div>
        </div>

        <div class="page_skills_right">
          <div class="page_skills_inner_right">
            <div class="page_skills_box item2">
              <h2>Skills & Experience</h2>
              <h4>
                Pro since: <time>2022</time>
              </h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
                incidunt quidem corrupti dignissimos eum optio voluptas. Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Magni
                incidunt quidem corrupti dignissimos eum optio voluptas.
              </p>
              <div class="skills_meter">
                <div class="skills_meter_inner">
                  <div class="skills_meter_box">
                    <p>HTML</p>
                    <div class="skills_meter_box_inner meter_red">
                      <span></span>
                    </div>
                  </div>
                  <div class="skills_meter_box">
                    <p>CSS</p>
                    <div class="skills_meter_box_inner meter_blue">
                      <span></span>
                    </div>
                  </div>
                  <div class="skills_meter_box">
                    <p>PHP</p>
                    <div class="skills_meter_box_inner meter_orange">
                      <span></span>
                    </div>
                  </div>
                  <div class="skills_meter_box meter_violet">
                    <p>Javascript</p>
                    <div class="skills_meter_box_inner">
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
              <button className="button_1">See My Work</button>
            </div>
          </div>
        </div>
      </section>

      <section class="gallery_container height_100">
        <div class="gallery-bg1">
          <a href="services.html">
            <div>
              <i class="fa-brands fa-wordpress"></i>
            </div>
            <a href="https://study.com/academy/lesson/how-to-write-a-program-coding-testing-debugging.html">Wordpress Projects</a>
            <div class="text-block">
              <span class="animation-text">  
                <p>The Art of Code</p>
              </span>
            </div>
          </a>
        </div>

        <div class="gallery-bg2">
          <div>
            <i class="fa-solid fa-blog hide"></i>
          </div>
          <p>Blog</p>
        </div>

        <div class="gallery-bg1">
          <div>
            <i class="fa-solid fa-file-code hide"></i>
          </div>
          <p>HTML & CSS</p>
          <div class="text-block">
            <span class="animation-text">
              <p>The Art of Code</p>
            </span>
          </div>
        </div>

        <div class="gallery-bg2">
          <div>
            <i class="fa-brands fa-react"></i>
          </div>
          <p>React</p>
        </div>
        <div class="gallery-bg1">
          <div>
            <i class="fa-solid fa-share-nodes"></i>
          </div>
          <p>Social Links</p>
          <div class="text-block">
            <span class="animation-text">
              <p>The Art of Code</p>
            </span>
          </div>
        </div>
        <div class="gallery-bg2">
          <div>
            <i class="fa-brands fa-js"></i>
          </div>
          <p>JavaScript</p>
        </div>
        <div class="gallery-bg2">
          <div id="icon">
            <i class="fa-brands fa-internet-explorer"></i> <span></span>
          </div>
          <p> Personal Website</p>
        </div>
        <div class="gallery-bg2">
          <div>
            <i class="fa-brands fa-codepen"></i>
          </div>
          <p>Codepen</p>
        </div>
        <div class="gallery-bg1">
          <div>
            <i class="fa-brands fa-php"></i>
          </div>
          <p>PHP Projects</p>
        </div>
      </section>
    </div>
  );
}

export default About;
