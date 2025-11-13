import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 15,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 15, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="sticky top-0 z-50 bg-destructive/90 backdrop-blur-sm border-b border-destructive py-3">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-center gap-3 text-white">
          <Clock className="w-5 h-5 animate-pulse" />
          <span className="font-semibold" data-testid="text-countdown-label">
            Promoção termina em:
          </span>
          <div className="flex items-center gap-2">
            <div className="bg-white/20 rounded px-3 py-1 min-w-[3rem] text-center">
              <span className="text-2xl font-bold" data-testid="text-countdown-minutes">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
            </div>
            <span className="text-xl font-bold">:</span>
            <div className="bg-white/20 rounded px-3 py-1 min-w-[3rem] text-center">
              <span className="text-2xl font-bold" data-testid="text-countdown-seconds">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
