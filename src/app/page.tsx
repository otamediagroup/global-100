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
            <img
              src="https://cdn.prod.website-files.com/69889742baae82d9f9911b3b/69de03db684c57d9614bac63_Global%20100%20Logo%20v2.png"
              alt="Global 100"
              className="mx-auto mb-8 w-full max-w-2xl"
            />
            <p className="text-xl md:text-2xl text-gold mb-6">
              100 leaders. Two rankings. One definitive benchmark.
            </p>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-4">
              The Global 100 unites The Fifty, the UK's definitive leadership ranking,
              with 50 of the world's most impactful international executives,
              all measured against the OTA Power Score methodology across
              five dimensions of sustainable leadership.
            </p>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto">
              50 leaders ranked. 50 seats open. Know someone who belongs on this list?{' '}
              <a href="#nominate" className="text-gold hover:underline font-semibold">
                Nominate a leader below.
              </a>
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center py-8 border-t border-b border-navy/50">
            <div className="animate-fadeIn" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl md:text-4xl font-bold text-gold">50<span className="text-lg text-gray-400">/100</span></div>
              <p className="text-sm text-gray-300">Leaders Ranked</p>
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

      {/* Nominate Section */}
      <section id="nominate" className="py-16 md:py-24 border-t border-navy/50 bg-navy/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">50 Ranked. 50 Seats Open.</span>
            </h2>
            <p className="text-gray-300 mb-3 text-lg">
              The Global 100 is not complete. We are looking for the next 50 leaders
              who are transforming global business through sustainable leadership.
            </p>
            <p className="text-gray-400 mb-8">
              Nominate a CEO, Chair, or senior executive you believe deserves a place
              on the Global 100. All nominees are assessed through the OTA Power Score
              methodology and reviewed by our advisory panel.
            </p>
            <a
              href="mailto:nominations@otamediagroup.com?subject=Global%20100%20Nomination"
              className="inline-block px-8 py-4 bg-gold text-dark font-bold rounded-lg text-lg hover:bg-opacity-90 transition-all"
            >
              Nominate a Leader
            </a>
            <p className="text-xs text-gray-500 mt-4">
              Nominations close 31 December 2026. All submissions reviewed by the OTA Media editorial team.
            </p>
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

      {/* Enterprise Security Banner */}
      <section className="py-10 md:py-14 border-t border-navy/50 bg-dark">
        <div className="container-custom">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-3">
              <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <h3 className="text-lg md:text-xl font-bold tracking-widest uppercase text-white">
                Enterprise-Grade Security
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 max-w-4xl mx-auto text-center">
            <div>
              <p className="text-sm font-semibold text-gold mb-1">256-bit TLS</p>
              <p className="text-xs text-gray-400">encryption</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gold mb-1">SOC 2 Type II</p>
              <p className="text-xs text-gray-400">certified infrastructure</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gold mb-1">GDPR compliant</p>
              <p className="text-xs text-gray-400">ICO registered</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gold mb-1">Row-level</p>
              <p className="text-xs text-gray-400">data isolation</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-sm font-semibold text-gold mb-1">Independent</p>
              <p className="text-xs text-gray-400">security audits</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Security Banner */}
      <section className="py-10 md:py-14 border-t border-navy/50 bg-dark">
        <div className="container-custom">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-3">
              <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <h3 className="text-lg md:text-xl font-bold tracking-widest uppercase text-white">
                Enterprise-Grade Security
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 max-w-4xl mx-auto text-center">
            <div>
              <p className="text-sm font-semibold text-gold mb-1">256-bit TLS</p>
              <p className="text-xs text-gray-400">encryption</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gold mb-1">SOC 2 Type II</p>
              <p className="text-xs text-gray-400">certified infrastructure</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gold mb-1">GDPR compliant</p>
              <p className="text-xs text-gray-400">ICO registered</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gold mb-1">Row-level</p>
              <p className="text-xs text-gray-400">data isolation</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-sm font-semibold text-gold mb-1">Independent</p>
              <p className="text-xs text-gray-400">security audits</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
