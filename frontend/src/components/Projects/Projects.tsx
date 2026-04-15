import { forwardRef } from 'react';
import { FaGithub, FaFigma } from "react-icons/fa";
import ExpandableCard from '../Shared/ExpandableCard/ExpandableCard';
import ImageCarousel from '../Shared/ImageCarousel/ImageCarousel';
import TechIcons from '../Shared/TechIcons/TechIcons';
import './Projects.css';
import '../Experience/Experience.css';


const Projects = forwardRef<HTMLDivElement, {}>((props, ref) => {
    return (
        <div ref={ref} className="project-box">
            <h2 className="project-heading">Projects</h2>
            <section className='project-section'>
                <ExpandableCard title="Marketplace application" description="Fullstack project - Knit&Sell" other="School project">
                    <TechIcons tech={["React", "TypeScript", "JavaScript", "NodeJs", "ExpressJsLight", "PostgreSQL", "Cloudinary"]}/>
                    <p>A fullstack web application for buying and selling handmade items. The application consists of a frontend built with React, a backend built with Node.js and Express and a database using PostgreSQL. Images are uploded to Cloudinary.</p>
                    <br />
                    <p>This project not only taught me fullstack development but also how to dockerize the application, build pipelines and deploy it to production.</p>
                    <br />
                    <a
                        href="https://github.com/annivm/knit-and-sell"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaGithub />
                        Check it on GitHub
                    </a>
                    <br />
                    <ImageCarousel project="knitandsell"/>
                </ExpandableCard>
                <ExpandableCard title="Portfolio Website" description="Personal portfolio website built with React" other="Personal project">
                    <TechIcons tech={["React", "TypeScript", "Figma"]}/>
                    <p>This is the portfolio website you are currently viewing. Started as a personal project to showcase my skills and projects.</p>
                    <br />
                    <p>The website is built with React, focusing on responsive design and user experience.</p>
                    <br />
                    <p>This project was fun but also educational as I experimented with my visions and learned how to implement them.</p>
                    <br />
                    <p>Originally this site was made with Javascript, but now its updated to Typescript.</p>
                    <br />
                    <a
                        href="https://github.com/annivm/Portfolio-Website"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaGithub />
                        Check it on GitHub
                    </a>
                </ExpandableCard>
                <ExpandableCard title="Design project" description="Niitty website redesign" other="School project, teamwork">
                    <TechIcons tech={["Figma"]}/>
                    <p>This is the course project for the design and accessibility course. </p>
                    <p>
                        The aim was to make a better version of an existing website with improved accessibility and design principles. (Original website:
                        <a
                            className='inline-link'
                            href="https://sites.tuni.fi/perheinfo/"
                            target="_blank"
                            rel="noopener noreferrer">
                             perheinfo.fi</a> )
                    </p>
                    <p>We had a actual customer for this and competed against other teams who also worked on the same project. At the end of the course, we presented our work for the customer and other teams, and voted for the best one. Ours won! </p>
                    <p>This was made with Figma. Along the process, we had meetings with the customer and got feedback and requests for improvements.</p>
                    <a
                        href="https://www.figma.com/proto/vxJ6OUat5h4qBHtblg1n0Y/NIITTY2?node-id=2006-2&t=J4lXsLztXXk8r4Kn-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaFigma />
                        View sitemap draft on Figma (password: niitty)
                    </a>
                    <a
                        href="https://www.figma.com/proto/vxJ6OUat5h4qBHtblg1n0Y/NIITTY2?node-id=4-3&t=arX6qdsiEROYTyxk-1&scaling=min-zoom&content-scaling=fixed&page-id=4%3A2&starting-point-node-id=4%3A3"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaFigma />
                        View desktop prototype on Figma (password: niitty)
                    </a>
                    <a
                        href="https://www.figma.com/proto/vxJ6OUat5h4qBHtblg1n0Y/NIITTY2?node-id=48-132&p=f&t=FBlSziF0ZANRKqE9-1&scaling=min-zoom&content-scaling=fixed&page-id=48%3A34&starting-point-node-id=48%3A132"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaFigma />
                        View mobile prototype on Figma (password: niitty)
                    </a>
                    <br />
                    <ImageCarousel project="niitty"/>
                </ExpandableCard>
                <ExpandableCard title="Reparo" description="Frontend for imaginary startup" other="School project, teamwork">
                    <TechIcons tech={["React", "JavaScript", "Figma"]}/>
                    <p>We created imaginary startup for this course. It consisted two teams: frontend and backend. During the course we had a customer buing our product, who gave us suggestions and asked for improvements.</p>
                    <p>Reparo offers a place where people meet to get their clothes fixed or to provide repairing services. You can list your broken items for repairing or you can offer to repair others. Afterwards you can give review for the user. We also implemented admin panels for managing users and content.</p>
                    <p>As member of the frontend-team, I participated designing the application. This web application is made with React and designed with Figma.</p>
                    <a
                        href="https://github.com/annivm/Reparo-frontend"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaGithub />
                        Check it on GitHub
                    </a>
                    <a
                        href="https://www.figma.com/proto/g6yXIXmVkbFGfU6IPftwUr/Reparo?node-id=50-265&p=f&t=e2vhmWfVHHD7HKY8-1&scaling=scale-down&content-scaling=fixed&page-id=50%3A111&starting-point-node-id=50%3A114"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaFigma />
                        View desktop prototype on Figma (password: reparo)
                    </a>
                    <a
                        href="https://www.figma.com/proto/g6yXIXmVkbFGfU6IPftwUr/Reparo?node-id=38-10&p=f&t=ezELkXoH3dVTwcQn-1&scaling=scale-down&content-scaling=fixed&page-id=6%3A2&starting-point-node-id=38%3A10"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaFigma />
                        View mobile prototype on Figma (password: reparo)
                    </a>
                    <br />
                    <ImageCarousel project="reparo" />
                </ExpandableCard>
                <ExpandableCard title="Cocktail app" description= "Mobile app for Android built with Kotlin and Jetpack Compose" other="School project, teamwork">
                        <TechIcons tech={[ "Kotlin", "Android"]}/>
                        <p>A course project for mobile app development course.</p>
                        <p>Users can view cocktail recipes by category or use search. The app shows detailed information about each recipe and an image of the cocktail.</p>
                        <p>All the data is fetched from a REST API.</p>
                        <p>The app has also a feature to locate users nearest grocery stores and Alkos.</p>
                        <p>Interface was made also in Finnish</p>
                        <p>Disclaimer: Shopping list feature is not functional in the app, but it was planned for future development.</p>
                        <br />
                        <a
                            href="https://github.com/annivm/cocktail-app"
                            target="_blank"
                            rel="noopener noreferrer">
                            <FaGithub />
                            Check it on GitHub
                        </a>
                        <br />
                        <ImageCarousel project="cocktail" button="light"/>
                </ExpandableCard>
                <ExpandableCard title="Today - Event manager" description="Java-based project for fetching events from different sources" other="School project">
                    <TechIcons tech={["Java"]}/>
                    <p>Java-based command line application for fetching events from a REST API, CSV and SQLite.</p>
                    <p>This project was made with Java and Maven and used OpenCSV, Picocli, Jackson and SQLite</p>
                    <p>User can search events by date, filter events by category and add events.</p>
                    < br />
                        <a
                            href="https://github.com/annivm/Java-course-and-project/tree/main/project"
                            target="_blank"
                            rel="noopener noreferrer">
                            <FaGithub />
                            Check it on GitHub
                        </a>
                    < br />
                    <ImageCarousel project="java" />
                </ExpandableCard>
                <ExpandableCard title="Coming soon" description="Stay tuned"></ExpandableCard>
            </section>
        </div>
    )
});

export default Projects;