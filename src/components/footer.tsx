import { ArrowUp } from "lucide-react"


export const Footer = () => {
    return (
        <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">

            <p className="text-center text-muted-forground">
                &copy; {new Date().getFullYear()} Toby Crust. All rights reserved.
            </p>
            <a href="#hero" className="p-2 rounded-full hover:bg-primary/20 transition-colors">
                <ArrowUp className="h-4 w-4" />
            </a>


        </footer>
    )
}   