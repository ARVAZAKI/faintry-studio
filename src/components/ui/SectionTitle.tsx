import AnimatedSection from './AnimatedSection';

type Props = {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
};

export default function SectionTitle({ title, subtitle, center = true, light = false }: Props) {
  return (
    <AnimatedSection className={`mb-12 ${center ? 'text-center' : ''}`}>
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          light ? 'text-white' : 'text-[#0A1628]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg max-w-2xl ${center ? 'mx-auto' : ''} ${
            light ? 'text-blue-200' : 'text-slate-500'
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-16 rounded-full bg-[#38BDF8] ${center ? 'mx-auto' : ''}`}
      />
    </AnimatedSection>
  );
}
