import {Badge} from "./ui/badge";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import image from "../assets/trigger_ex.png";
import image3 from "../assets/providers-2.png";
import image4 from "../assets/flow_ex.png";

interface FeatureProps {
    title: string;
    description: string;
    image: string;
}

const features: FeatureProps[] = [
    {
        title: "Little or no code",
        description:
            "The software has a user-friendly interface and clear instructions.",
        image: image4,
    },
    {
        title: "Integrating popular services.",
        description:
            "We integrate over 100 email, SMS, and in-app notification providers so you can use them for your application.",
        image: image3,
    },
    {
        title: "Trigger Workflow",
        description:
            "Send an event trigger using one of our community built SDK's, and we will handle it from there.",
        image: image,
    },
];

const featureList: string[] = [
    "Environments",
    "Observability",
    "Testing",
    "Email",
    "Pricing",
    "Subscriber Newsletter",
    "Make Our team",
    "Bug Report",
    "Monitoring",
    "Content management",
];

export const Features = () => {
    return (
        <section
            id="features"
            className="container py-24 sm:py-32 space-y-8"
        >
            <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
                Many{" "}
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
            </h2>

            <div className="flex flex-wrap md:justify-center gap-4">
                {featureList.map((feature: string) => (
                    <div key={feature}>
                        <Badge
                            variant="secondary"
                            className="text-sm"
                        >
                            {feature}
                        </Badge>
                    </div>
                ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map(({title, description, image}: FeatureProps) => (
                    <Card key={title}>
                        <CardHeader>
                            <CardTitle>{title}</CardTitle>
                        </CardHeader>

                        <CardContent>{description}</CardContent>

                        <CardFooter>
                            <div className={'h-full flex items-center justify-center w-full'}>
                                <img
                                    src={image}
                                    alt="About feature"
                                    className="w-full mx-auto"
                                />
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
};
