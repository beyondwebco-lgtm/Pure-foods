import React from 'react';
import { MapPin, Navigation, Building2, ExternalLink, ArrowRight, Globe } from 'lucide-react';

export default function MapPlaceholder() {
  // Google Maps Satellite View URL (t=k forces Satellite imagery mode)
  const satelliteMapsUrl = "https://www.google.com/maps/search/?api=1&query=Pure+Foods+%26+Beverages%2C+TTC+Industrial+Area%2C+Mahape+MIDC%2C+Navi+Mumbai%2C+Maharashtra&t=k";

  return (
    <a
      href={satelliteMapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block relative rounded-2xl overflow-hidden border border-[#DCE6ED] bg-[#001B2E] shadow-xl group hover:shadow-2xl transition-all duration-300"
    >
      {/* SATELLITE VIEW AERIAL VISUAL BACKGROUND */}
      <div className="relative h-80 sm:h-96 w-full flex items-center justify-center p-6 overflow-hidden">
        
        {/* Satellite Imagery Foundation Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero_factory.png"
            alt="Pure Foods Industrial Bottling Facility Satellite Aerial Context"
            className="w-full h-full object-cover object-center filter saturate-[0.8] contrast-[1.1] brightness-[0.7] group-hover:scale-105 transition-transform duration-700"
          />
          {/* Dark Oceanic Satellite Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#001B2E] via-[#002B40]/75 to-[#001B2E]/60 backdrop-blur-[2px]"></div>
        </div>

        {/* Satellite Grid & Target Crosshair SVG Overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-35 pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="25%" x2="100%" y2="25%" stroke="#00A8B5" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#00A8B5" strokeWidth="1" opacity="0.6" />
          <line x1="0" y1="75%" x2="100%" y2="75%" stroke="#00A8B5" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="25%" y1="0" x2="25%" y2="100%" stroke="#00A8B5" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#00A8B5" strokeWidth="1" opacity="0.6" />
          <line x1="75%" y1="0" x2="75%" y2="100%" stroke="#00A8B5" strokeWidth="1" strokeDasharray="4 4" />
          
          {/* Satellite Target Radar Circles */}
          <circle cx="50%" cy="50%" r="80" stroke="#00A8B5" strokeWidth="1.5" fill="none" opacity="0.5" />
          <circle cx="50%" cy="50%" r="160" stroke="#00A8B5" strokeWidth="1" strokeDasharray="6 6" fill="none" opacity="0.25" />
        </svg>

        {/* Top-Right Satellite Mode Indicator Badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg text-[10.5px] font-mono font-bold bg-[#001B2E]/90 text-[#00A8B5] border border-[#00A8B5]/40 backdrop-blur-md shadow-sm">
            <Globe className="w-3.5 h-3.5 text-[#00A8B5]" />
            <span>SATELLITE MODE</span>
          </span>
        </div>

        {/* Central Clickable Location Card */}
        <div className="relative z-10 text-center max-w-md w-full bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/80 shadow-2xl space-y-4 group-hover:border-[#00A8B5] group-hover:-translate-y-1 transition-all duration-300">
          
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

          {/* VIEW ON GOOGLE MAPS SATELLITE CTA BUTTON */}
          <div className="pt-3 border-t border-[#DCE6ED]">
            <span className="inline-flex items-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#003D5B] group-hover:bg-[#00A8B5] rounded-xl transition-all duration-200 shadow-sm">
              <span>VIEW SATELLITE MAP</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>

        </div>
      </div>

      {/* Satellite Footer Strip */}
      <div className="bg-[#001B2E] px-6 py-4 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white">
        <div className="flex items-center space-x-2">
          <Navigation className="w-4 h-4 text-[#00A8B5] shrink-0" />
          <span className="font-medium">Satellite View: TTC Industrial Area, Mahape MIDC, Navi Mumbai</span>
        </div>
        
        <div className="flex items-center space-x-1.5 text-[#E6F7F8] font-semibold">
          <span>Open Satellite Directions in Google Maps</span>
          <ExternalLink className="w-3.5 h-3.5 text-[#00A8B5]" />
        </div>
      </div>
    </a>
  );
}
