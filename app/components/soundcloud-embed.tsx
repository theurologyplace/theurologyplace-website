type SoundCloudEmbedProps = {
  /** Public SoundCloud track or episode URL (permalink). */
  trackUrl: string;
  /** Short label for the iframe title (accessibility). */
  title: string;
  className?: string;
};

/**
 * SoundCloud audio player (play/pause, seekable timeline via SoundCloud’s widget).
 * Non-YouTube embeds use a dedicated component per PROJECT_RULES.md.
 */
export function SoundCloudEmbed({ trackUrl, title, className }: SoundCloudEmbedProps) {
  const params = new URLSearchParams({
    url: trackUrl,
    color: "#2563eb",
    auto_play: "false",
    hide_related: "true",
    show_comments: "false",
    show_user: "true",
    show_reposts: "false",
    show_teaser: "false",
    visual: "false",
  });
  const src = `https://w.soundcloud.com/player/?${params.toString()}`;

  return (
    <div className={className}>
      <iframe
        title={title}
        className="block h-[166px] w-full rounded-lg border border-slate-200/90 bg-slate-50 shadow-sm ring-1 ring-slate-100"
        scrolling="no"
        allow="autoplay"
        loading="lazy"
        src={src}
      />
    </div>
  );
}
