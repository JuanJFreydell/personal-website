const education = [
    {
        degree: "Master's in Computer and Information Technology",
        short_description: "Current graduate student focusing on computer systems and web technologies.",
        institution: "University of Pennsylvania",
        location: "Philadelphia, PA",
        start_date: "Fall 2024",
        end_date: "Current",
        long_description: "Pursuing advanced studies in computer and information technology with focus on modern web systems and computer architecture. Currently enrolled in Internet and Web Systems (Java) and Computer Systems (C) courses.",
        gpa: null,
        courses: ["Internet and Web Systems (Java)", "Computer Systems (C)"]
    },
    {
        degree: "Master's in Business Administration - Information Technology",
        short_description: "Graduated with honors, specializing in IT management and business analytics.",
        institution: "Goldey Beacom College",
        location: "Wilmington, DE",
        start_date: "April 2022",
        end_date: "May 2024",
        long_description: "Completed MBA with concentration in Information Technology, maintaining a perfect 4.0 GPA throughout the program. Focused on the intersection of business strategy and technology implementation.",
        gpa: "4.0/4.0",
        courses: []
    },
    {
        degree: "Bachelor of Arts in Economics",
        short_description: "Undergraduate degree with business administration minor, providing strong analytical foundation.",
        institution: "Boston University",
        location: "Boston, MA",
        start_date: "August 2016",
        end_date: "December 2020",
        long_description: "Earned BA in Economics with a minor in Business Administration, developing strong analytical and quantitative skills. The program provided comprehensive understanding of economic principles and business practices.",
        gpa: null,
        courses: []
    },
    {
        degree: "Graduate Credit in Big Data and Statistical Learning",
        short_description: "International study program focusing on advanced data analysis and machine learning techniques.",
        institution: "London School of Economics",
        location: "London, United Kingdom",
        start_date: "June 2018",
        end_date: "August 2018",
        long_description: "Completed intensive summer program in big data analytics and statistical learning methods. Gained hands-on experience with advanced data science tools and techniques in an international academic setting.",
        gpa: null,
        courses: []
    },
    {
        degree: "Graduate Credit in Economics and International Business",
        short_description: "International exchange program focusing on global economics and business practices.",
        institution: "Fudan University",
        location: "Shanghai, China",
        start_date: "January 2018",
        end_date: "April 2018",
        long_description: "Participated in international exchange program studying economics and international business in China. Gained valuable insights into Asian markets and global business practices while experiencing different cultural perspectives.",
        gpa: null,
        courses: []
    }
]

const certifications = [
    "AWS Cloud Practitioner",
    "Meta Front End Development", 
    "Google IT Automation"
]

export default function Education() {
  return (
    <div 
    style={{ backgroundColor: "#f5f5ee" }}
    className="flex flex-col h-fit w-full justify-center items-center space-between bg-white mx-auto my-auto pt-4 sm:pt-8 text-black px-4 sm:px-8 lg:px-40 py-8 sm:py-16">
        <div className="w-full lg:w-2/3 h-fit flex flex-col items-start justify-center gap-8 sm:gap-12 lg:gap-24 mt-8 sm:mt-12 lg:mt-20"> 
            {education.map((edu) => (
                <div key={edu.degree} className="flex flex-col lg:flex-row w-full gap-4 lg:gap-8">
                    <div className="w-full lg:w-1/4 text-left">
                        <h3 className="text-sm sm:text-base lg:text-md font-bold">{edu.degree}</h3>
                        <p className="text-xs sm:text-sm font-light mt-1">{edu.institution}</p>
                        <p className="text-xs text-gray-600">{edu.location}</p>
                        <p className="text-xs text-gray-600">{edu.start_date} - {edu.end_date}</p>
                        {edu.gpa && <p className="text-xs text-gray-600">GPA: {edu.gpa}</p>}
                    </div>
                    <div className="flex flex-col gap-2 w-full lg:w-3/4 text-left">
                        <p className="text-base sm:text-lg font-light">{edu.short_description}</p>
                        <p className="text-sm sm:text-base">{edu.long_description}</p>
                        {edu.courses.length > 0 && (
                            <div className="mt-2">
                                <p className="text-sm font-semibold">Courses:</p>
                                <p className="text-sm text-gray-600">{edu.courses.join(", ")}</p>
                            </div>
                        )}
                    </div>
                </div>
            ))}
            
            <div className="w-full mt-8 pt-8 border-t border-gray-300">
                <h3 className="text-base sm:text-lg font-bold mb-4 text-left">Professional Certifications</h3>
                <div className="flex flex-wrap gap-2 sm:gap-4 justify-start">
                    {certifications.map((cert, index) => (
                        <span key={index} className="bg-gray-100 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                            {cert}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
}
