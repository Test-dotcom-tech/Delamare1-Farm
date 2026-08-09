// src/hooks/useTrackConversion.ts

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const useTrackConversion = () => {
  const trackPageView = () => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-18366126842/BiNVCI6MvtocEPq107VE',
        'value': 1.0,
        'currency': 'KES' // Changed to Kenyan Shillings
      });
      console.log('✅ Page view conversion tracked!');
    }
  };

  const trackClick = () => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-18366126842/BiNVCI6MvtocEPq107VE',
        'value': 1.0,
        'currency': 'KES'
      });
      console.log('✅ Click conversion tracked!');
    }
  };

  return { trackPageView, trackClick };
};
