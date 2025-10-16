import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import emailjs from '@emailjs/browser';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"


const emailFormSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    subject: z.optional(z.string()),
    questions: z.optional(z.string()),
})


type EmailFormValues = z.infer<typeof emailFormSchema>


export const ContactForm = () => {

    const form = useForm<EmailFormValues>({
        resolver: zodResolver(emailFormSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            questions: "",
        },
    })

    const onSubmit = async (data: EmailFormValues) => {
        try {

            // const emailJsResult = await emailjs.send(
            //     'service_bvidwob',
            //     'template_unjgzur',
            //     {
            //         to_name: data.name,
            //         to_email: data.email,
            //         subject: data.subject || 'Thanks for contacting us!',
            //         message: data.message || 'No message provided',
            //     },
            //     '9q7mZH59KDwEyGWH9'
            // );

            // console.log('Confirmation email sent to user:', emailJsResult);


            const resendResult = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!resendResult.ok) {
                throw new Error('Failed to send notification email');
            }

            alert(`Thanks for getting in touch ${data.name}! You will receive a confirmation email shortly.`)
            form.reset()

        } catch (error) {
            console.error('Error:', error)
            alert('An error occurred. Please try again.')
        }
    }

    return (

        <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Hire me to work for you</h3>
            <Form {...form}>
                <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Your Name*</FormLabel>
                                <FormControl>
                                    <Input className="w-full px-4 py-3 rounded-md border border-inout bg-background" placeholder={"Your Name Here..."} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Your Email*</FormLabel>
                                <FormControl>
                                    <Input className="w-full px-4 py-3 rounded-md border border-inout bg-background" placeholder="youremail@gmail.com..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>What would you want to hire me for?*</FormLabel>
                                <FormControl>
                                    <Textarea className="w-full px-4 py-3 rounded-md border border-inout bg-background" placeholder={"Description of what work I will be doing for you..."} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="questions"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Any questions you have?</FormLabel>
                                <FormControl>
                                    <Textarea className="w-full px-4 py-3 rounded-md border border-inout bg-background" placeholder={"Any questions you have? I will get back to you as soon as possible..."} {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                        {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                </form>
            </Form>
        </div >
    )
}