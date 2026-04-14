import { Metadata } from 'next';
import Link from 'next/link';
import { leaders, getLeaderBySlug } from '@/data/leaders';
import ScoreBar from '@/components/ScoreBar';
import LazyImage from '@/components/LazyImage';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return leaders.map((leader) => ({
    slug: leader.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const leader = getLeaderBySlug(params.slug);

  if (!leader) {
    return {
      title: 'Leader Not Found',
    };
  }

  return {
    title: `${leader.name} | The Global 100 | OTA Media`,
    description: `${leader.name}, ${leader.role} at ${leader.company}. ${leader.bio}`,
    openGraph: {
      title: `${leader.name} | The Global 100`,
      description: `${leader.name}, ${leader.role} at ${leader.company}`,
      type: 'profile',
    },
  };
}

export default function LeaderPage({ params }: { params: { slug: string } }) {
  const leader = getLeaderBySlug(params.slug);

  if (!leader) {
    notFound();
  }

  const currentIndex = leaders.findIndex((l) => l.slug === leader.slug);
  const prevLeader = currentIndex > 0 ? leaders[currentIndex - 1] : null;
  const nextLeader = currentIndex < leaders.length - 1 ? leaders[currentIndex + 1] : null;

  return (
    <main className="min-h-screen bg-dark">
      {/* Breadcrumb */}
      <section className="py-6 md:py-8 bg-navy/50 border-b border-navy">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gold hover:text-white transition-colors">
              The Global 100
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-300">{leader.name}</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-navy to-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Image */}
            <div className="md:col-span-1">
              <div className="rounded-lg overflow-hidden bg-navy border border-navy/50 aspect-square">
                <LazyImage
                  src={leader.image}
                  alt={leader.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-6 space-y-3">
                <div className="px-4 py-2 bg-teal/20 border border-teal rounded text-teal text-sm font-semibold text-center">
                  Rank #{leader.rank}
                </div>
                <div className="px-4 py-2 bg-gold/20 border border-gold rounded text-gold text-sm font-semibold text-center">
                  {leader.tier.charAt(0).toUpperCase() + leader.tier.slice(1)}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{leader.name}</h1>

              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wide mb-1">Role</p>
                  <p className="text-xl text-gold font-semibold">{leader.role}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wide mb-1">Company</p>
                  <p className="text-xl font-semibold">{leader.company}</p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-gray-400 text-sm uppercase tracking-wide mb-1">Country</p>
                    <p className="text-lg font-semibold">{leader.country}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm uppercase tracking-wide mb-1">Sector</p>
                    <p className="text-lg font-semibold text-teal">{leader.sector}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm uppercase tracking-wide mb-1">Power Score</p>
                    <p className="text-3xl font-bold text-gold">{leader.totalScore}</p>
                  </div>
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-gray-200 leading-relaxed">{leader.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scores Section */}
      <section className="py-16 md:py-24 bg-navy/50 border-b border-navy">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Power Score Dimensions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScoreBar label="Sustainability" score={leader.scores.sustainability} max={25} />
            <ScoreBar label="Governance" score={leader.scores.governance} max={25} />
            <ScoreBar label="Innovation" score={leader.scores.innovation} max={25} />
            <ScoreBar label="Growth" score={leader.scores.growth} max={25} />
            <ScoreBar label="Resilience" score={leader.scores.resilience} max={25} />
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="font-semibold text-lg">Total Power Score</p>
                <p className="text-3xl font-bold text-gold">{leader.totalScore}</p>
              </div>
              <div className="score-bar-track">
                <div
                  className="score-bar-fill transition-all duration-500"
                  style={{ width: `${(leader.totalScore / 125) * 100}%` }}
                />
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-dark rounded-lg border border-navy">
            <h3 className="text-lg font-semibold mb-3 text-gold">Methodology</h3>
            <p className="text-gray-300 text-sm">
              The Power Score assesses leaders across five dimensions. Sustainability measures environmental
              and social impact. Governance evaluates corporate transparency and ethics. Innovation tracks
              clean technology and process advancement. Growth assesses market expansion and revenue
              performance. Resilience evaluates supply chain strength and operational stability. Each dimension
              is scored 0-25, totaling 0-125.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prevLeader ? (
              <Link
                href={`/leader/${prevLeader.slug}`}
                className="group p-6 bg-navy rounded-lg border border-navy hover:border-teal transition-colors"
              >
                <p className="text-sm text-gray-400 mb-2">← Previous</p>
                <p className="text-lg font-semibold group-hover:text-gold transition-colors">
                  {prevLeader.name}
                </p>
                <p className="text-sm text-gray-400 mt-1">Rank #{prevLeader.rank}</p>
              </Link>
            ) : (
              <div />
            )}

            {nextLeader ? (
              <Link
                href={`/leader/${nextLeader.slug}`}
                className="group p-6 bg-navy rounded-lg border border-navy hover:border-teal transition-colors text-right md:col-start-2"
              >
                <p className="text-sm text-gray-400 mb-2">Next →</p>
                <p className="text-lg font-semibold group-hover:text-gold transition-colors">
                  {nextLeader.name}
                </p>
                <p className="text-sm text-gray-400 mt-1">Rank #{nextLeader.rank}</p>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-navy to-dark border-t border-navy/50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Explore Global Leadership</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Return to the full Global 100 ranking to discover other sustainable leaders reshaping
            corporate responsibility worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/" className="btn-primary">
              View All Leaders
            </a>
            <a href="https://index.otamediagroup.com" className="btn-secondary">
              Leadership Index
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
