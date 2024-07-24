import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

interface FAQProps {
  question: string;
  answer: string | React.ReactNode;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "How it work?",
    answer: <div>
      <span
        className={'font-semibold'}>WOLFX</span>{` enables you to work in your application, use your own libraries, and connect to your production environment during workflow execution over HTTPS.`}
      <br/>
      <br/>
      <span>{`The framework exports the client you use to define and serve your workflows and their steps over HTTPS. The workflows can be added to your preferred framework.
         During workflow execution WOLFX makes HTTPS requests to your Endpoint for just-in-time content and Subscribers resolution`}</span>
    </div>,
    value: "item-1",
  },
  {
    question: "Can I use WOLFX free of charge?",
    answer:
      "Yes, you can. If you send less than 10K events per month, 5 requests per second, then WOLFX is entirely free. Another option is to deploy the Open-Source version of WOLFX onto your own infrastructure, but that does not give you unique SLA and global redundancy we have in the Cloud version of WOLFX.",
    value: "item-2",
  },
  {
    question:
      "What is a notification?",
    answer:
      "A notification is any message sent over any channel, after the WOLF logic engine, WOLF user preferences, and your configuration calculated and crafted the message. A notification can be sent to an email, In-App notification center, chat, push, and more.",
    value: "item-3",
  },
  {
    question: "Can I send more than 1 million events a month on WOLF System?",
    answer: "Yes, you absolutely can. Our managed cloud system was built to scale with your usage, so you don’t have to worry about it.",
    value: "item-4",
  },
  {
    question:
      "How can I contact support?",
    answer:
      "You can contact support through Bug Report(https://dash.wolfx.app/contribute/bug-report) or directly email us at support@wolfx.app.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({question, answer, value}: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
