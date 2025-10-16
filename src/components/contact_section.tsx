import { ContactForm } from "./contact/contact_form"
import { ContactInformation } from "./contact/contact_information"

export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Contact <span className="text-primary"> Me</span>
            </h2>

            <p className="text-center text-muted-forground mb-12   max-w-2xl mx-auto">
                If you want to hire me for anything, let me know
            </p>
            <div className="container mx-auto max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <ContactInformation />
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}