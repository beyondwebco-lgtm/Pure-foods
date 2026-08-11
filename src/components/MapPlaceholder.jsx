import React from 'react';
import { MapPin, Navigation, Building2, ExternalLink, ArrowRight } from 'lucide-react';

export default function MapPlaceholder() {
  const mapsSearchUrl = "https://www.google.com/maps/search/?api=1&query=Pure+Foods+%26+Beverages%2C+TTC+Industrial+Area%2C+Mahape+MIDC%2C+Navi+Mumbai%2C+Maharashtra";

  return (
    <a
      href={mapsSearchUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block relative rounded-2xl overflow-hidden border border-[#DCE6ED] bg-[#FAFBFD] shadow-lg group hover:shadow-2xl transition-all duration-300"
    >
      {/* Industrial Vector Map UI Background Container */}
      <div className="relative h-80 sm:h-96 w-full flex items-center justify-center p-6 bg-gradient-to-br from-[#FAFBFD] via-[#F0F5F8] to-[#E6F7F8]/80 overflow-hidden">
        
        {/* Subtle Map Grid Lines & Radar Rings SVG */}
        <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="20%" x2="100%" y2="20%" stroke="#003D5B" strokeWidth="1" strokeDasharray="6 6" />
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#003D5B" strokeWidth="1" opacity="0.5" />
          <line x1="0" y1="80%" x2="100%" y2="80%" stroke="#003D5B" strokeWidth="1" strokeDasharray="6 6" />
          <line x1="25%" y1="0" x2="25%" y2="100%" stroke="#003D5B" strokeWidth="1" strokeDasharray="6 6" />
          <line x1="60%" y1="0" x2="60%" y2="100%" stroke="#003D5B" strokeWidth="1" opacity="0.5" />
          <line x1="85%" y1="0" x2="85%" y2="100%" stroke="#003D5B" strokeWidth="1" strokeDasharray="6 6" />
          
          {/* Pulsing Concentric Location Target Rings */}
          <circle cx="60%" cy="50%" r="70" stroke="#00A8B5" strokeWidth="1.5" fill="none" opacity="0.4" />
          <circle cx="60%" cy="50%" r="140" stroke="#00A8B5" strokeWidth="1" strokeDasharray="4 4" fill="none" opacity="0.2" />
        </svg>

        {/* Central Clickable Location Card */}
        <div className="relative z-10 text-center max-w-md w-full bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-[#DCE6ED] shadow-xl space-y-4 group-hover:border-[#003D5B]/40 group-hover:-translate-y-1 transition-all duration-300">
          
          {/* Location Pin Icon Badge */}
          <div className="w-14 h-14 mx-auto rounded-full bg-[#003D5B] text-white flex items-center justify-center shadow-md group-hover:bg-[#00A8B5] transition-colors">
            <MapPin className="w-7 h-7 text-[#E6F7F8]" />
          </div>
          
          <div className="space-y-1.5">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[10.5px] font-bold bg-[#E6F7F8] text-[#003D5B] border border-[#BDE7EA] mb-1 uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-[#00A8B5]" />
              <span>MANUFACTURING FACILITY</span>
            </div>
            
            <h4 className="text-xl sm:text-2xl font-extrabold text-[#003D5B] tracking-tight uppercase">
              PURE FOODS &amp; BEVERAGES
            </h4>
            
            <p className="text-sm font-semibold text-[#1A2B35]">
              TTC Industrial Area, Mahape MIDC
            </p>
            
            <p className="text-xs text-[#4A6070] font-medium">
              Navi Mumbai, Maharashtra
            </p>
          </div>

          {/* VIEW ON GOOGLE MAPS CTA BUTTON */}
          <div className="pt-3 border-t border-[#DCE6ED]">
            <span className="inline-flex items-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#003D5B] group-hover:bg-[#004B6E] rounded-xl transition-all duration-200 shadow-sm">
              <span>VIEW ON GOOGLE MAPS</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>

        </div>
      </div>

      {/* Clean Footer Strip */}
      <div className="bg-[#003D5B] px-6 py-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white">
        <div className="flex items-center space-x-2">
          <Navigation className="w-4 h-4 text-[#00A8B5] shrink-0" />
          <span className="font-medium">Industrial Hub: TTC Industrial Area, Mahape MIDC, Navi Mumbai</span>
        </div>
        
        <div className="flex items-center space-x-1.5 text-[#E6F7F8] font-semibold">
          <span>Open Directions in Google Maps</span>
          <ExternalLink className="w-3.5 h-3.5 text-[#00A8B5]" />
        </div>
      </div>
    </a>
  );
}
