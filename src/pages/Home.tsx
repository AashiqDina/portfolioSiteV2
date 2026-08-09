import { Link } from "react-router-dom";
import GitHubIcon from "../assets/githubIcon.svg?react";
import LinkedInIcon from "../assets/linkedinIcon.svg?react";
import AppButton from "../components/ui/AppButton";
import { useTheme } from "../context/ThemeContext";
import "./Home.css";
import Moon from "../components/overlays/Moon";
import "../components/ui/PageTitle.css";
import { useState } from "react";
import PageTitle from "../components/ui/PageTitle";

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
        <PageTitle
          title={"Aashiq Dina"}
          as={"h1"}
          className="header1"
          addShadow={true}
        />
        <PageTitle
          title={"Junior Software Engineer"}
          as={"p"}
          className="paragraph1"
          delaySpeed={0.5}
          addShadow={true}
        />

        <article className="HomeButtons">
          <AppButton
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
            className="buttonVariant2"
            leftIcon={
              <GitHubIcon
                style={theme.svgIcons}
                className="GitHubLinkedInIcon"
              />
            }
          >
            GitHub
          </AppButton>

          <div className="ViewMyWork">
            <AppButton
              onPress={() => {
                closeMenu();
                setViewWorkMenu(true);
              }}
            >
              View My Work
            </AppButton>
          </div>

          <AppButton
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
            className="buttonVariant2"
            leftIcon={
              <LinkedInIcon
                style={theme.svgIcons}
                className="GitHubLinkedInIcon"
              />
            }
          >
            LinkedIn
          </AppButton>
        </article>
      </section>
    </main>
  );
}
