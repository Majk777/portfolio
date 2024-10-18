import React from "react";
import "./Portfolio.css";

import mernicon from "../assets/portfolio/mern.svg";
import scrollmern from "../assets/portfolio/scrollpagevinyl.jpg";
import vinyltekasvg from "../assets/portfolio/vinylteka.svg";
import wheretostack from "../assets/portfolio/wheretostack.svg";
import scrollwhereto from "../assets/portfolio/scrollwhereto.jpg";
import wheretosvg from "../assets/portfolio/wheretosvg.svg";
import firebasestack from "../assets/portfolio/firebase.svg";
import scrollfirebase from "../assets/portfolio/scrollfirebase.jpg";
import mrgallery from "../assets/portfolio/mrgallery.svg";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <div className="container-site my-20 flex flex-row justify-center">
        <div className="wrapper-site  w-11/12 ">
          <a href="https://vinylteka.onrender.com">
            <h1 className="text-center text-4xl my-5 border-y-4 border-customRed max-lg:text-3xl max-md:text-2xl max-sm:text-lg">
              vinylteka.onrender.com
            </h1>
          </a>
          <div className="upper-part  h-96 flex flex-row max-lg:justify-center max-sm:h-min	">
            <div className=" basis-3/12 flex flex-row margerino">
              <div className="mern-symbols flex flex-row justify-center w-full">
                <img src={mernicon} alt="mernicon" className="mern-images " />
              </div>
            </div>
            <div className=" basis-5/12 margerino bannerscreen  screentransition max-lg:hidden"></div>

            <div
              className=" basis-4/12 margerino text-center max-2xl:text-xl max-lg:text-xl max-lg:basis-1/2 max-sm:basis-2/3 flex flex-col justify-between
            "
            >
              <p>
                Vinylteka strona stworzona za pomocą MERN stack. Backend jest
                zbudowany na MongoDB, obsługiwany przez bibliotekę Mongoos,
                Nodejs, ExpressJs oraz Amazon S3 dla dodawania obrazów. Fronted
                zbudowany w technologii React i Tailwind. Pozwala odwiedzającym
                ją użytkownikom założyć konto i dodawać albumy muzyczne, wraz ze
                zdjęciami okładek, recenzją i paroma innymi ważnymi informacjami
                oraz komentować dodane wcześniej albumy (strona czasami wolno
                się wczytuje za pierwszym razem).
              </p>
              <p className="mt-2">
                <a
                  href="https://github.com/Majk777/vinylteka-demo-majk"
                  className="neon-buttons-git"
                >
                  github.com/vinylteka
                </a>
              </p>
            </div>
          </div>
          <div className="bottom-part   flex flex-row items-stretch max-sm:hidden max-lg:justify-center">
            <div className="basis-3/12 margerino max-lg:hidden">
              <img
                src={scrollmern}
                alt="scrollmern"
                className="mern-images  screentransition"
              />
            </div>
            <div className="basis-1/12  margerino flex flex-row justify-center  ">
              <img
                src={vinyltekasvg}
                alt="vinyltekasvg"
                className=" w-1/2 mern-images"
              />
            </div>
            <div className="basis-9/12 bg-red-400 margerino biggscreen  screentransition "></div>
          </div>
          <div className="basis-3/12 margerino sm:hidden">
            <img
              src={scrollmern}
              alt="scrollmern"
              className="mern-images  screentransition"
            />
          </div>
        </div>
      </div>

      <div className="container-site my-20 flex flex-row justify-center">
        <div className="wrapper-site  w-11/12">
          <a href="https://www.wheretowithdoggo.com/">
            <h1 className="text-center text-4xl my-5 border-y-4 border-customRed max-lg:text-3xl max-md:text-2xl max-sm:text-base">
              wheretowithdoggo.com
            </h1>
          </a>
          <div className="upper-part  h-96 flex flex-row max-lg:justify-center max-sm:h-min">
            <div className=" basis-3/12 flex flex-row margerino">
              <div className="mern-symbols flex flex-row justify-center w-full">
                <img
                  src={wheretostack}
                  alt="wheretostacksvg"
                  className="mern-images "
                />
              </div>
            </div>
            <div className=" basis-5/12 margerino bannerscreen-whereto  screentransition max-lg:hidden"></div>
            <div className=" basis-4/12 margerino text-center max-2xl:text-xl max-lg:text-xl max-lg:basis-1/2 flex flex-col justify-between">
              <p>
                Wheretowithdoggo strona blog stworzona na Wordpressie z
                wykorzystaniem technologii Javascript i PHP, a także biblioteki
                Tailwind i CSS. Blog podróżniczy zawiera 2 kategorie postów,
                pierwsza kategoria skupia się na podróżowaniu, a druga na
                poradach, dodano również możliwość ich komentowania. Hosting
                jest na dreamhost.
              </p>
              <p className="mt-2">
                <a
                  href="https://github.com/Majk777/whereto"
                  className="neon-buttons-git"
                >
                  github.com/whereto
                </a>
              </p>
            </div>
          </div>
          <div className="bottom-part   flex flex-row items-stretch max-sm:hidden max-lg:justify-center">
            <div className="basis-3/12 margerino  max-lg:hidden">
              <img
                src={scrollwhereto}
                alt=""
                className="mern-images  screentransition"
              />
            </div>
            <div className="basis-1/12  margerino flex flex-row justify-center ">
              <img
                src={wheretosvg}
                alt="wheretosvg"
                className=" w-1/4 mern-images "
              />
            </div>
            <div className="basis-9/12 bg-red-400 margerino biggscreen-whereto  screentransition"></div>
          </div>
          <div className="basis-3/12 margerino  sm:hidden">
            <img
              src={scrollwhereto}
              alt=""
              className="mern-images  screentransition"
            />
          </div>
        </div>
      </div>

      <div className="container-site my-20 flex flex-row justify-center pb-5">
        <div className="wrapper-site  w-11/12">
          <a href="https://thegallery-e7fd3.web.app/">
            <h1 className="text-center text-4xl my-5 border-y-4 border-customRed max-lg:text-3xl max-md:text-2xl max-sm:text-lg">
              thegallery.web.app
            </h1>
          </a>
          <div className="upper-part  h-96 flex flex-row max-lg:justify-center max-sm:h-min ">
            <div className=" basis-3/12 flex flex-row margerino">
              <div className="mern-symbols flex flex-row justify-center w-full">
                <img
                  src={firebasestack}
                  alt="wheretostacksvg"
                  className="mern-images "
                />
              </div>
            </div>
            <div className=" basis-5/12 margerino bannerscreen-firebase  screentransition max-lg:hidden"></div>
            <div className=" basis-4/12 margerino text-center max-2xl:text-xl max-lg:text-xl max-lg:basis-1/2 flex flex-col justify-between">
              <p>
                Mr. Gallery strona inspirowana minimalizmem i retro designem lat
                2000, na której możesz tworzyć własne posty lub przeglądać
                treści utworzone przez użytkowników i komentować je. W sekcji
                „Nowy post” możesz oznaczyć innych użytkowników, wybrać
                kategorię dla swoich treści, dodać tytuł i opis posta, a nawet
                przesłać zdjęcie. Poruszaj się po stronie głównej, klikając logo
                witryny, lub uzyskaj dostęp do treści określonych użytkowników,
                klikając ich awatary. Za każdym razem, gdy ktoś skomentuje post,
                który obserwujesz, otrzymasz powiadomienie z bezpośrednim
                linkiem do tego wpisu.
              </p>
              <p className="mt-2">
                <a
                  href="https://github.com/Majk777/gallery"
                  className="neon-buttons-git"
                >
                  github.com/mrgallery
                </a>
              </p>
            </div>
          </div>
          <div className="bottom-part   flex flex-row items-stretch max-sm:hidden max-lg:justify-center">
            <div className="basis-3/12 margerino  max-lg:hidden">
              <img
                src={scrollfirebase}
                alt=""
                className="mern-images  screentransition"
              />
            </div>
            <div className="basis-1/12  margerino flex flex-row justify-center ">
              <img
                src={mrgallery}
                alt="mrgallery"
                className=" w-1/2 mern-images"
              />
            </div>
            <div className="basis-9/12 bg-red-400 margerino biggscreen-firebase  screentransition"></div>
          </div>
          <div className="basis-3/12 margerino  sm:hidden">
            <img
              src={scrollfirebase}
              alt=""
              className="mern-images  screentransition"
            />
          </div>
        </div>
      </div>

      <h1 className="text-center my-20 px-5 max-lg:text-xl max-md:text-lg">
        Link do repozytorium na Github dla strony portfolio :&nbsp;
        <a
          href="https://github.com/Majk777/portfolio"
          className="neon-buttons-git"
        >
          github.com/portfolio
        </a>
      </h1>
      <div className="others flex flex-col items-center pb-10 ">
        <h1 className="text-center pb-10 text-3xl uppercase">
          Umiejętności i technologie
        </h1>
        <div className="skillset-container flex flex-row w-11/12 justify-around max-sm:flex-col max-sm:items-center">
          <div className="programming">
            <ul className="max-sm:w-48">
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>PHP</li>
              <li>React</li>
              <li>Wordpress</li>
              <li>Firebase</li>
              <li>Tailwind</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>Express.js</li>
              <li>Node.js</li>
              <li>Jira</li>
              <li>Git & Github</li>
              <li>Postman</li>
              <li>AWS S3</li>
              <li>Webpack</li>
            </ul>
          </div>
          <div className="design">
            <ul className="max-sm:w-48">
              <li>Znajomość zagadnień UX/UI</li>
              <li>Figma</li>
              <li>Adobe Illustrator</li>
              <li>Adobe Photoshop</li>
            </ul>
          </div>
          <div>
            <ul className="max-sm:w-48">
              <li>Język angielski</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="coming-soon flex flex-row justify-center pb-20 ">
        <div className="text-left w-11/12">
          <h1 className="text-center tracking-widest">W planach:</h1>
          <p>
            Typescript - Obecnie uczę się i pracuję nad aplikacją z użyciem
            technologii Typescript, Sass i React, która będzie służyła do
            zarządzania zespołami i projektami. Później zamierzam wypróbować
            Vue.js lub Next.js.
          </p>
        </div>
      </div>
      <div className="contact pb-20">
        <h1 className="text-center tracking-widest">Kontakt:</h1>
        <div>
          <h2 className="text-center">Email: menclickowski@gmail.com</h2>
          <h2 className="text-center">Telefon: 518630931</h2>
        </div>
      </div>
    </div>
  );
}
