import AppButton from "../components/ui/AppButton";
import './Home.css'
import GitHubIcon from "../assets/githubIcon.svg?react";
import LinkedInIcon from "../assets/linkedinIcon.svg?react"
import { useTheme } from "../context/ThemeContext";


export default function Home(){
    const { theme } = useTheme()

    return (
        // display flex flex direction column
        <main className="HomeMainContent">
            {/* top row - GitHub LinkedIn */}
            <section className="GitLinkedInSection">
                <AppButton
                    text="GitHub"
                    onPress={() => window.location.href = 'https://github.com/AashiqDina'}
                    style={{"--hover-background": theme.textHoverAnimation.background} as React.CSSProperties}
                    textStyle={theme.primaryText}
                    className="GitHubLinkedInButton"
                    leftIcon={
                        <GitHubIcon style={theme.svgIcons} className="GitHubLinkedInIcon"/>
                    }
                />
                <AppButton
                    text="LinkedIn"
                    onPress={() => window.location.href = 'https://www.linkedin.com/in/aashiq-dina-339842227/'}
                    style={{"--hover-background": theme.textHoverAnimation.background} as React.CSSProperties}
                    textStyle={theme.primaryText}
                    className="GitHubLinkedInButton"
                    leftIcon={
                        <LinkedInIcon style={theme.svgIcons} className="GitHubLinkedInIcon"/>
                    }
                />                        
            </section>
            {/* middle row - text */}
            {/* bottom row - buttons to pages */} 
        </main>
    )
}