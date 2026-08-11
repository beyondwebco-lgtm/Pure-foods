import React from 'react';
import { MapPin, Navigation, Compass, Building2, ExternalLink } from 'lucide-react';

export default function MapPlaceholder() {
  return (
    <div className="relative rounded-2xl overflow-hidden border border-brand-border bg-brand-deep text-white shadow-xl">
      {/* Industrial Vector Map UI Background */}
      <div className="absolute inset-0 opacity-15 bg-industrial-grid"></div>
      
      {/* Map Graphic Canvas Simulation */}
      <div className="relative h-80 sm:h-96 w-full flex items-center justify-center p-6 bg-gradient-to-br from-brand-dark via-brand-deep to-brand-forest">
        {/* Map Grid Lines SVG */}
        <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="20%" x2="100%" y2="20%" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="6 6" />
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#FFFFFF" strokeWidth="1" />
          <line x1="0" y1="80%" x2="100%" y2="80%" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="6 6" />
          <line x1="25%" y1="0" x2="25%" y2="100%" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="6 6" />
          <line x1="60%" y1="0" x2="60%" y2="100%" stroke="#FFFFFF" strokeWidth="1" />
          <line x1="85%" y1="0" x2="85%" y2="100%" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="6 6" />
          <circle cx="60%" cy="50%" r="60" stroke="#237D5D" strokeWidth="1.5" fill="none" opacity="0.6" />
          <circle cx="60%" cy="50%" r="120" stroke="#237D5D" strokeWidth="1" strokeDasharray="4 4" fill="none" opacity="0.3" />
        </svg>

        {/* Central Facility Location Marker Box */}
        <div className="relative z-10 text-center max-w-md bg-brand-dark/90 backdrop-blur-md p-6 sm:p-8 rounded-xl border border-white/20 shadow-2xl space-y-4">
          <div className="w-14 h-14 mx-auto rounded-full bg-brand-emerald text-white flex items-center justify-center shadow-lg animate-pulse">
            <MapPin className="w-7 h-7" />
          </div>
          
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-white/10 text-brand-mint border border-white/15 mb-2">
              <Building2 className="w-3.5 h-3.5" />
              <span>MANUFACTURING FACILITY</span>
            </div>
            
            <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              PURE FOODS &amp; BEVERAGES
            </h4>
            
            <p className="text-xs sm:text-sm text-gray-300 font-medium mt-1">
              TTC Industrial Area, Mahape MIDC, Navi Mumbai
            </p>
          </div>

          <div className="pt-2 flex items-center justify-center space-x-4 text-[11px] font-mono text-gray-400 border-t border-white/10">
            <span className="flex items-center">
              <Compass className="w-3.5 h-3.5 mr-1 text-brand-emerald" /> 19.1172° N, 73.0165° E
            </span>
            <span>•</span>
            <span>Mahape MIDC Zone</span>
          </div>
        </div>
      </div>

      {/* Map Card Footer Bar */}
      <div className="bg-brand-dark px-6 py-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-300">
        <div className="flex items-center space-x-2">
          <Navigation className="w-4 h-4 text-brand-emerald shrink-0" />
          <span>Industrial Hub: Navi Mumbai TTC MIDC Zone</span>
        </div>
        <div className="text-gray-400 text-right">
          Visual Map Location Placeholder (No API Integration)
        </div>
      </div>
    </div>
  );
}
