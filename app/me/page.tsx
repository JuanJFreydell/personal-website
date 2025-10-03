import Image from "next/image";

export default function Me() {
  return (
    <div className="z-10 flex flex-col lg:flex-row min-h-screen w-full justify-center items-center bg-white text-black px-4 py-8 lg:-m-32">

      <div className="w-full lg:w-1/3 flex justify-center mb-8 lg:mb-0">
        <Image 
          className="rounded-4xl" 
          src="/juan-running.jpeg" 
          alt="Juan Jose Freydell" 
          width={300} 
          height={300}
          priority
        />
      </div>
      <div className="w-full lg:w-1/3 flex flex-col justify-center gap-4 lg:gap-6">
        <div className="text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Hello! I am Juan José</h1>
            <h2 className="text-base sm:text-lg font-light opacity-50 mt-2">I&apos;m happy you made it to my personal website!</h2>
        </div>
        <div className="flex flex-col gap-3 w-full lg:w-[80%]">
            <p className="text-sm sm:text-base"> Here I&apos;ll tell you a bit about myself. I enjoy tinkering and building through different mediums. I like art, reading, and swimming, and I love making new friends.</p>
            <p className="text-sm sm:text-base"> I worked at Amazon for multiple years, and I quit to pursue my academic interests in Computer Science at the University of Pennsylvania.</p>
            <p className="text-sm sm:text-base"> This website is a collection of things I find interesting, including software projects I&apos;ve put together, my academic interests, and bits of experience I&apos;ve gained by working in different industries.</p>
        </div>
        
      </div>
    </div>
  );
}
