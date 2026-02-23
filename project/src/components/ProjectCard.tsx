import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SpringTiltCard from './SpringTiltCard';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  index: number;
  videoId?: string;
}

export default function ProjectCard({ title, description, tech, index, videoId }: ProjectCardProps) {
console.log(videoId)
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
    >
      <SpringTiltCard
        className="group relative overflow-hidden rounded-xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent transition-all duration-500 hover:border-[#00D4FF]/20 hover:shadow-[0_30px_80px_rgba(0,0,0,0.5),0_0_60px_rgba(0,212,255,0.06)]"
        style={{ boxShadow: '0 8px 30px rgba(0,0,0,0.3)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-5" />

        {videoId && (
          <div className="aspect-video w-full overflow-hidden">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="Project video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        <div className="p-8">
          <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
          <p className="text-gray-400 mb-6 leading-relaxed">{description}</p>

          <div className="flex flex-wrap gap-2">
            {tech.map((item) => (
              <span
                key={item}
                className="px-3 py-1 text-xs font-mono rounded-full border border-[#00D4FF]/20 bg-[#00D4FF]/5 text-[#00D4FF]/50 transition-colors duration-300 group-hover:text-[#00D4FF]/90"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

      </SpringTiltCard>
    </motion.div>
  );
}
