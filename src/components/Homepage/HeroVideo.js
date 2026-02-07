'use client';

import { useEffect, useRef, useState } from 'react';
import Player from '@vimeo/player';
import { ShieldCheck } from 'lucide-react';


export default function VideoHero() {
  const iframeRef = useRef(null);
  const playerRef = useRef(null);

  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (!iframeRef.current) return;

    const player = new Player(iframeRef.current);
    playerRef.current = player;

    player.on('loaded', () => setReady(true));
    player.on('play', () => setPlaying(true));
    player.on('pause', () => setPlaying(false));

    return () => {
      player.destroy();
    };
  }, []);

  const handlePlay = async () => {
    await playerRef.current.play();
  };

  const togglePlayPause = async () => {
    playing
      ? await playerRef.current.pause()
      : await playerRef.current.play();
  };

  const toggleMute = async () => {
    await playerRef.current.setMuted(!muted);
    setMuted(!muted);
  };

  return (
    <section className="w-full bg-[var(--color-video-bg)] rounded-2xl py-0 flex justify-center min-h-[500px]">
      <div className="relative w-full max-w-4xl aspect-video overflow-hidden">

        {/* Loader */}
        {!ready && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-white border-t-transparent" />
          </div>
        )}

        {/* Big Play Button */}
        {!playing && ready && (
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <button
              onClick={handlePlay}
              className="w-20 h-20 rounded-full bg-[var(--color-primary)] border-2 border-white flex items-center justify-center text-white text-3xl hover:scale-110 transition"
              aria-label="Play video"
            >
              ▶
            </button>
          </div>
        )}

        {/* Vimeo iframe */}
        <iframe
          ref={iframeRef}
          className="w-full h-full"
          src="https://player.vimeo.com/video/1161513003?autoplay=0&controls=0&background=0&title=0&byline=0&portrait=0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />

        {/* Custom Controls */}
        {playing && (
          <div className="absolute top-4 right-4 z-30 flex gap-3">
            <button
              onClick={togglePlayPause}
              className="bg-black/70 text-white p-3 rounded-md"
              aria-label="Play / Pause"
            >
              {playing ? '❚❚' : '▶'}
            </button>

            <button
              onClick={toggleMute}
              className="bg-black/70 text-white p-3 rounded-md"
              aria-label="Mute"
            >
              {muted ? '🔇' : '🔊'}
            </button>
          </div>
        )}
        <div className="absolute bottom-4 left-4  z-30 max-w-xs animate-[floatCard_6s_ease-in-out_infinite]" >
            <div className="flex p-4 rounded-2xl gap-4 bg-[var(--color-bg)] border-[var(--color-primary)] border-1">
                <div className='bg-[var(--color-button-bg)] rounded-2xl h-fit p-4 text-[var(--color-primary)]'>
                    <ShieldCheck/>
                </div>
                <div className="flex flex-col gap-2">
                    <h6 className='text-[var(--color-primary)] text-lg font-semibold'>Trusted by Kiwis</h6>
                    <p className='text-black text-xs'>
                        Helping New Zealand families achieve their homeownership dreams since 2021.
                        </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
