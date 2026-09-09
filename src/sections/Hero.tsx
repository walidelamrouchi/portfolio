'use client';

import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight, Mail } from 'lucide-react';

interface HandWrittenTitleProps {
  title?: string;
  subtitle?: string;
}

function HandWrittenTitle({
  title = 'Walid',
  subtitle = 'Fullstack Developer',
}: HandWrittenTitleProps) {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2.5, ease: [0.43, 0.13, 0.23, 0.96] as const },
        opacity: { duration: 0.5 },
      },
    },
  };

  return (
    <div className="relative mx-auto w-full max-w-4xl py-24">
      <div className="absolute inset-0">
        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 600"
          initial="hidden"
          animate="visible"
          className="h-full w-full"
          aria-hidden="true"
        >
          <motion.path
            d="M 950 90 C 1250 300, 1050 480, 600 520 C 250 520, 150 480, 150 300 C 150 120, 350 80, 600 80 C 850 80, 950 180, 950 180"
            fill="none"
            strokeWidth="12"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={draw}
            className="text-white opacity-90"
          />
        </motion.svg>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <motion.h1
          className="flex items-center gap-2 text-4xl tracking-tight text-white md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="text-xl text-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  useEffect(() => {
    const embedScript = document.createElement('script');
    embedScript.type = 'text/javascript';
    embedScript.textContent = `
      !function(){
        if(!window.UnicornStudio){
          window.UnicornStudio={isInitialized:!1};
          var i=document.createElement("script");
          i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js";
          i.onload=function(){
            window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)
          };
          (document.head || document.body).appendChild(i)
        }
      }();
    `;
    document.head.appendChild(embedScript);

    // Add CSS to hide branding elements and crop canvas
    const style = document.createElement('style');
    style.textContent = `
      [data-us-project] {
        position: relative !important;
        overflow: hidden !important;
      }
      
      [data-us-project] canvas {
        clip-path: inset(0 0 10% 0) !important;
      }
      
      [data-us-project] * {
        pointer-events: none !important;
      }
      [data-us-project] a[href*="unicorn"],
      [data-us-project] button[title*="unicorn"],
      [data-us-project] div[title*="Made with"],
      [data-us-project] .unicorn-brand,
      [data-us-project] [class*="brand"],
      [data-us-project] [class*="credit"],
      [data-us-project] [class*="watermark"] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        position: absolute !important;
        left: -9999px !important;
        top: -9999px !important;
      }
    `;
    document.head.appendChild(style);

    // Function to aggressively hide branding
    const hideBranding = () => {
      // Target all possible UnicornStudio containers
      const selectors = [
        '[data-us-project]',
        '[data-us-project="OMzqyUv6M3kSnv0JeAtC"]',
        '.unicorn-studio-container',
        'canvas[aria-label*="Unicorn"]'
      ];
      
      selectors.forEach(selector => {
        const containers = document.querySelectorAll(selector);
        containers.forEach(container => {
          // Find and remove any elements containing branding text
          const allElements = container.querySelectorAll('*');
          allElements.forEach((element) => {
            const el = element as HTMLElement;
            const text = (el.textContent || '').toLowerCase();
            const title = (el.getAttribute('title') || '').toLowerCase();
            const href = (el.getAttribute('href') || '').toLowerCase();
            
            if (
              text.includes('made with') || 
              text.includes('unicorn') ||
              title.includes('made with') ||
              title.includes('unicorn') ||
              href.includes('unicorn.studio')
            ) {
              el.style.display = 'none';
              el.style.visibility = 'hidden';
              el.style.opacity = '0';
              el.style.pointerEvents = 'none';
              el.style.position = 'absolute';
              el.style.left = '-9999px';
              el.style.top = '-9999px';
              // Also try to remove it
              try {
                el.remove();
              } catch {
                return;
              }
            }
          });
        });
      });
    };

    // Run immediately and more frequently
    hideBranding();
    const interval = setInterval(hideBranding, 50); // More frequent checks
    
    // Also try after delays
    setTimeout(hideBranding, 500);
    setTimeout(hideBranding, 1000);
    setTimeout(hideBranding, 2000);
    setTimeout(hideBranding, 5000);
    setTimeout(hideBranding, 10000);

    return () => {
      clearInterval(interval);
      document.head.removeChild(embedScript);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section id="top" className="relative h-dvh w-full overflow-hidden bg-black" aria-label="Hero">
    
      {/* Background Animation */}
      <div className="absolute inset-0 w-full h-full hidden lg:block">
        <div 
          data-us-project="OMzqyUv6M3kSnv0JeAtC" 
          style={{ width: '100%', height: '100vh' }}
        />
      </div>

      {/* Star field */}
      <div className="stars-bg pointer-events-none absolute inset-0 z-[1] h-full w-full" />

      {/* Top Header */}
      

      {/* Corner Frame Accents */}
      
      
      

      {/* Handwritten title */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-16 lg:pl-[32%] lg:pr-10 lg:pb-40" >
        <HandWrittenTitle title="Walid" subtitle="Fullstack Developer" />
        <div className="-mt-16 flex flex-col lg:pt-30 items-center gap-3 sm:flex-row sm:gap-10 lg:mt-0">
          <a
            href="#about"
            className="group inline-flex items-center gap-2 border border-white/70 bg-black/20 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.08em] text-white transition-colors hover:bg-white hover:text-black"
          >
            explore projects
            <ArrowDownRight size={15} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>
          <a
            href="mailto:walid@example.com"
            className="inline-flex items-center gap-2 border border-white/30 bg-black/20 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.08em] text-white/90 transition-colors hover:border-white hover:bg-white hover:text-black"
          >
            let&apos;s talk
            <Mail size={15} aria-hidden="true" />
          </a>
        </div>
      </div>

    

     
      

      <style>{`
        .dither-pattern {
          background-image: 
            repeating-linear-gradient(0deg, transparent 0px, transparent 1px, white 1px, white 2px),
            repeating-linear-gradient(90deg, transparent 0px, transparent 1px, white 1px, white 2px);
          background-size: 3px 3px;
        }
        
        .stars-bg {
          background-image: 
            radial-gradient(1px 1px at 20% 30%, white, transparent),
            radial-gradient(1px 1px at 60% 70%, white, transparent),
            radial-gradient(1px 1px at 50% 50%, white, transparent),
            radial-gradient(1px 1px at 80% 10%, white, transparent),
            radial-gradient(1px 1px at 90% 60%, white, transparent),
            radial-gradient(1px 1px at 33% 80%, white, transparent),
            radial-gradient(1px 1px at 15% 60%, white, transparent),
            radial-gradient(1px 1px at 70% 40%, white, transparent);
          background-size: 200% 200%, 180% 180%, 250% 250%, 220% 220%, 190% 190%, 240% 240%, 210% 210%, 230% 230%;
          background-position: 0% 0%, 40% 40%, 60% 60%, 20% 20%, 80% 80%, 30% 30%, 70% 70%, 50% 50%;
          opacity: 0.5;
          animation: star-drift 24s ease-in-out infinite alternate;
        }

        @keyframes star-drift {
          from {
            transform: translate3d(0, 0, 0) scale(1);
          }
          to {
            transform: translate3d(-1%, 1%, 0) scale(1.04);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .stars-bg {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
