
const projects = [
    {
        title: "Rendi",
        short_description: "A trading app for LATAM",
        long_description: "Rendi is a modern trading platform designed specifically for Latin America. It enables users to buy and sell stocks, ETFs, and cryptocurrencies with a simple, intuitive interface. Rendi focuses on accessibility, local payment integrations, and educational resources to empower first-time investors across the region.",
        link: "https://rendi.ai"
    },
    {
        title: "Roomy",
        short_description: "An AI-powered tool for generating room redesigns from photos, tailored to user budgets.",
        long_description: "Roomy enables users to upload a photo of any room and receive a redesigned version that fits their specified budget. Developed to make interior design more accessible, Roomy leverages AI to provide practical and visually appealing transformations based on user input.",
        link: "https://roomy-ai.com"
    },
    
]

export default function Software() {
  return (
    <div 
    style={{ backgroundColor: "#f5f5ee" }}
    className="flex flex-col h-fit w-full space-between bg-white mx-auto my-auto pt-4 sm:pt-8 text-black px-4 sm:px-8 lg:px-40 py-8 sm:py-16 lg:py-40">
        <div className="flex flex-col gap-2 my-4 sm:my-8 lg:my-10">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-left">Things I&apos;ve built</h1>
            <h2 className="text-base sm:text-lg font-light opacity-50 text-left">I come up with silly ideas all the time. Here are some I&apos;ve fleshed out more.</h2>
        </div>

        <div className="w-full h-fit flex flex-col lg:flex-row justify-start gap-8 sm:gap-12 lg:gap-24 mt-8 sm:mt-12 lg:mt-20"> 
            {projects.map((project) => (
                <div key={project.title} className="flex flex-col lg:flex-row w-full lg:w-[400px] gap-4 lg:gap-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-left">{project.title}</h3>
                    <div className="flex flex-col gap-2">
                    <p className="text-base sm:text-lg font-light text-left">{project.short_description}</p>
                    <p className="text-sm sm:text-base text-left">{project.long_description}</p>
                    <a className="text-sm hover:text-blue-300 underline w-fit h-fit text-left" href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}
