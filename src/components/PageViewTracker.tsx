// src/components/PageViewTracker.tsx

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTrackConversion } from "@/hooks/useTrackConversion";

interface PageViewTrackerProps {
  trackOnMount?: boolean;
}

export const PageViewTracker = ({ trackOnMount = false }: PageViewTrackerProps) => {
  const location = useLocation();
  const { trackPageView } = useTrackConversion();

  useEffect(() => {
    if (trackOnMount) {
      trackPageView();
    }
  }, [trackOnMount, location.pathname, trackPageView]);

  return null;
};
