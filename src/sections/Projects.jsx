import { ArrowUpRight } from "lucide-react"
import { FaGithub } from "react-icons/fa"

const projects = [
    {
        title: "Utube",
        description:
            "I developed a custom YouTube application using React, showcasing my ability to build dynamic front‑end interfaces and integrate APIs for real‑time video content. The project demonstrates responsive design, smooth navigation, and a clean UI powered by modern frameworks like TailwindCSS and Bootstrap."
        ,
        image: "/projects/utube.png",
        tags: ["React", "Javascript", "Material-UI FW", "firestore", "Rapid-API's"],
        link: "https://bhanu917.github.io/my_utube/",
        github: "https://github.com/bhanu917/my_utube.git"
    },
    {
        title: "E-commerce",
        description: "I built a full‑featured e‑commerce shopping website using React, integrating product listings, category filtering, and a dynamic shopping cart. The application showcases responsive design with TailwindCSS and Bootstrap, while leveraging REST APIs and MySQL for secure data management. It demonstrates my ability to combine front‑end interactivity with back‑end logic to deliver a seamless shopping experience."
        ,
        image: "/projects/ecommers.png",
        tags: ["React", "Javascript", "Bootstrap FW", "Api's", "Firebase", "FireStore"],
        link: "https://bhanu917.github.io/ecommers-js/",
        github: "https://github.com/bhanu917/ecommers-js.git"

    }

]

export default function Projects() {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            {/* {bg glow} */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-higlight/5 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 relative z-10">
                {/* {section header } */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Featured Work</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 mr-1  text-secondary-foreground">
                        Projects that
                        <span className="font-serif italic font-normal text-white px-1 ml-4">
                            make an impact.
                        </span>
                    </h2>

                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A selection of my recent work, from complex web application to innovative tool that solve real-world problems.
                    </p>
                </div>

                {/* {.projects grid} */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div key={idx} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                            style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                        >
                            {/* {image} */}
                            <div className="relative overflow-hidden aspect-video">
                                <img src={project.image}
                                    alt={project.title}
                                    className="w-full h-full  transition-transform  duration-700 group-hover:scale-110"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-card
                                vis-card/50 to-transparent opacity-60
                                "
                                />
                                {/* {overlay links} */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4  opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                    >
                                        <ArrowUpRight className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                    >
                                        <FaGithub className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                            {/* {content} */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transitions-colors">
                                        {project.title}  </h3>
                                    <ArrowUpRight className="w-5 h-5 text-muted-foreground
                                    group-hover:text-primary
                                    group-hover:translate-x-1 group-hover:translate-y-1 transition-all" />
                                </div>
                                <p className="text-muted-foreground text-sm">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagidx) =>
                                        <span key={tagidx} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}