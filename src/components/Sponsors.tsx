import {useTheme} from "@/components/theme-provider.tsx";

interface SponsorProps {
    icon: JSX.Element;
    name: string;
}

export const Sponsors = () => {
    const {theme} = useTheme()

    const sponsors: SponsorProps[] = [
        {
            icon: <img src={'/logo/vercel.png'} alt={'vercel logo'} width={30} height={30}/>,
            name: "Vercel",
        },
        {
            icon: <img src={'/logo/review_company.webp'} alt={'reviewC logo'} width={30} height={30}/>,
            name: "ReviewC",
        },
        {
            icon: <img src={'/logo/mongodb.svg'} alt={'mongo logo'} width={30} height={30}/>,
            name: "MongoDB",
        },
        {
            icon: <img src={'/logo/nestjs.svg'} alt={'mongo logo'} width={30} height={30}/>,
            name: "Nestjs",
        },
        {
            icon: <img src={`/logo/kafka_${theme === 'dark' ? 'dark' : 'light'}.svg`} alt={'kafka logo'} width={30} height={30}/>,
            name: "Apache Kafka",
        },
    ];

    return (
        <section
            id="sponsors"
            className="container pt-24 sm:py-32"
        >
            {/*<h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">*/}
            {/*  Investors and founders*/}
            {/*</h2>*/}

            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
                {sponsors.map(({icon, name}: SponsorProps) => (
                    <div
                        key={name}
                        className="flex items-center gap-1 text-muted-foreground/60"
                    >
                        <span>{icon}</span>
                        <h3 className="text-xl  font-bold">{name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};
