"use client";

import { useRef, useState, useEffect, useCallback, RefObject } from "react";

const NAVBAR_HEIGHT = 60;

/**
 * Hook to measure the actual height of a sticky header element
 * Returns a ref to attach to the header and the measured height
 */
export function useStickyHeaderHeight(): [RefObject<HTMLDivElement | null>, number] {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const updateHeight = () => {
      const newHeight = element.getBoundingClientRect().height;
      setHeight(newHeight);
    };

    // Initial measurement
    updateHeight();

    // Watch for size changes
    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return [ref, height];
}

/**
 * Calculate the top position for a sticky header based on parent header heights
 */
export function calculateStickyTop(...parentHeights: number[]): number {
  return NAVBAR_HEIGHT + parentHeights.reduce((sum, h) => sum + h, 0);
}

/**
 * Get the navbar height constant
 */
export function getNavbarHeight(): number {
  return NAVBAR_HEIGHT;
}
