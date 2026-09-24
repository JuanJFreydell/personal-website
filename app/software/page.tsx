
const projects = [
    {
        title: "rendi.ai",
        short_description: "A trading app for LATAM",
        long_description: "Rendi is a modern trading platform designed specifically for Latin America. It enables users to buy and sell stocks, ETFs, and cryptocurrencies with a simple, intuitive interface. Rendi focuses on accessibility, local payment integrations, and educational resources to empower first-time investors across the region.",
        link: "https://rendi.ai"
    },
    {
        title: "musclecloud.app",
        short_description: "AI tools for fitness coaching",
        long_description: "MuscleCloud helps trainers and fitness teams manage workouts, clients, and coaching workflows in one place, with AI-assisted tools for turning training plans into practical, trackable programs.",
        link: "https://musclecloud.app"
    },
    {
        title: "worldtexture.com",
        short_description: "A library of world-inspired textures",
        long_description: "WorldTexture is a visual collection for discovering and using textures inspired by real materials, places, and surfaces from around the world.",
        link: "https://worldtexture.com"
    }
]

export default function Software() {
  return (
    <div 
    style={{ backgroundColor: "#f5f5ee" }}
    className="flex flex-col h-fit w-full space-between bg-white mx-auto my-auto pt-4 sm:pt-8 text-black px-4 sm:px-4 lg:px-8 py-8 sm:py-16">
        <div className="flex flex-col gap-2 my-4 sm:my-8 lg:my-10">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-left">Software I&apos;ve built</h1>
            <h2 className="text-base sm:text-lg font-light opacity-50 text-left">I come up with silly ideas all the time. Here are some I&apos;ve fleshed out more.</h2>
        </div>

        <div className="w-full h-fit flex flex-col lg:flex-row justify-start gap-6 sm:gap-8 lg:gap-8 mt-8 sm:mt-12 lg:mt-20"> 
            {projects.map((project) => (
                <div key={project.title} className="flex flex-col w-full lg:w-[400px] gap-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-left">{project.title}</h3>
                    <div className="flex flex-col gap-2">
                    <p className="text-base sm:text-lg font-semibold text-left">{project.short_description}</p>
                    <p className="text-sm sm:text-base text-left">{project.long_description}</p>
                    <a className="text-sm hover:text-blue-300 underline w-fit h-fit text-left" href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}
