// Needs modifications before use

import { useState, useEffect } from "react";

type props = {
  title: string;
};

export default function PageTitle({ title }: props) {
  const [animateTitle, setAnimateTitle] = useState(false);

  useEffect(() => {
    setAnimateTitle(true);
  }, []);

  return (
    <section className="ProjectsTitleSection">
      <h2 className="PageTitleProjects">
        {title.split("").map((char, index) => {
          return (
            <span
              key={index}
              className={`MainProjectLetter ${animateTitle ? "show" : ""}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {char}
            </span>
          );
        })}
      </h2>
    </section>
  );
}
