import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"

const project = [
    {
        id: 1,
        title: "Stocks",
        description: "World map stock viewer",
        image: "/projects/stocks-map.png",
        demoUrl: "https://simple-stocks.vercel.app/world"
    },
    {
        id: 2,
        title: "Game of Life",
        description: "Conway's Game of Life",
        image: "/projects/game-of-life.png",
        demoUrl: "https://leanforward-backend.github.io/game-of-life/build/web/index.html"
    },
    {
        id: 3,
        title: "Gym Orm app",
        description: "Gym Orm app",
        image: "/projects/orm.png",
        demoUrl: "https://gym-orm.vercel.app/",
    },
    {
        id: 4,
        title: "Weather App",
        description: "Weather App",
        image: "/projects/weather-app.png",
        demoUrl: "#"
    },
    {
        id: 5,
        title: "Coding",
        description: "Learn to code",
        image: "/projects/Seagulls.png",
        demoUrl: "https://23-mddn342.github.io/project-2-randomised-collections-TobyCrust/"
    }
]

export const Projects = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary"> Projects</span>
                </h2>

                <p className="text-center text-muted-forground mb-12 max-w-2xl mx-auto">
                    Here are projects I have created in my spare time. I am only able to talk about work projects and not display them.
                </p>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full max-w-5xl"
                >
                    <CarouselContent>
                        {project.map((projects, key) => (
                            <CarouselItem key={key} className="md:basis-1/2 lg:basis-1/3 cursor-pointer" onClick={() => projects.demoUrl ? window.open(projects.demoUrl, "_blank") : null}>
                                <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover h-58">
                                    <img src={projects.image} alt={projects.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    )
}