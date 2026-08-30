import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description:
            "Writing maintainable, scalable code that stands the test of time.",
    },
    {
        icon: Rocket,
        title: "Performance",
        description:
            "Optimizing for speed and delivering lightning-fast user experiences.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Working closely with teams to bring ideas to life.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description:
            "Staying ahead with the latest technologies and best practices.",
    },
];


export default function About() {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relatiove z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* {left col} */}
                    <div className="space-y-8">
                        <div className="animate-y-8">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">Abount Me</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground ">
                            Building the future,
                            <span className="font-serif italic font-normal text-white">one component at a time.</span>
                        </h2>
                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>Over the course of my projects, I have gained hands‑on experience with React, JavaScript, and MySQL for
                                building dynamic front‑end interfaces and managing relational data. I’ve deployed applications using Vercel,
                                automated workflows with GitHub Actions, and strengthened my back‑end knowledge through Java Core, the SpringBoot
                                Framework, and Hibernate. My toolkit also includes Bootstrap, TailwindCSS, Postman, Git, and designing REST APIs
                                for scalable systems</p>
                            <p>These skills have given me confidence to deliver projects with efficiency and precision. I enjoy applying them to solve
                                real problems, whether it’s optimizing database queries, styling responsive UIs, or automating deployments. My familiarity
                                with both front‑end and back‑end stacks allows me to collaborate across teams and adapt quickly to new challenges. This
                                versatility reflects my dedication and passion for software development, making me a reliable contributor to any project I take on.</p>
                        </div>
                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium text-foreground">My mission is to create digital experience that are not justify
                                functional, but truly delightful - products that users love to use
                                and developers love to maintain.
                            </p>
                        </div>
                    </div>
                    {/* {right col} */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {
                            highlights.map((items, idx) => (
                                <div key={idx} className="glass p-6 rounded-2xl animate-fade-in "
                                    style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20">
                                        <items.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">{items.title}</h3>
                                    <p className="text-sm text-muted-foreground">{items.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}