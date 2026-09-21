"use client";

import React, { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, Sparkles, Maximize2 } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import ScrollReveal from "../ui/ScrollReveal";

const videoReels = [
  {
    id: "reel-1",
    title: "Cinematic Stage & Lighting Showcase",
    subtitle: "Dynamic stage production & lighting ambiance by Adams Events",
    src: "/assets/Adams_reel-1.mp4",
    poster: "/assets/Hero-section-desktop-screen.png",
    duration: "1:00",
  },
  {
    id: "reel-2",
    title: "Grand Celebration & Floral Artistry",
    subtitle: "Lush botanical entrance walkthrough & grand reception decor",
    src: "/assets/Adams-reel-2.mp4",
    poster: "/assets/Image-14019.jpg",
    duration: "1:15",
  },
];

export default function VideoReel() {
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const activeReel = videoReels[activeReelIndex];

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const handleSelectReel = (index: number) => {
    setActiveReelIndex(index);
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  };

  return (
    <section id="video-reel" className="relative py-20 sm:py-28 overflow-hidden bg-brand-plumDark/80">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Cinematic Experience"
          title="Watch Our Live Event"
          highlight="Showcase Reels"
          description="Experience the atmosphere, dynamic illumination, and emotional grandeur of real celebrations orchestrated by Adams Events across Thiruvalla & Kerala."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          {/* Main Cinematic Video Player */}
          <div className="lg:col-span-8">
            <ScrollReveal direction="up">
              <div className="relative rounded-3xl overflow-hidden border-2 border-brand-purpleLight/40 shadow-2xl bg-black group aspect-video sm:aspect-[16/9] flex items-center justify-center">
                <video
                  ref={videoRef}
                  src={activeReel.src}
                  poster={activeReel.poster}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover"
                />

                {/* Video Overlay Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-plumDark/90 via-transparent to-black/30 pointer-events-none" />

                <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-brand-plumDark/80 backdrop-blur-md border border-brand-purpleLight/40 text-xs font-semibold text-brand-goldLight flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-brand-gold" />
                    Live Reel
                  </span>
                </div>

                {/* Bottom Controls Bar */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-base sm:text-xl font-bold text-white leading-tight drop-shadow-md">
                      {activeReel.title}
                    </h3>
                    <p className="text-xs text-brand-goldLight mt-0.5 drop-shadow-md">
                      {activeReel.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Play/Pause Button */}
                    <button
                      onClick={togglePlay}
                      className="p-2.5 rounded-full bg-brand-plumDark/80 hover:bg-brand-purple text-brand-gold hover:text-white transition-all border border-brand-purpleLight/40 shadow-md"
                      aria-label={isPlaying ? "Pause Video" : "Play Video"}
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                    </button>

                    {/* Mute/Unmute Button */}
                    <button
                      onClick={toggleMute}
                      className="p-2.5 rounded-full bg-brand-plumDark/80 hover:bg-brand-purple text-brand-gold hover:text-white transition-all border border-brand-purpleLight/40 shadow-md"
                      aria-label={isMuted ? "Unmute Sound" : "Mute Sound"}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>

                    {/* Fullscreen Button */}
                    <button
                      onClick={handleFullscreen}
                      className="p-2.5 rounded-full bg-brand-plumDark/80 hover:bg-brand-purple text-brand-gold hover:text-white transition-all border border-brand-purpleLight/40 shadow-md hidden sm:block"
                      aria-label="Fullscreen"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Playlist / Selector Cards */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-brand-gold" />
              Adams Events Reels
            </h3>

            {videoReels.map((reel, idx) => (
              <button
                key={reel.id}
                onClick={() => handleSelectReel(idx)}
                className={`w-full text-left p-4 rounded-2xl transition-all duration-300 border flex items-center gap-4 ${
                  activeReelIndex === idx
                    ? "bg-brand-plumSurface border-brand-purpleLight shadow-purple-glow/40 scale-[1.02]"
                    : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-brand-purpleLight/40"
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-purple/20 border border-brand-purpleLight/30 flex items-center justify-center text-brand-gold shrink-0">
                  <Play className={`w-5 h-5 ${activeReelIndex === idx ? "fill-brand-gold" : ""}`} />
                </div>

                <div className="overflow-hidden flex-grow">
                  <div className="text-xs font-semibold text-brand-goldLight uppercase tracking-wider">
                    Reel {idx + 1}
                  </div>
                  <div className="font-serif text-sm font-bold text-white truncate">
                    {reel.title}
                  </div>
                  <div className="text-xs text-purple-200/70 truncate mt-0.5">
                    {reel.subtitle}
                  </div>
                </div>
              </button>
            ))}

            <div className="pt-2">
              <GlassCard className="p-4 text-center bg-brand-plumSurface/60 border-brand-purpleLight/20">
                <p className="text-xs text-purple-200/80">
                  Follow us on Instagram for daily event reels & behind-the-scenes!
                </p>
                <a
                  href="https://www.instagram.com/adams_event_planners"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-brand-gold hover:underline mt-1.5 inline-block"
                >
                  @adams_event_planners on Instagram →
                </a>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
