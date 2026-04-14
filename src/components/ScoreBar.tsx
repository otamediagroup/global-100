interface ScoreBarProps {
  label: string;
  score: number;
  max?: number;
}

export default function ScoreBar({ label, score, max = 25 }: ScoreBarProps) {
  const percentage = (score / max) * 100;

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <p className="font-semibold text-lg">{label}</p>
        <p className="text-2xl font-bold text-gold">{score}</p>
      </div>
      <div className="score-bar-track">
        <div
          className="score-bar-fill transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="text-xs text-gray-400 mt-1">of {max}</p>
    </div>
  );
}
