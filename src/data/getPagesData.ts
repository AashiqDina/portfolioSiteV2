import { headerPagesData} from "../types";

// MUST CHANGE THEME TO A TYPE LATER ON, FOR NOW ITS SET TO THIS AS I BUILD UP THEME
export default function getPagesData(theme: any): headerPagesData[]{

    return [
        {
            title: "Education",
            description: "Academic background, modules and grades overview.",
            borderHoverColour: theme.HeaderHoverColor1.colour,
            path: "/education"
        },
        {
            title: "Skills",
            description: "Technical skills, tools and technologies I work with.",
            borderHoverColour: theme.HeaderHoverColor2.colour,
            path: "/skills"
        },
        {
            title: "Projects",
            description: "Personal and academic projects I've built.",
            borderHoverColour: theme.HeaderHoverColor3.colour,
            path: "/projects"
        },
        {
            title: "Experience",
            description: "Work experience and professional roles to date.",
            borderHoverColour: theme.HeaderHoverColor4.colour,
            path: "/experience"
        },
        {
            title: "Hobbies",
            description: "Interests and activities outside of development.",
            borderHoverColour: theme.HeaderHoverColor5.colour,
            path: "/hobbies"
        },
        {
            title: "Settings",
            description: "Customize preferences and application settings.",
            borderHoverColour: theme.HeaderHoverColor6.colour,
            path: "/settings"
        },
    ]

}