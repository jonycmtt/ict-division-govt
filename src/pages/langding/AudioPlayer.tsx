import React, { useRef, useState, useEffect } from "react";
import nationalAudio from "../../assets/audio/bd_national_anthem.mp3";

const AudioPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const onTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const onLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const seekTime = (parseFloat(e.target.value) / 100) * duration;
      audioRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  const increaseVolume = () => {
    if (audioRef.current) {
      let newVolume = Math.min(volume + 0.1, 1);
      setVolume(newVolume);
      audioRef.current.volume = newVolume;
    }
  };

  const decreaseVolume = () => {
    if (audioRef.current) {
      let newVolume = Math.max(volume - 0.1, 0);
      setVolume(newVolume);
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="audio-player bg-gray-100 p-4 rounded-lg shadow-md ">
      <audio
        ref={audioRef}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
      >
        <source src={nationalAudio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="controls flex flex-col items-center justify-between mt-3">
        <div className="flex items-center justify-between w-full">
          <button
            onClick={togglePlayPause}
            className={`py-2 px-2 rounded text-white ${
              isPlaying ? "bg-red-500" : "bg-green-500"
            } hover:${isPlaying ? "bg-red-600" : "bg-green-600"}`}
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
          <input
            type="range"
            value={(currentTime / duration) * 100 || 0}
            onChange={handleSeek}
            className="w-full mx-2"
          />
          <span className="text-sm text-gray-700">
            {formatTime(currentTime)}
          </span>
          <span className="text-sm text-gray-500">/</span>
          <span className="text-sm text-gray-700">{formatTime(duration)}</span>
        </div>
        <div className="volume-controls flex items-center mt-3">
          <button
            onClick={decreaseVolume}
            className="bg-gray-300 text-gray-700 py-1 px-3 rounded hover:bg-gray-400"
          >
            -
          </button>
          <input
            type="range"
            value={volume * 100}
            onChange={(e) => setVolume(parseFloat(e.target.value) / 100)}
            onInput={(e) => {
              if (audioRef.current) {
                audioRef.current.volume =
                  parseFloat(e.currentTarget.value) / 100;
              }
            }}
            className="mx-2"
            min="0"
            max="100"
          />
          <button
            onClick={increaseVolume}
            className="bg-gray-300 text-gray-700 py-1 px-3 rounded hover:bg-gray-400"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
