'use client';

interface SearchFilterProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCountry: string;
  onCountryChange: (value: string) => void;
  selectedSector: string;
  onSectorChange: (value: string) => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
  countries: string[];
  sectors: string[];
}

export default function SearchFilter({
  searchTerm,
  onSearchChange,
  selectedCountry,
  onCountryChange,
  selectedSector,
  onSectorChange,
  viewMode,
  onViewModeChange,
  countries,
  sectors,
}: SearchFilterProps) {
  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search by name, company, or role..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-6 py-3 bg-dark border border-navy rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
        />
        <svg
          className="absolute right-4 top-3.5 w-5 h-5 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* Filters Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Country Filter */}
        <div>
          <label className="block text-sm font-semibold text-gold mb-2">Country</label>
          <select
            value={selectedCountry}
            onChange={(e) => onCountryChange(e.target.value)}
            className="w-full px-4 py-2.5 bg-dark border border-navy rounded-lg text-white focus:outline-none focus:border-gold transition-colors"
          >
            <option value="">All Countries</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        {/* Sector Filter */}
        <div>
          <label className="block text-sm font-semibold text-gold mb-2">Sector</label>
          <select
            value={selectedSector}
            onChange={(e) => onSectorChange(e.target.value)}
            className="w-full px-4 py-2.5 bg-dark border border-navy rounded-lg text-white focus:outline-none focus:border-gold transition-colors"
          >
            <option value="">All Sectors</option>
            {sectors.map((sector) => (
              <option key={sector} value={sector}>
                {sector}
              </option>
            ))}
          </select>
        </div>

        {/* View Mode Toggle */}
        <div className="md:col-span-1 lg:col-span-2">
          <label className="block text-sm font-semibold text-gold mb-2">View</label>
          <div className="flex gap-2 bg-dark border border-navy rounded-lg p-1">
            <button
              onClick={() => onViewModeChange('grid')}
              className={`flex-1 px-3 py-1.5 rounded transition-colors font-semibold text-sm ${
                viewMode === 'grid'
                  ? 'bg-gold text-dark'
                  : 'text-gray-400 hover:text-white'
              }`}
              title="Grid view"
            >
              <svg
                className="w-5 h-5 mx-auto"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
              </svg>
            </button>
            <button
              onClick={() => onViewModeChange('list')}
              className={`flex-1 px-3 py-1.5 rounded transition-colors font-semibold text-sm ${
                viewMode === 'list'
                  ? 'bg-gold text-dark'
                  : 'text-gray-400 hover:text-white'
              }`}
              title="List view"
            >
              <svg
                className="w-5 h-5 mx-auto"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Active Filters Display */}
      {(searchTerm || selectedCountry || selectedSector) && (
        <div className="flex flex-wrap gap-2">
          {searchTerm && (
            <button
              onClick={() => onSearchChange('')}
              className="px-3 py-1 bg-gold/20 text-gold rounded-full text-sm font-semibold hover:bg-gold/30 transition-colors flex items-center gap-2"
            >
              Search: {searchTerm}
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
          {selectedCountry && (
            <button
              onClick={() => onCountryChange('')}
              className="px-3 py-1 bg-teal/20 text-teal rounded-full text-sm font-semibold hover:bg-teal/30 transition-colors flex items-center gap-2"
            >
              {selectedCountry}
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
          {selectedSector && (
            <button
              onClick={() => onSectorChange('')}
              className="px-3 py-1 bg-gold/20 text-gold rounded-full text-sm font-semibold hover:bg-gold/30 transition-colors flex items-center gap-2"
            >
              {selectedSector}
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
