import { cn } from "@/lib/utils";

interface VideoCardProps {
  title: string;
  creator: string;
  playlist: string;
  gradient: string;
  className?: string;
}

export const VideoCard = ({ title, creator, playlist, gradient, className }: VideoCardProps) => {
  return (
    <div className={cn("movie-card group", className)}>
      <div className="movie-card-glow" style={{ background: gradient }} />
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl p-4">
        <div 
          className="absolute inset-0 z-0" 
          style={{ 
            background: gradient,
            opacity: 0.9
          }} 
        />
        <div className="relative z-10 flex h-full flex-col justify-end">
          <h3 className="text-lg font-bold leading-tight">{title}</h3>
          <p className="text-sm text-white/80">{creator}</p>
          <p className="text-xs text-white/60">📝 Playlist: {playlist}</p>
        </div>
      </div>
    </div>
  );
};