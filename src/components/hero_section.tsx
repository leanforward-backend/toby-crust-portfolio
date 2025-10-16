import { Button } from "./ui/button"

export const HeroSection = () => {
    return <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">

        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1"> Toby</span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Crust</span>

                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    I've dipped my fingers into just about every tech related field and I'm here to bring my expertise to you for cash :)
                </p>

                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <Button className="rounded-lg" asChild>
                        <a href="#projects">
                            View example projects
                        </a>
                    </Button>
                </div>

            </div>

        </div>
    </section>
}