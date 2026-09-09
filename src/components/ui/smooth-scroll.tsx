'use client';

import { ReactLenis } from 'lenis/react';
import { forwardRef, type ReactNode } from 'react';

interface SmoothScrollProps {
  children?: ReactNode;
}

const DemoContent = () => (
  <>
    <section className="sticky top-0 grid h-screen w-full place-content-center bg-slate-950 text-white">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <h1 className="px-8 text-center text-6xl font-semibold leading-[120%] tracking-tight 2xl:text-7xl">
        I Know What Exactly you&apos;re <br /> Looking For! Scroll Please 👇
      </h1>
    </section>

    <section className="sticky top-0 grid h-screen place-content-center overflow-hidden rounded-tl-2xl rounded-tr-2xl bg-gray-300 text-black">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <h1 className="px-8 text-center text-4xl font-semibold leading-[120%] tracking-tight 2xl:text-7xl">
        here is it<br /> enjoy it!
      </h1>
    </section>

    <section className="sticky top-0 grid h-screen w-full place-content-center bg-slate-950 text-white">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <h1 className="px-8 text-center text-5xl font-semibold leading-[120%] tracking-tight 2xl:text-7xl">
        Thanks To Scroll.
        <br /> Now Scroll Up Again☝️🏿
      </h1>
    </section>
  </>
);

const SmoothScroll = forwardRef<HTMLElement, SmoothScrollProps>(
  ({ children }, ref) => {
    return (
      <ReactLenis root>
        <main ref={ref}>
          <article>{children ?? <DemoContent />}</article>
        </main>
      </ReactLenis>
    );
  },
);

SmoothScroll.displayName = 'SmoothScroll';

export default SmoothScroll;