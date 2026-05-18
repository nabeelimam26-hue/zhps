import { testimonials } from '../../data/content';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function Testimonials() {
  return (
    <section id="testimonials" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="Built for teams that care about taste and traction"
            description="Polished interfaces, practical systems, and momentum that stakeholders can feel from the first interaction."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.08}>
              <figure className="h-full rounded-[1.75rem] border border-white/10 bg-slate-900/55 p-7 shadow-2xl shadow-slate-950/20 backdrop-blur-2xl">
                <div className="mb-8 flex gap-1 text-cyan-300" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <span key={starIndex}>★</span>
                  ))}
                </div>
                <blockquote className="text-lg leading-8 text-slate-100">“{testimonial.quote}”</blockquote>
                <figcaption className="mt-8 border-t border-white/10 pt-5">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-slate-400">{testimonial.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
