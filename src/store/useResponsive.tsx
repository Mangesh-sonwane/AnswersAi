import { useState, useEffect } from 'react';

interface ResponsiveState {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  screenWidth: number;
  screenHeight: number;
}

interface ResponsiveBreakpoints {
  mobile: number;
  tablet: number;
  desktop: number;
}

const defaultBreakpoints: ResponsiveBreakpoints = {
  mobile: 640, // Tailwind's sm breakpoint
  tablet: 1024, // Tailwind's lg breakpoint
  desktop: 1280, // Tailwind's xl breakpoint
};

export const useResponsive = (
  customBreakpoints?: Partial<ResponsiveBreakpoints>
): ResponsiveState => {
  const breakpoints = { ...defaultBreakpoints, ...customBreakpoints };

  const [responsiveState, setResponsiveState] = useState<ResponsiveState>(
    () => {
      // Initialize with default values for SSR compatibility
      const initialWidth =
        typeof window !== 'undefined' ? window.innerWidth : 1024;
      const initialHeight =
        typeof window !== 'undefined' ? window.innerHeight : 768;

      return {
        isMobile: initialWidth < breakpoints.mobile,
        isTablet:
          initialWidth >= breakpoints.mobile &&
          initialWidth < breakpoints.tablet,
        isDesktop: initialWidth >= breakpoints.tablet,
        screenWidth: initialWidth,
        screenHeight: initialHeight,
      };
    }
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setResponsiveState({
        isMobile: width < breakpoints.mobile,
        isTablet: width >= breakpoints.mobile && width < breakpoints.tablet,
        isDesktop: width >= breakpoints.tablet,
        screenWidth: width,
        screenHeight: height,
      });
    };

    // Set initial values on mount
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoints.mobile, breakpoints.tablet, breakpoints.desktop]);

  return responsiveState;
};

// Additional utility hook for common responsive patterns
export const useBreakpoint = (breakpoint: keyof ResponsiveBreakpoints) => {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  switch (breakpoint) {
    case 'mobile':
      return isMobile;
    case 'tablet':
      return isTablet;
    case 'desktop':
      return isDesktop;
    default:
      return false;
  }
};

// Hook for checking if screen is mobile or tablet (useful for touch devices)
export const useIsTouchDevice = () => {
  const { isMobile, isTablet } = useResponsive();
  return isMobile || isTablet;
};

// Hook for getting responsive classes based on current breakpoint
export const useResponsiveClasses = () => {
  const { isMobile, isTablet } = useResponsive();

  return {
    container: isMobile ? 'px-4 py-2' : isTablet ? 'px-6 py-4' : 'px-8 py-6',
    text: isMobile ? 'text-sm' : isTablet ? 'text-base' : 'text-lg',
    spacing: isMobile ? 'space-y-2' : isTablet ? 'space-y-4' : 'space-y-6',
    grid: isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-3',
  };
};
