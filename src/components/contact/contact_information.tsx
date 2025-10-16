import { CircleUserRound, Mail, MapPin, Phone } from "lucide-react"

export const ContactInformation = () => {



    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
                <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>

                <div className="space-y-6 justify-center">
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-medium"> Email</h4>
                            <a
                                href="mailto:tobycrust@gmail.com"
                                className="text-muted-forground hover:text-primary transition-colors"
                            >
                                tobycrust@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-medium"> Phone</h4>
                            <a
                                href="tel:0425843487"
                                className="text-muted-forground hover:text-primary transition-colors"
                            >
                                0425843487
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-medium"> Location</h4>
                            <a
                                className="text-muted-forground hover:text-primary transition-colors"
                            >
                                Vaulcluse
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <CircleUserRound className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-medium"> Linkedin</h4>
                            <a
                                target="_blank"
                                href="https://www.linkedin.com/in/toby-crust-a6a2a2245/"
                                className="text-muted-forground hover:text-primary transition-colors"
                            >
                                Toby Crust
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}