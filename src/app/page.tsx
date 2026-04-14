'use client';

import { useState } from 'react';
import { leaders, countries, sectors } from '@/data/leaders';
import LeaderCard from '@/components/LeaderCard';
import SearchFilter from '@/components/SearchFilter';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedSector, setSelectedSector] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const vanguardLeaders = leaders.filter((l) => l.tier === 'vanguard');
  const momentumLeaders = leaders.filter((l) => l.tier === 'momentum');

  const filterLeaders = (leadersToFilter: typeof leaders) => {
    return leadersToFilter.filter((leader) => {
      const matchesSearch =
        searchTerm === '' ||
        leader.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        leader.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        leader.role.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCountry = selectedCountry === '' || leader.country === selectedCountry;
      const matchesSector = selectedSector === '' || leader.sector === selectedSector;

      return matchesSearch && matchesCountry && matchesSector;
    });
  };

  const filteredVanguard = filterLeaders(vanguardLeaders);
  const filteredMomentum = filterLeaders(momentumLeaders);

  return (
    <main className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="gradient-hero pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container-custom">
          <div className="text-center mb-12 animate-slideInLeft">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">The Global 100</h1>
            <p className="text-xl md:text-2xl text-gold mb-6">
              Ranking the leaders of the world's most sustainable corporations
            </p>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
              OTA Media's expansion of The Fifty benchmarks 50 international executives
              measured against the OTA Power Score methodology across
              five dimensions of sustainable leadership.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center py-8 border-t border-b border-navy/50">
            <div className="animate-fadeIn" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl md:text-4xl font-bold text-gold">50</div>
              <p className="text-sm text-gray-300">Leaders</p>
            </div>
            <div className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl md:text-4xl font-bold text-gold">31</div>
              <p className="text-sm text-gray-300">Countries</p>
            </div>
            <div className="animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl md:text-4xl font-bold text-gold">9</div>
              <p className="text-sm text-gray-300">Sectors</p>
            </div>
            <div className="animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl md:text-4xl font-bold text-gold">2026</div>
              <p className="text-sm text-gray-300">Benchmark Year</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-12 md:py-16 bg-navy/50 border-b border-navy">
        <div className="container-custom">
          <SearchFilter
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedCountry={selectedCountry}
            onCountryChange={setSelectedCountry}
            selectedSector={selectedSector}
            onSectorChange={setSelectedSector}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            countries={countries}
            sectors={sectors}
          />
        </div>
      </section>

      {/* Leaders Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          {/* Vanguard Tier */}
          <div className="mb-20">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                <span className="text-gradient">Vanguard</span>
              </h2>
              <p className="text-gray-300">Ranks 1-10 - Leading sustainable corporate transformation</p>
              {filteredVanguard.length > 0 && (
                <p className="text-sm text-gold mt-2">{filteredVanguard.length} of 10 leaders</p>
              )}
            </div>

            {filteredVanguard.length > 0 ? (
              <div
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                    : 'space-y-4'
                }
              >
                {filteredVanguard.map((leader) => (
                  <LeaderCard key={leader.slug} leader={leader} viewMode={viewMode} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-400">
                <p>No leaders found matching your filters.</p>
              </div>
            )}
          </div>

          {/* Momentum Tier */}
          <div className="mb-20">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                <span className="text-gradient">Momentum</span>
              </h2>
              <p className="text-gray-300">Ranks 11-50 - Building sustainable market leadership</p>
              {filteredMomentum.length > 0 && (
                <p className="text-sm text-gold mt-2">{filteredMomentum.length} of 40 leaders</p>
              )}
            </div>

            {filteredMomentum.length > 0 ? (
              <div
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                    : 'space-y-4'
                }
              >
                {filteredMomentum.map((leader) => (
                  <LeaderCard key={leader.slug} leader={leader} viewMode={viewMode} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-400">
                <p>No leaders found matching your filters.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-navy to-dark border-t border-navy/50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Discover More Leadership Intelligence</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            The Global 100 is part of OTA Media's Leadership Index. Explore comprehensive assessments of
            leaders across The Fifty (UK), corporate boards, and emerging talent.
          </p>
          <a href="https://index.otamediagroup.com" className="btn-primary">
            Explore Leadership Index
          </a>
        </div>
      </section>
    </main>
  );
}
