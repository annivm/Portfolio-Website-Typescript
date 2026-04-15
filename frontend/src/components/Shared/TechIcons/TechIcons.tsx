import { React, NodeJs, Figma, ExpressJsLight, PostgreSQL, Cloudinary, JavaScript, TypeScript, Kotlin, Android, Java } from "developer-icons";
import './TechIcons.css';

const icons = {
    React,
    TypeScript,
    JavaScript,
    NodeJs,
    ExpressJsLight,
    PostgreSQL,
    Cloudinary,
    Figma,
    Kotlin,
    Android,
    Java
} as const; // Use 'as const' to ensure the type is inferred as a literal

type IconName = keyof typeof icons; // Create a type for the keys of the icons object

interface IconProps {
    tech: IconName[]; // Array of valid icon names
}


const TechIcons = ({ tech = [] }: IconProps) => {

    return (
        <section>
            <p>Technologies used:</p>
            {/* Map through the tech array and render the icons */}
            <div className="tech-icons">
                {tech.map((name) => {
                    const Icon = icons[name];
                    if(!Icon) return null; // If the icon is not found, return null

                    // Change the type to React component and render it
                    const IconComponent = Icon as React.FC<{ size: number }>;
                    return <IconComponent key={name} size={32} />;
                })}
            </div>
        </section>
    )
}

export default TechIcons;