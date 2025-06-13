import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const images = Array.from(
  { length: 32 },
  (_, i) => `public/livePhotos/Background (${i + 1}) (1)_11zon.webp`
);

// Divide em 4 linhas de 8 imagens
const chunkSize = 8;
const rows = Array.from({ length: 4 }, (_, i) => {
  const chunk = images.slice(i * chunkSize, (i + 1) * chunkSize);
  return [...chunk, ...chunk]; // duplicar para garantir looping infinito suave
});

// Componente de card com imagem
const ImageCard = ({ src }: { src: string }) => {
  return (
    <div
      className={cn(
        "relative h-[7.33vw] w-[9.91vw] cursor-pointer overflow-hidden rounded-sm md:rounded-md lg:rounded-lg xl:rounded-xl border",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <img
        src={src}
        alt="Live photo"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  );
};

export function LivePhotos() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-[0.75vw] overflow-hidden py-6 mt-10 bg-[#E6E6E6]">
      {rows.map((row, index) => (
        <Marquee
          key={index}
          pauseOnHover
          reverse={index % 2 !== 0}
          className="animate-marquee [animation-duration:240s] [animation-iteration-count:infinite]"
        >
          {row.map((src, i) => (
            <ImageCard key={`row${index}-img${i}`} src={src} />
          ))}
        </Marquee>
      ))}
    </div>
  );
}
