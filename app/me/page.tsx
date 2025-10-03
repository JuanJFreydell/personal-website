import Image from "next/image";

export default function Me() {
  return (
    <div className="z-10 flex flex-row h-dvh -m-32 w-full justify-center items-center bg-white text-black">

      <div className="w-1/3">
        <Image className="rounded-4xl " src="/juan-running.jpeg" alt="Juan Jose Freydell" width={300} height={300} />
      </div>
      <div className="w-1/3 flex flex-col justify-center gap-6 h-full">
        <div>
            <h1 className="text-4xl font-bold">Hello! I am Juan José</h1>
            <h2 className="text-lg font-light opacity-50">I&apos;m happy you made it to my personal website!</h2>
        </div>
        <div className="flex flex-col gap-3 w-[80%]">
            <p className="text-sm"> Here I&apos;ll tell you a bit about myself. I enjoy tinkering and building through different mediums. I like art, reading, and swimming, and I love making new friends.</p>
            <p className="text-sm"> I worked at Amazon for multiple years, and I quit to pursue my academic interests in Computer Science at the University of Pennsylvania.</p>
            <p className="text-sm"> This website is a collection of things I find interesting, including software projects I&apos;ve put together, my academic interests, and bits of experience I&apos;ve gained by working in different industries.</p>
        </div>
        
      </div>
    </div>
  );
}
