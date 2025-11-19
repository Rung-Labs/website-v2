import {
  HiOutlineMagnifyingGlass,
  HiOutlineCube,
  HiOutlineCalendarDays,
  HiOutlineDocumentText,
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
} from "react-icons/hi2";

const highlights = [
  {
    title: "Instant Job History",
    copy: "Ask anything about a past job, no more calling around stalling two jobs at once.",
    icon: HiOutlineMagnifyingGlass,
  },
  {
    title: "Van Inventory & Purchase History",
    copy: "When a tech purchases a part, they text a photo or description and we'll add it to their van inventory.",
    icon: HiOutlineCube,
  },
  {
    title: "Maintenance & Service Schedules",
    copy: "Owners and technicians can view maintenance and service schedules.",
    icon: HiOutlineCalendarDays,
  },
  {
    title: "Job Documentation Without Paperwork",
    copy: "Techs can text photos, notes and voice memos and we'll organize it into a job report.",
    icon: HiOutlineDocumentText,
  },
  {
    title: "On-the-Job Training for New Techs",
    copy: "Rung handles all the questions so no more dumb questions on the job.",
    icon: HiOutlineAcademicCap,
  },
  {
    title: "Organize Shop Knowledge",
    copy: "The tool captures all job notes, past fixes and quirks so knowledge is always available.",
    icon: HiOutlineBookOpen,
  },
];

export default function FeatureSpotlight() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl">
            Everything Your Team Needs, Right When They Need It
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8">
            Rung turns every message into searchable knowledge, so job history,
            inventory, and schedules are always accessible—no calling around, no
            paperwork.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-10 text-left sm:mt-16 sm:grid-cols-2 xl:grid-cols-3 xl:gap-10">
          {highlights.map((highlight) => {
            const Icon = highlight.icon;
            return (
              <div
                key={highlight.title}
                className="flex flex-col gap-4 rounded-3xl border border-black/10 bg-white/90 p-6 shadow-lg transition-shadow duration-200 hover:shadow-2xl"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-black">
                  {highlight.title}
                </h3>
                <p className="text-sm text-gray-600">{highlight.copy}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
