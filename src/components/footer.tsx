import { ArrowUp, Github, Linkedin } from "lucide-react"
import { Button } from "./ui/button"


export const Footer = () => {
    return (
        <footer className="py-4 px-4 bg-card relative border-t border-border mt-12 pt-6 flex flex-wrap justify-between items-center">

            <div className="flex items-center gap-2">
                <Button
                    variant="ghost"
                    size="icon"
                    asChild
                >
                    <a href="https://github.com/leanforward-backend?tab=repositories" target="_blank" rel="noopener noreferrer">
                        <Github className="size-6" />
                    </a>
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    asChild
                >
                    <a href="https://www.linkedin.com/in/toby-crust-a6a2a2245/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="size-6" />
                    </a>
                </Button>
            </div>
            <a href="#hero" className="p-2 rounded-full hover:bg-primary/20 transition-colors">
                <ArrowUp className="h-4 w-4" />
            </a>


        </footer>
    )
}   