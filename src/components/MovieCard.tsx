import { cn } from "@/lib/utils";

interface MovieCardProps {
  title: string;
  year: string;
  studio: string;
  tags: string[];
  gradient: string;
  className?: string;
}

export const MovieCard = ({ title, year, studio, tags, gradient, className }: MovieCardProps) => {
  return (
    <div className={cn("group", className)}>
      <div className="movie-card relative mb-3">
        <div className="movie-card-glow" style={{ background: gradient }} />
        <div className="relative aspect-[2/3] w-full overflow-hidden rounded-[2rem] p-4">
          <div 
            className="absolute inset-0 z-0" 
            style={{ 
              background: gradient,
              opacity: 0.9
            }} 
          />
        </div>
      </div>
      <div className="text-left px-1">
        <h3 className="text-lg font-bold leading-tight mb-1">{title}</h3>
        <p className="text-sm text-white/80 mb-2">{year} • {studio}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};