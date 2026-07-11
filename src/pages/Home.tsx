import { Link } from "react-router-dom";
import GitHubIcon from "../assets/githubIcon.svg?react";
import LinkedInIcon from "../assets/linkedinIcon.svg?react";
import HomeQuickSection from "../components/home/HeaderMenuSection";
import AppButton from "../components/ui/AppButton";
import { useTheme } from "../context/ThemeContext";
import "./Home.css";
import Moon from "../components/background/Moon";

export default function Home() {
  const { theme } = useTheme();

  // const pages = [
  // 	{ name: "Projects", link: "/" },
  // 	{ name: "Experience", link: "/" },
  // 	{ name: "Education", link: "/" },
  // 	{ name: "Skills", link: "/" },
  // 	{ name: "Hobbies", link: "/" },
  // ];

  const gitLinkedStyles = {
    backgroundColor: "#00000060",
    width: "100%",
    padding: "1rem",
    borderRadius: "1rem",
  };

  return (
    <main className="HomeMainContent">
      <section className="container">
        <Moon />
        <h1 style={theme.header1}>Aashiq Dina</h1>
        <p style={theme.paragraph1}>Junior Software Engineer</p>

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
