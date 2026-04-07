'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function LogoSeal() {
  const text = 'Product Engineer · SYSTEMS THINKER · BUILDER · PRODUCT · AUTOMATION · SAAS · OPTIMISTIC · ';

  return (
    <section className="py-32 md:py-48 flex items-center justify-center overflow-hidden">
      <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
        {/* Center logo */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <Image
            src="/logo.png"
            alt="WD"
            width={120}
            height={120}
            className="w-20 h-20 md:w-[120px] md:h-[120px] object-contain"
          />
        </div>

        {/* Rotating text ring */}
        <motion.svg
          viewBox="0 0 400 400"
          className="w-full h-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <defs>
            <path
              id="textCircle"
              d="M 200, 200 m -160, 0 a 160,160 0 1,1 320,0 a 160,160 0 1,1 -320,0"
              fill="none"
            />
          </defs>
          <text
            className="fill-foreground"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
            }}
          >
            <textPath href="#textCircle" startOffset="0%">
              {text}
            </textPath>
          </text>
        </motion.svg>
      </div>
    </section>
  );
}
