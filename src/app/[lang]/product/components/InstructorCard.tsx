import { ArrowRight, ChevronDown, ChevronRight } from "lucide-react";

interface InstructorValue {
  name: string;
  description: string;
  short_description: string;
  image: string;
  slug: string;
  has_instructor_page: boolean;
}

interface Props {
  instructor: InstructorValue;
}

export default function InstructorCard({ instructor }: Props) {
  return (
    <>
      {/* <p className="text-sm text-muted-foreground">
        {instructor.short_description}
      </p> */}
      <div className="max-w-2xl  flex gap-4 p-5">
        <img
          src={instructor.image}
          alt={instructor.name}
          className="w-24 h-24 object-cover rounded-full"
        />
        <div className="flex flex-col">
          <div className="flex items-center">
            <a
              href="https://10minuteschool.com/skills/instructors/munzereen-shahid/"
              className={`text-lg font-semibold ${
                instructor.has_instructor_page &&
                "hover:text-primary cursor-pointer"
              }`}
            >
              {instructor.name}
            </a>
            {instructor.has_instructor_page && (
              <ChevronRight size={17} className="text-gray-700" />
            )}
          </div>
          <div
            className="mt-2 text-sm prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: instructor.description }}
          />
        </div>
      </div>
    </>
  );
}
