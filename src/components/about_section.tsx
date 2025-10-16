import { Button } from "./ui/button"


export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-col-1 md:grid-col-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Here are some ideas for what you could hire me for
                        </h3>
                        <p className="text-muted-forground">
                            contact me if you have any questions
                        </p>
                        <p>
                            More example text underneith blah blah blah
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <Button className="rounded-lg" asChild>
                                <a href="#contact">
                                    Contact me
                                </a>
                            </Button>
                            <Button className="rounded-lg" variant="outline" asChild>
                                <a href="/toby-crust-cv.pdf" download>
                                    View my CV
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}