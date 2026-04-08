"use client";

import { useEffect, useState } from "react";
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ChevronRightIcon, 
  ArrowUpIcon,
  GlobeAltIcon
} from "@heroicons/react/24/outline";
import "../styles/premium-footer.css";

// SVG Icons for Socials
const FacebookIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
);
const TwitterIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
);
const InstagramIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
);

const WhatsAppIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12.013 2.004c-5.502 0-9.968 4.466-9.968 9.97 0 1.761.458 3.483 1.328 5.006L2.1 21.603l4.757-1.246c1.464.8 3.12 1.221 4.819 1.221H12c5.503 0 9.969-4.468 9.969-9.973 0-2.668-1.038-5.176-2.923-7.062a9.907 9.907 0 00-7.022-2.923v-.016h-.016zm.004 1.637c2.235 0 4.333.87 5.913 2.454a8.318 8.318 0 012.449 5.922c0 4.606-3.751 8.358-8.36 8.358h-.008c-1.469 0-2.915-.382-4.181-1.109l-.3-.171-3.111.815.828-3.033-.188-.299c-.802-1.267-1.225-2.735-1.225-4.249 0-4.607 3.752-8.358 8.361-8.358h.02c.001 0 .002.001.002.001zm-3.82 3.659c-.214 0-.583.08-.888.42-.306.34-1.163 1.137-1.163 2.768s1.192 3.207 1.357 3.428c.164.22 2.336 3.565 5.659 4.996.791.341 1.408.544 1.888.697.794.252 1.517.217 2.083.13 6.346-.967 3.203-1.9 3.511-2.955.308-1.056.308-1.961.216-2.152-.092-.191-.322-.291-.674-.467-.352-.176-2.083-1.026-2.405-1.144-.323-.118-.558-.176-.793.176-.235.352-.907 1.144-1.112 1.378-.205.235-.411.264-.763.088-.352-.176-1.488-.549-2.836-1.758-1.048-.94-1.755-2.1-1.962-2.45-.205-.352-.022-.544.154-.719.158-.158.352-.411.528-.616.176-.205.235-.352.352-.587.118-.235.059-.44-.029-.616-.088-.176-.793-1.912-1.087-2.618-.286-.689-.576-.594-.793-.605-.202-.01-.437-.013-.672-.013z" /></svg>
);

const branches = [
  "Armoor", "Bidar", "Bodhan", "Hyderabad", "Zaheerabad", "Yellareddy"
];

const quickLinks = [
  { name: "Packages", href: "/packages" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function PremiumFooter() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!mounted) return null;

  return (
    <footer className="premium-footer">
      <div className="pf-top-line"></div>
      <div className="pf-blob"></div>

      <div className="pf-container">
        
        <div className="pf-glass-wrapper">
          
          {/* Column 1: Brand */}
          <div className="pf-brand">
            <a href="/" className="pf-brand-logo-container">
              <GlobeAltIcon className="pf-brand-logo" />
              <div className="pf-brand-title">Fly International<br/>Tours & Travels</div>
            </a>
            <p className="pf-text">
              Pioneering your sacred journey with world-class facilities, seamless visa processing, and dedicated spiritual guidance to Makkah and Madinah.
            </p>
            <div className="pf-socials">
              <a href="#" className="pf-social-icon" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="#" className="pf-social-icon" aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a href="#" className="pf-social-icon" aria-label="Instagram">
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="pf-quick-links">
            <h3 className="pf-col-title">Explore</h3>
            <div className="pf-links">
              {quickLinks.map((link) => (
                <a key={link.name} href={link.href} className="pf-link">
                  <ChevronRightIcon className="pf-link-arrow" />
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Office Locations */}
          <div className="pf-locations">
            <h3 className="pf-col-title">Our Offices</h3>
            
            <div className="pf-office-head">
              <MapPinIcon className="pf-office-icon" />
              <div>
                <strong style={{ display: 'block', color: 'var(--pf-text-primary)', marginBottom: '4px' }}>Head Office</strong>
                <span className="pf-text">Beside Mandal Office, Pitlam, 503310</span>
              </div>
            </div>

            <div className="pf-branches">
              {branches.map(branch => (
                <div key={branch} className="pf-branch">
                  <MapPinIcon className="pf-branch-icon" />
                  {branch}
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Contact Us */}
          <div className="pf-contact">
            <h3 className="pf-col-title">Contact Us</h3>
            
            <a href="tel:+916281144625" className="pf-contact-item">
              <PhoneIcon />
              +91 62811 44625
            </a>

            <a href="mailto:support@hajjumrahtravels.com" className="pf-contact-item">
              <EnvelopeIcon />
              support@hajjumrahtravels.com
            </a>

            <div className="pf-contact-buttons">
              <a href="tel:+916281144625" className="pf-btn pf-btn-primary">
                Call Now
              </a>
              <a 
                href="https://wa.me/916281144625?text=Hello,%20I%20need%20help%20with%20Umrah%20packages" 
                target="_blank" 
                rel="noreferrer"
                className="pf-btn pf-btn-secondary"
              >
                <span className="pf-whatsapp"><WhatsAppIcon style={{width: 20, height: 20}} /></span>
                WhatsApp Us
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pf-bottom relative">
          
          <button 
            className="pf-scroll-top"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ArrowUpIcon className="w-5 h-5" />
          </button>

          <div className="pf-copyright">
            &copy; 2026 Fly International Tours & Travels. All rights reserved.
          </div>
          <div className="pf-love">
            Designed with <span className="pf-heart">♥</span> for pilgrims
          </div>
        </div>

      </div>
    </footer>
  );
}
