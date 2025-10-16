import React from 'react';
import {
    Body,
    Button,
    Container,
    Column,
    Head,
    Html,
    Preview,
    Section,
    Text,
    Tailwind,
    Heading,
    Link,
    Hr,
} from "@react-email/components";

interface VercelInviteUserEmailProps {
    name?: string;
    email?: string;
    subject?: string;
    questions?: string;
}

export const VercelInviteUserEmail = ({
    name = 'there',
    email = '',
    subject = 'No subject provided',
    questions = 'No questions provided'
}: VercelInviteUserEmailProps = {}) => {
    const previewText = `New contact from ${name}`;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className="bg-white my-auto mx-auto font-sans px-2">
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
                        <Section className="mt-[32px]">
                            <Heading className="text-black text-[24px] font-normal p-0 my-[30px] mx-0">
                                New Contact Request
                            </Heading>
                        </Section>

                        <Text className="text-black text-[14px] leading-[24px]">
                            <strong>From:</strong> {name}
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            <strong>Email:</strong>{" "}
                            <Link
                                href={`mailto:${email}`}
                                className="text-blue-600 no-underline"
                            >
                                {email}
                            </Link>
                        </Text>

                        <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />

                        <Text className="text-black text-[14px] leading-[24px]">
                            <strong>What they want to hire you for:</strong>
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px] bg-gray-50 p-4 rounded">
                            {subject}
                        </Text>

                        {questions && questions !== 'No questions provided' && (
                            <>
                                <Text className="text-black text-[14px] leading-[24px] mt-[20px]">
                                    <strong>Their questions:</strong>
                                </Text>
                                <Text className="text-black text-[14px] leading-[24px] bg-gray-50 p-4 rounded">
                                    {questions}
                                </Text>
                            </>
                        )}

                        <Section className="text-center mt-[32px] mb-[32px]">
                            <Button
                                href={`mailto:${email}`}
                                className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                            >
                                Reply to {name}
                            </Button>
                        </Section>

                        <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />

                        <Text className="text-[#666666] text-[12px] leading-[24px]">
                            This notification was sent from your website contact form at{" "}
                            <span className="text-black">local-contracting</span>.
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default VercelInviteUserEmail;