import { Link } from "react-router-dom";
import GitHubIcon from "../assets/githubIcon.svg?react";
import LinkedInIcon from "../assets/linkedinIcon.svg?react";
import HomeQuickSection from "../components/home/HeaderMenuSection";
import AppButton from "../components/ui/AppButton";
import { useTheme } from "../context/ThemeContext";
import "./Home.css";

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
        {/* <article className="GitLinkedInSection">
          <AppButton
            text="GitHub"
            onPress={() =>
              (window.location.href = "https://github.com/AashiqDina")
            }
            style={
              {
                "--hover-background": theme.textHoverAnimation.background,
                ...theme.secondaryButton,
                ...gitLinkedStyles,
              } as React.CSSProperties
            }
            textStyle={theme.primaryText}
            className="GitHubLinkedInButton"
            leftIcon={
              <GitHubIcon
                style={theme.svgIcons}
                className="GitHubLinkedInIcon"
              />
            }
          />
          <Link to={"/"}>
            <h1 className="HeaderTitle Home" style={theme.primaryText}>
              Aashiq Dina
            </h1>
          </Link>
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
                ...gitLinkedStyles,
              } as React.CSSProperties
            }
            textStyle={theme.primaryText}
            className="GitHubLinkedInButton"
            leftIcon={
              <LinkedInIcon
                style={theme.svgIcons}
                className="GitHubLinkedInIcon"
              />
            }
          />
        </article> */}
        {/* <article className="ShortAboutMeDescription">
          <p style={theme.primaryText}>
            Personal portfolio built and designed by me. With a background spanning Graphics, Art,
            Maths, Physics, 3D Design and Computer Science, I bring a mix of creative thinking and
            technical problem-solving to software development. Currently working as a Software
            Engineering Intern at a startup, building real-world systems in a fast-paced
            environment.
          </p>
        </article> */}
        {/* <article className="QuickButtons">
                    {pages.map((page) => {
                            return (
                                <AppButton
                                    text={page.name}
                                    key={page.name}
                                />
                            )
                        })
                    }
                </article> */}
        {/* <HomeQuickSection /> */}
      </section>
    </main>
  );
}
