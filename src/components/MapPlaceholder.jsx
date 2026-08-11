import React from 'react';
import { MapPin, Phone, Mail, Navigation, ExternalLink, ArrowRight, Building2 } from 'lucide-react';

export default function MapPlaceholder() {
  const mapsSearchUrl = "https://www.google.com/maps/search/?api=1&query=Pure+Foods+%26+Beverages%2C+TTC+Industrial+Area%2C+Mahape+MIDC%2C+Navi+Mumbai%2C+Maharashtra";
  const embedIframeUrl = "https://maps.google.com/maps?q=Pure%20Foods%20%26%20Beverages,%20TTC%20Industrial%20Area,%20Mahape%20MIDC,%20Navi%20Mumbai,%20Maharashtra&t=&z=14&ie=UTF8&iwloc=&output=embed";

  return (
    <div className="bg-[#F7F6F0] rounded-3xl p-6 sm:p-10 border border-[#073B2A]/12 shadow-sm space-y-8">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        
        {/* LEFT COLUMN: CONTACT INFORMATION PANEL (35-40% Desktop Width) */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-7 sm:p-9 border border-[#073B2A]/12 shadow-md flex flex-col justify-between space-y-6">
          
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0B6B50] block">
                Facility Location
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#073B2A] uppercase leading-tight">
                VISIT OUR FACILITY
              </h3>
              <p className="text-xs sm:text-sm text-[#17211D]/80 leading-relaxed font-medium pt-1">
                Come visit our manufacturing facility at TTC Industrial Area, Mahape MIDC, Navi Mumbai.
              </p>
            </div>

            <div className="space-y-5 pt-2 border-t border-[#DCE8E1]">
              
              {/* Address */}
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#F7F6F0] text-[#073B2A] flex items-center justify-center shrink-0 border border-[#DCE8E1]">
                  <MapPin className="w-5 h-5 text-[#0B6B50]" />
                </div>
                <div>
                  <h5 className="text-[11px] font-bold uppercase tracking-wider text-[#0B6B50]">
                    ADDRESS
                  </h5>
                  <p className="text-sm font-bold text-[#17211D] mt-0.5">
                    TTC Industrial Area, Mahape MIDC,
                  </p>
                  <p className="text-xs text-[#17211D]/80 font-medium">
                    Navi Mumbai, Maharashtra
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#F7F6F0] text-[#073B2A] flex items-center justify-center shrink-0 border border-[#DCE8E1]">
                  <Phone className="w-5 h-5 text-[#0B6B50]" />
                </div>
                <div>
                  <h5 className="text-[11px] font-bold uppercase tracking-wider text-[#0B6B50]">
                    PHONE
                  </h5>
                  <p className="text-sm font-mono font-bold text-[#17211D] mt-0.5">
                    9988776655
                  </p>
                  <p className="text-xs text-[#17211D]/70 font-medium">
                    Mon – Sat: 9:00 AM – 6:00 PM IST
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#F7F6F0] text-[#073B2A] flex items-center justify-center shrink-0 border border-[#DCE8E1]">
                  <Mail className="w-5 h-5 text-[#0B6B50]" />
                </div>
                <div>
                  <h5 className="text-[11px] font-bold uppercase tracking-wider text-[#0B6B50]">
                    EMAIL
                  </h5>
                  <p className="text-sm font-mono font-bold text-[#17211D] mt-0.5">
                    purefoods@gmai.com
                  </p>
                  <p className="text-xs text-[#17211D]/70 font-medium">
                    For commercial B2B enquiries &amp; RFQs
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* VIEW ON GOOGLE MAPS CTA BUTTON */}
          <div className="pt-6 border-t border-[#DCE8E1]">
            <a
              href={mapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 text-xs font-bold uppercase tracking-wider text-white bg-[#073B2A] hover:bg-[#0B6B50] rounded-xl shadow-md hover:shadow-lg transition-all duration-200 inline-flex items-center justify-center space-x-2 group"
            >
              <span>VIEW ON GOOGLE MAPS</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

        {/* RIGHT COLUMN: REAL EMBEDDED GOOGLE MAP IFRAME (60-65% Desktop Width) */}
        <div className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-[#073B2A]/12 shadow-xl min-h-[380px] sm:min-h-[500px] lg:min-h-[520px] bg-[#FAFBFD]">
          <iframe
            title="Pure Foods & Beverages Navi Mumbai Facility Google Map"
            src={embedIframeUrl}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '380px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full min-h-[380px] sm:min-h-[500px] lg:min-h-[520px] rounded-3xl"
          ></iframe>
        </div>

      </div>

    </div>
  );
}
