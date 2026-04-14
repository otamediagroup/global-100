import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Methodology | The Global 100 | OTA Media',
  description:
    'Learn how the OTA Power Score methodology ranks sustainable corporate leaders across five key dimensions.',
};

export default function MethodologyPage() {
  const dimensions = [
    {
      name: 'Sustainability',
      description:
        'Measures a leader\'s commitment to environmental and social impact. Evaluates carbon reduction initiatives, renewable energy adoption, supply chain transparency, and social equity programs.',
      range: '0-25',
      color: 'text-teal',
    },
    {
      name: 'Governance',
      description:
        'Assesses corporate governance quality and transparency. Evaluates board diversity, executive compensation alignment, stakeholder engagement, and compliance with international standards.',
      range: '0-25',
      color: 'text-gold',
    },
    {
      name: 'Innovation',
      description:
        'Tracks clean technology development and process innovation. Evaluates R&D investment in sustainable solutions, patent portfolio in green tech, and digital transformation progress.',
      range: '0-25',
      color: 'text-gold',
    },
    {
      name: 'Growth',
      description:
        'Assesses market expansion and revenue performance in sustainable segments. Evaluates revenue growth rate, market share gains in clean sectors, and expansion into new sustainable markets.',
      range: '0-25',
      color: 'text-teal',
    },
    {
      name: 'Resilience',
      description:
        'Evaluates supply chain strength and operational stability. Assesses supply chain diversification, climate risk exposure, business continuity planning, and adaptation to market disruption.',
      range: '0-25',
      color: 'text-gold',
    },
  ];

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
            <span className="text-gray-300">Methodology</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="gradient-hero pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">The OTA Power Score</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive framework for evaluating sustainable corporate leadership across five key
            dimensions, from environmental impact to operational resilience.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-navy/50 border-b border-navy">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">How It Works</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                The OTA Power Score evaluates leaders of the world's most sustainable corporations by
                assessing their performance across five complementary dimensions. Each dimension is
                scored from 0-25, totalling a maximum of 125.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Leaders are ranked globally based on their comprehensive performance, with special
                recognition given to those demonstrating leadership across multiple dimensions rather
                than excelling in a single area.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The Global 100 identifies the top 50 sustainable leaders internationally, reflecting
                the most ambitious corporate sustainability efforts across 31 countries and 9 sectors.
              </p>
            </div>

            <div className="bg-dark rounded-lg border border-navy p-8">
              <h3 className="text-xl font-bold mb-6 text-gold">Key Metrics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-navy">
                  <span className="text-gray-300">Total Leaders Evaluated</span>
                  <span className="text-2xl font-bold text-gold">50</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-navy">
                  <span className="text-gray-300">Countries Represented</span>
                  <span className="text-2xl font-bold text-teal">31</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-navy">
                  <span className="text-gray-300">Sectors Covered</span>
                  <span className="text-2xl font-bold text-gold">9</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Dimensions Assessed</span>
                  <span className="text-2xl font-bold text-teal">5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dimensions Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">The Five Dimensions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
            {dimensions.map((dimension, index) => (
              <div
                key={dimension.name}
                className="p-8 bg-navy rounded-lg border border-navy/50 hover:border-teal transition-colors"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-teal/20 border border-teal">
                      <span className={`text-lg font-bold ${dimension.color}`}>{index + 1}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{dimension.name}</h3>
                    <p className="text-gold text-sm font-semibold">Max Score: {dimension.range}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{dimension.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers Section */}
      <section className="py-16 md:py-24 bg-navy/50 border-b border-navy">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Leadership Tiers</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-dark rounded-lg border border-gold/50">
              <h3 className="text-2xl font-bold text-gold mb-3">Vanguard</h3>
              <p className="text-gray-300 mb-4">Ranks 1-10</p>
              <p className="text-gray-200 leading-relaxed">
                Leaders demonstrating exceptional commitment to sustainable transformation. These
                executives are pioneering new approaches to environmental responsibility, corporate
                governance, and sustainable innovation, reshaping their industries and setting global
                standards for sustainable corporate leadership.
              </p>
            </div>

            <div className="p-8 bg-dark rounded-lg border border-teal/50">
              <h3 className="text-2xl font-bold text-teal mb-3">Momentum</h3>
              <p className="text-gray-300 mb-4">Ranks 11-50</p>
              <p className="text-gray-200 leading-relaxed">
                Leaders building sustainable market leadership with strong commitment to environmental
                and social responsibility. These executives demonstrate significant progress in
                integrating sustainability into core business strategy, with growing influence across
                their sectors and regions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Sectors Represented</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Renewable Energy',
              'Technology',
              'Financial Services',
              'Industrial',
              'Consumer',
              'Healthcare & Pharma',
              'Infrastructure & Logistics',
              'Materials & Resources',
              'Telecommunications',
            ].map((sector) => (
              <div
                key={sector}
                className="p-6 bg-navy rounded-lg border border-navy/50 hover:border-gold transition-colors text-center"
              >
                <p className="font-semibold text-lg">{sector}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-navy to-dark border-t border-navy/50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Learn More About Sustainable Leadership</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore the full Global 100 ranking and discover how leading executives are reshaping
            corporate sustainability across the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/" className="btn-primary">
              View Global 100 Rankings
            </a>
            <a href="https://fifty.otamediagroup.com" className="btn-secondary">
              Explore The Fifty
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
