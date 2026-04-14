import Link from 'next/link';
import { Leader } from '@/data/leaders';
import ScoreBar from './ScoreBar';
import LazyImage from './LazyImage';

interface LeaderCardProps {
  leader: Leader;
  viewMode: 'grid' | 'list';
}

export default function LeaderCard({ leader, viewMode }: LeaderCardProps) {
  if (viewMode === 'list') {
    return (
      <Link href={`/leader/${leader.slug}`}>
        <div className="card-leader p-6 cursor-pointer group">
          <div className="flex items-center gap-6">
            {/* Rank Badge */}
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-gold/20 border border-gold">
                <span className="text-2xl font-bold text-gold">#{leader.rank}</span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-3 mb-2">
                <h3 className="text-xl font-bold group-hover:text-gold transition-colors truncate">
                  {leader.name}
                </h3>
                <span className="text-xs font-semibold px-2 py-1 bg-teal/20 text-teal rounded whitespace-nowrap">
                  {leader.tier.charAt(0).toUpperCase() + leader.tier.slice(1)}
                </span>
              </div>
              <p className="text-gold font-semibold text-sm mb-1">{leader.role}</p>
              <p className="text-gray-400 text-sm mb-3 truncate">{leader.company}</p>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-gray-400">{leader.country}</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-400">{leader.sector}</span>
                <span className="text-gray-400">•</span>
                <span className="text-gold font-semibold">Score: {leader.totalScore}</span>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex-shrink-0">
              <svg
                className="w-5 h-5 text-gold group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/leader/${leader.slug}`}>
      <div className="card-leader overflow-hidden cursor-pointer group h-full flex flex-col">
        {/* Image */}
        <div className="relative w-full aspect-square bg-navy overflow-hidden border-b border-navy">
          <LazyImage
            src={leader.image}
            alt={leader.name}
            width={400}
            height={400}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gold/20 border border-gold">
              <span className="font-bold text-gold text-lg">#{leader.rank}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-baseline gap-2 mb-3">
            <h3 className="text-lg font-bold group-hover:text-gold transition-colors line-clamp-2">
              {leader.name}
            </h3>
            <span className="text-xs font-semibold px-2 py-1 bg-teal/20 text-teal rounded flex-shrink-0 whitespace-nowrap">
              {leader.tier === 'vanguard' ? 'VG' : 'MM'}
            </span>
          </div>

          <p className="text-gold font-semibold text-sm mb-1">{leader.role}</p>
          <p className="text-gray-400 text-sm mb-4 line-clamp-1">{leader.company}</p>

          <div className="flex items-center gap-3 text-xs text-gray-400 mb-6">
            <span>{leader.country}</span>
            <span className="text-gray-500">•</span>
            <span className="truncate">{leader.sector}</span>
          </div>

          {/* Scores Mini */}
          <div className="space-y-2 mb-6 flex-1">
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-gray-400">Power Score</span>
              <span className="text-gold font-bold text-lg">{leader.totalScore}</span>
            </div>
            <div className="score-bar-track">
              <div
                className="score-bar-fill transition-all duration-500"
                style={{ width: `${(leader.totalScore / 125) * 100}%` }}
              />
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-2 pt-4 border-t border-navy/50">
            <div className="text-center">
              <p className="text-xs text-gray-400">Sustainability</p>
              <p className="text-sm font-bold text-teal">{leader.scores.sustainability}</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-400">Innovation</p>
              <p className="text-sm font-bold text-gold">{leader.scores.innovation}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
