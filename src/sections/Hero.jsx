import Button from '@/components/Button';
import { AnimatedBorderButton } from '@/components/AnimatedBorderButton'
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { FaGithub, FaLinkedin, } from "react-icons/fa";

const skills = [
    "React", "JavaScript", "Mysql", "Vercel", "Github Actions",
    "Java core", "SpringBoot Framework", "Hibernate", "Bootstrap",
    "Tilewindcss", "Postman", "Git", "Rest APi's"
]


export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* {bg} */}
            <div className="absolute inset-0">
                <img src="/hero-bg.jpg"
                    alt="Hero image"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background "></div>
            </div>


            {/* {green  dots} */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div key={i}

                        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: "#20b2a6",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`, animationDelay: `${Math.random() * 5}s`
                        }}
                    />))}
            </div>

            {/* {content} */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* {left-col} */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-2 py-2 rounded-fill glass text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                Java Full Stack Developer

                            </span>
                        </div>

                        {/* {headline} */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg-text-7xl font-bold leadinf-tight animate-fade-in animation-delay-100">
                                Crafting <span className="text-primary glow-text">digital</span>
                                <br />
                                Experience with
                                <br />
                                <span className="font-serif italic font-normal text-white ">
                                    Precision.
                                </span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                                Hi, I'm Bhanu Prakash — a Software Engineer specializing in Front‑End with React, JavaScript, HTML & CSS,
                                and Back‑End with Java & Spring Boot, also experienced with frameworks and tools like Material UI, Vite, and API integration,
                                building modern, scalable applications based on my academic qualifications and hands‑on projects.</p>
                        </div>


                        {/* {cta} */}
                        <div className='flex flex-wrap gap-4 animate-fade-in animation-delay-300'>
                            <Button size="lg">Contact Me <ArrowRight className='w-5 h-5' />
                            </Button>
                            <AnimatedBorderButton>
                                <Download className="w-5 h-5" />
                                Download CV
                            </AnimatedBorderButton>
                        </div>

                        {/* {social links} */}
                        <div className='flex items-center gap-4 animate-fade-in animation-delay-400'>
                            <span className='text-sm text-muted-foreground'>Follow:</span>
                            {[
                                { icon: FaGithub, href: "https://github.com/bhanu917" },
                                { icon: FaLinkedin, href: "#" },
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    className='p-2 rounded-full glass hover:bg-primary transition-all duration-300'
                                >
                                    <social.icon className="w-5 h-5" /> {/* ✅ render as component */}
                                </a>
                            ))}
                        </div>



                    </div>
                    {/* {right-col} */}
                    <div className='relative animate-fade-in animation-delay-300'>
                        {/* {profile img} */}
                        <div className='relative max-w-md mx-auto'>
                            <div
                                className="absolute inset-0 rounded-3xl bg-gradient-to-br
             from-primary/30 via-transparent to-primary/10 
             blur-2xl animate-pulse"
                            />

                            <div className='relative glass rounded-3xl glow-border'>
                                <img src="/my-face.jpeg" alt="bhanu prakash" className='w-full aspect-[3/5] object-cover rounded-3xl' />

                                {/* {floatinf badge} */}
                                <div className='absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float'>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-3 h-3 bg-gren-500 rounded-full animate-pulse' />
                                        <span>Available for work</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* {skillls} */}


                <div className='mt-20 animate-fade-in animation-delay-600'>
                    <p className='text-sm text-muted-foreground mb-6 text-center '>
                        Techologies I work with
                    </p>
                    <div className='relative overflow-hidden'>
                        <div className='flex animate-marquee'>
                            {[...skills, ...skills].map((skill, idx) => (
                                <div key={idx} className='flex-shrink-0 px-8 py-4'>
                                    <span className='text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground'>{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-8 left-1/2 -translate-x-1/2
animate-fade-in animation-delay-800'>
                <a href='#about'
                    className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary">
                    <span className='text-xs uppercase tracking-wider'>Scroll</span>
                    <ChevronDown className='w-8 h-6 animate-bounce' />
                </a>
            </div>
        </section>
    )
}