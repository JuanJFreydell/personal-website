
const experiences = [
    {
        Job_title: "Business Analyst II - Amazon Flex",
        short_description: "Productized and deployed algorithms to optimize route lengths and surge pricing, saving $15MM during Peak.",
        company: "Amazon",
        start_date: "2024-09-01",
        end_date: "2024-11-01",
        long_description: "Productized algorithms to optimize route lengths and Flex surge pricing, leading to a $15MM cost saving during Peak holiday. Engineered and deployed algorithms that optimized delivery volume and operational capacity, achieving a 12-cent improvement per paid hour across the network and significant improvements to KPIs like Deliveries per Paid Hour and Cost per Package.",
        link: "https://www.amazon.com/"
    },
    {
        Job_title: "Product Manager - Amazon Shipping",
        short_description: "Led route optimization and launched a location-based feature, improving route planning and saving $920k+.",
        company: "Amazon",
        start_date: "2024-01-01",
        end_date: "2024-09-01",
        long_description: "Led a route optimization initiative, collaborating with senior product managers and applied research scientists, utilizing clustering algorithms to pair delivery and pickup routes based on proximity to nearby shippers. Developed detailed product requirement documents for a new web application feature that implemented location-based optimization models, increasing route planning efficiency and reducing individual route transit time by an average of 15 minutes. Partnered with senior software development managers to prioritize and successfully deploy the optimization feature, resulting in a 56,000+ YTD route improvement and driving cost savings of over $920k by minimizing operational inefficiencies.",
        link: "https://www.amazon.com/"
    },
    {
        Job_title: "Program Manager - Amazon Style",
        short_description: "Owned design for theft reporting product, improved reporting accuracy by 93%, and launched order tracking dashboard.",
        company: "Amazon",
        start_date: "2022-05-01",
        end_date: "2023-12-01",
        long_description: "Owned the design and specifications for an internal product to report inventory theft. Led a cross-functional team of engineers, legal, solutions architects, and UX/UI designers to ensure reporting compliance. Improved the accuracy of theft reporting by 93%. Designed a standard process and wrote SQL to simplify adding products to physical store selection, saving buyers 15+ hours per week. Identified the need for a real-time dashboard to track customer orders, managing a team of designers and engineers. Launched the product across the physical stores network, reducing late item deliveries by 22% and reducing order defects by 34%.",
        link: "https://www.amazon.com/"
    },
    {
        Job_title: "Operations Manager - Amazon Logistics",
        short_description: "Led 15 operators, built data pipelines, reduced delivery defects by 52%, and developed labor management software.",
        company: "Amazon",
        start_date: "2021-04-01",
        end_date: "2022-05-01",
        long_description: "Led a team of 15 operators, set KPIs, and built data pipelines reducing on-time delivery defects by 52%. Built software for labor management, reducing evening labor costs by 23% at US East Delivery Stations; Applied for US patent.",
        link: "https://www.amazon.com/"
    },
    {
        Job_title: "Product Manager Intern",
        short_description: "Launched web app for marketing leads, led China product roadmap, and secured $1MM+ in funding.",
        company: "Ginmon",
        start_date: "2018-02-01",
        end_date: "2018-12-01",
        long_description: "Conducted market research and worked with usability testers to launch a web application for managing marketing leads. Owned China product roadmap and go-to-market strategy. Supported partnerships with Tencent and Alibaba to launch an AI wealth management mini-app; led a team of 4 engineers and 2 designers in implementing new features. Prepared strategy presentation decks for co-founders to pitch investors, securing $1MM + in venture funding.",
        link: "https://www.ginmon.com/"
    },
    
]

export default function WorkExperience() {
  return (
    <div 
    style={{ backgroundColor: "#f5f5ee" }}
    className="flex flex-col h-fit w-full justify-center items-center space-between bg-white mx-auto my-auto pt-4 sm:pt-8 text-black px-4 sm:px-8 lg:px-40 py-8 sm:py-16 lg:py-40">
        <div className="w-full lg:w-2/3 h-fit flex flex-col items-start justify-center gap-8 sm:gap-12 lg:gap-24 mt-8 sm:mt-12 lg:mt-20"> 
            {experiences.map((experience) => (
                <div key={experience.Job_title} className="flex flex-col lg:flex-row w-full gap-4 lg:gap-8">
                    <h3 className="text-sm sm:text-base lg:text-md font-bold w-full lg:w-1/4 text-left">{experience.Job_title}</h3>
                    <div className="flex flex-col gap-2 w-full lg:w-3/4">
                        <p className="text-base sm:text-lg font-light text-left">{experience.short_description}</p>
                        <p className="text-sm sm:text-base text-left">{experience.long_description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}
