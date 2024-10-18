import React, { useEffect, useState } from "react";
import "./Hobbies.css";
import hobbytexts from "../assets/hobbyTexts.json";

export default function Hobbies() {
  const [hobbyState, sethobbyState] = useState("movies");

  const importAll = (r) => r.keys().map(r);
  const images = importAll(
    require.context("../assets/images", false, /\.(png|jpe?g|svg)$/)
  );
  const imagesbooks = importAll(
    require.context("../assets/imagesbooks", false, /\.(png|jpe?g|svg)$/)
  );
  const imagesgames = importAll(
    require.context("../assets/imagesgames", false, /\.(png|jpe?g|svg)$/)
  );
  const imagesmusic = importAll(
    require.context("../assets/imagesmusic", false, /\.(png|jpe?g|svg)$/)
  );
  const imageshist = importAll(
    require.context("../assets/imageshist", false, /\.(png|jpe?g|svg)$/)
  );
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    // console.log(hobbyState);
    // console.log(collection);
    if (hobbyState === "movies") {
      setCollection(images);
    } else if (hobbyState === "books") {
      setCollection(imagesbooks);
    } else if (hobbyState === "games") {
      setCollection(imagesgames);
    } else if (hobbyState === "music") {
      setCollection(imagesmusic);
    } else if (hobbyState === "history") {
      setCollection(imageshist);
    }
  }, [hobbyState]);

  return (
    <div className="text-orange-400 hobby-wrapper py-10">
      <div className="switch-hobbbies xl:flex xl:flex-row justify-evenly mb-10">
        <h1 className="hobby-header text-center text-5xl max-sm:text-2xl">
          Kategorie
        </h1>
        <div className="switch-hobbbies--wrapper flex flex-row justify-center max-sm:text-base max-sm:font-extralight px-4">
          <button
            className={`px-4 py-2 mr-2 ${
              hobbyState === "movies"
                ? "bg-customRed text-mainColor"
                : "border-customRed border-2 text-customRed"
            }`}
            onClick={() => sethobbyState("movies")}
          >
            Filmy
          </button>
          <button
            className={`px-4 py-2 mr-2 ${
              hobbyState === "games"
                ? "bg-customRed text-mainColor"
                : "border-customRed border-2 text-customRed"
            }`}
            onClick={() => sethobbyState("games")}
          >
            Gry
          </button>
          <button
            className={`px-4 py-2 mr-2 ${
              hobbyState === "books"
                ? "bg-customRed text-mainColor"
                : "border-customRed border-2 text-customRed"
            }`}
            onClick={() => sethobbyState("books")}
          >
            Książki
          </button>
          <button
            className={`px-4 py-2 mr-2 ${
              hobbyState === "music"
                ? "bg-customRed text-mainColor"
                : "border-customRed border-2 text-customRed"
            }`}
            onClick={() => sethobbyState("music")}
          >
            Muzyka
          </button>
          <button
            className={`px-4 py-2  ${
              hobbyState === "history"
                ? "bg-customRed text-mainColor"
                : "border-customRed border-2 text-customRed"
            }`}
            onClick={() => sethobbyState("history")}
          >
            Historia
          </button>
        </div>
      </div>

      <div className="flex flex-row justify-center">
        <p className=" mb-4 w-11/12">
          Cześć, jestem Michał Niezgoda, Wasz kandydat na stanowisko junior
          front-end/full-stack developera. Programowania nauczyłem się
          samodzielnie od zera. Na pomysł na taką ścieżkę rozwoju złożyły się
          dwa czynniki. Po pierwsze z ciekawości, lubię się uczyć i dowiadywać
          nowych rzeczy, rozwijać i poszerzać horyzonty. Po drugie, żeby się
          sprawdzić i sobie coś udowodnić. Głównie motywowała mnie sama chęć
          podjęcia wyzwania, które z początku wydawało się kompletnie
          abstrakcyjne i szalone, ale sam proces nauki, pomimo wielu trudności,
          okazał się bardzo satysfakcjonujący i wydaje mi się, że jestem gotowy
          do tego, żeby sprawdzić swoje umiejętności w branży, zdobyć
          doświadczenie i uczyć się jak tworzyć aplikacje w zespołach. Zawodowo
          pracowałem w branży poligraficznej jako introligator, a później grafik
          komputerowy.
          <br></br>
          Uznałem, że aby opowiedzieć coś więcej o sobie, zamiast męczyć innych
          długimi opisami, stworzę galerię, która będzie służyła jako wizualna
          prezentacja moich zainteresowań, co (mam nadzieję) będzie
          przyjemniejszym doświadczeniem dla odbiorcy.
        </p>
      </div>
      <div className="flex flex-row justify-center ">
        <div className="images-list w-11/12 ">
          <p className=" mb-4">{hobbytexts[hobbyState]}</p>
          {collection.map((image, index) => (
            <img key={index} src={image} alt={`image-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
