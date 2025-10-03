
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
    className="flex flex-col h-fit w-full space-between bg-white mx-auto my-auto pt-8 text-black p-40">
        <div className="flex flex-col gap-2 my-10">
            <h1 className="text-4xl font-bold">Things I&apos;ve built</h1>
            <h2 className="text-lg font-light opacity-50">I come up with silly ideas all the time. Here are some I&apos;ve fleshed out more.</h2>
        </div>

        <div className="w-full h-fit flex flex-row justify-center gap-24 flex-wrap mt-20"> 
            {projects.map((project) => (
                <div key={project.title} className="flex flex-row w-[400px] gap-8">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <div className="flex flex-col gap-2">
                    <p className="text-lg font-light">{project.short_description}</p>
                    <p className="text-sm">{project.long_description}</p>
                    <a className="text-sm hover:text-blue-300 underline w-fit h-fit" href={project.link}>{project.title}</a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}
