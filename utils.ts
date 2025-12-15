import React from 'react';

export const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
  e.preventDefault();
  
  const targetId = href.replace('#', '');
  const element = document.getElementById(targetId);
  
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    // Update browser URL without jumping
    window.history.pushState(null, '', href);
  }
};