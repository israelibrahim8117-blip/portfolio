import SectionHeading from "../components/SectionHeading";
import TimelineItem from "../components/TimelineItem";
import { journey } from "../data/journey";

const Journey = () => {
  return (
    <section id="journey" className="border-t border-slate-800/70 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="My Journey"
          title="Learning · Building · Growing"
        />

        <div className="hidden gap-6 sm:flex">
          {journey.map((item, index) => (
            <TimelineItem
              key={`${item.year}-${item.title}`}
              item={item}
              isLast={index === journey.length - 1}
            />
          ))}
        </div>

        <div className="space-y-7 sm:hidden">
          {journey.map((item) => (
            <div
              key={`${item.year}-${item.title}`}
              className="border-l border-blue-500/30 pl-5"
            >
              <p className="text-xs font-semibold text-blue-400">{item.year}</p>

              <h3 className="mt-1 text-sm font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-1 text-xs text-slate-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
