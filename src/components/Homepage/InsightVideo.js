'use client';

import { useRef, useState } from 'react';
import YouTube from 'react-youtube';

const getYouTubeId = (url) => {
  try {
    if (url.includes('youtu.be')) return url.split('/').pop();
    if (url.includes('youtube.com')) {
      return new URL(url).searchParams.get('v');
    }
  } catch {
    return null;
  }
};

export default function VideoSection({ videoUrl }) {
  const playerRef = useRef(null);

  const videoId = getYouTubeId(videoUrl);

  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  if (!videoId) return null; // invalid URL safety

  const onReady = (event) => {
    playerRef.current = event.target;
    setReady(true);
    event.target.mute();
  };

  return (
    <section className="w-full bg-(--color-video-bg) rounded-2xl flex justify-center">
      <div className="relative w-full min-h-[20vh] aspect-video overflow-hidden rounded-xl">

        {!ready && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-white border-t-transparent" />
          </div>
        )}

        {!playing && ready && (
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <button
              onClick={() => playerRef.current.playVideo()}
              className="w-20 h-20 rounded-full bg-(--color-primary) border-2 border-white flex items-center justify-center text-white text-3xl hover:scale-110 transition"
            >
              ▶
            </button>
          </div>
        )}

        <YouTube
          videoId={videoId}
          className="w-full h-full"
          iframeClassName="w-full h-full"
          onReady={onReady}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          opts={{
            playerVars: {
              controls: 0,
              rel: 0,
              modestbranding: 1,
            },
          }}
        />

        {playing && (
          <div className="absolute top-4 right-4 z-30 flex gap-3">
            <button
              onClick={() =>
                playing
                  ? playerRef.current.pauseVideo()
                  : playerRef.current.playVideo()
              }
              className="bg-black/70 text-white p-3 rounded-md"
            >
              ❚❚
            </button>

            <button
              onClick={() => {
                muted
                  ? playerRef.current.unMute()
                  : playerRef.current.mute();
                setMuted(!muted);
              }}
              className="bg-black/70 text-white p-3 rounded-md"
            >
              {muted ? '🔇' : '🔊'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
