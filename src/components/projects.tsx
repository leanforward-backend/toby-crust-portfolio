
const project = [
    {
        id: 1,
        title: "robot",
        description: "robot project",
        image: "/projects/TopGeneral1.0000.png",
        demoUrl: "#"
    },
    {
        id: 2,
        title: "Coding",
        description: "Learn to code",
        image: "/projects/Seagulls.png",
        demoUrl: "#"
    },
    {
        id: 3,
        title: "Rendering",
        description: "Learn to render",
        image: "https://i.vimeocdn.com/video/1971185823-511d763b00ff3ecb3d6ecd5430fcf151d0288d3a5dcf7a55b28ed601a079fa67-d?f=webp",
        demoUrl: "#",
        gitUrl: "#"
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
                    Here are some things to look at let me know If you would like me to tech you some stuff
                </p>

                <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {project.map((projects, key) => (
                        <div
                            key={key}
                            className=" group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img src={projects.image} alt={projects.title} className="w-full h-full object-cover transition-transform duration-500 group-hover-scale-110" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}