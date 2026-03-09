import EducationCard from "../components/about/EducationCard";

export default function About() {
    return (
        <div className="flex flex-row flex-wrap items-center justify-center min-h-screen py-10 gap-10">
            {/* <h1 className="text-5xl font-bold">About</h1> */}
            <EducationCard
                imageSrc="/uicpic.webp"
                title="University of Illinois Chicago"
                text="I am currently studying at the University of Illinois Chicago, working towards my degree and exploring various software engineering concepts."
            />
            {/* TODO 1: Add another EducationCard here passing in "uiuclogo.webp" and other information as props  */}
        </div>
    );
}
