'use client';
import { useEffect } from 'react';

export default function TidioChat() {
  useEffect(() => {
    if (document.getElementById('tidio-script')) return;

    const script = document.createElement('script');
    script.id = 'tidio-script';
    script.src = '//tmtd7vgrdjyakhoixqclboif0bfzguaa.js';  // ← REPLACE THIS
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return null;
}
