import Image, { StaticImageData } from 'next/image';

interface EducationCardProps {
    imageSrc: string | StaticImageData;
    title: string;
    text: string;
    studentbody?: number;
}

export default function EducationCard({ imageSrc, title, text, studentbody }: EducationCardProps) {
    return (
        <div className="flex flex-col border border-gray-500 rounded-xl overflow-hidden
        transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] max-w-sm">
            <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-800">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[var(--foreground)]">{title}</h3>
                <p className="text-[var(--foreground)] opacity-80 leading-relaxed text-sm">
                    {text}
                </p>
                {studentbody && (
                    <p className="text-sm opacity-70">Student Body: {studentbody}</p>
                )}
            </div>
        </div>
    );
}