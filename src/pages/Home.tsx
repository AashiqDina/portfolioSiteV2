import { Link } from "react-router-dom";
import GitHubIcon from "../assets/githubIcon.svg?react";
import LinkedInIcon from "../assets/linkedinIcon.svg?react";
import AppButton from "../components/ui/AppButton";
import { useTheme } from "../context/ThemeContext";
import "./Home.css";
import Moon from "../components/overlays/Moon";
import HomeTitle from "../components/ui/HomeTitle";
import "../components/ui/PageTitle.css";
import { useState } from "react";

type props = {
  closeMenu: () => void;
};

export default function Home({ closeMenu }: props) {
  const [viewWorkMenu, setViewWorkMenu] = useState<boolean>(false);
  const { theme } = useTheme();

  return (
    <main className="HomeMainContent">
      <Moon
        menuOpen={viewWorkMenu}
        closeMenu={() => {
          setViewWorkMenu(false);
        }}
      />
      <section className="container">
        <HomeTitle title={"Aashiq Dina"} />
        <p style={theme.text} className="paragraph1">
          Junior Software Engineer
        </p>

        <article className="HomeButtons">
          <AppButton
            text="GitHub"
            onPress={() =>
              (window.location.href = "https://github.com/AashiqDina")
            }
            style={
              {
                "--hover-background": theme.textHoverAnimation.background,
                ...theme.secondaryButton,
              } as React.CSSProperties
            }
            textStyle={theme.text}
            className="GitHubLinkedInButton"
            leftIcon={
              <GitHubIcon
                style={theme.svgIcons}
                className="GitHubLinkedInIcon"
              />
            }
          />

          <div className="ViewMyWork">
            <AppButton
              text={"View My Work"}
              onPress={() => {
                closeMenu();
                setViewWorkMenu(true);
              }}
            />
          </div>

          <AppButton
            text="LinkedIn"
            onPress={() =>
              (window.location.href =
                "https://www.linkedin.com/in/aashiq-dina-339842227/")
            }
            style={
              {
                "--hover-background": theme.textHoverAnimation.background,
                ...theme.secondaryButton,
              } as React.CSSProperties
            }
            textStyle={theme.text}
            className="GitHubLinkedInButton"
            leftIcon={
              <LinkedInIcon
                style={theme.svgIcons}
                className="GitHubLinkedInIcon"
              />
            }
          />
        </article>
      </section>
    </main>
  );
}
