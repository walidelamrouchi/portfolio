import { Mail, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-screen bg-black px-4 pb-20 pt-8 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-5xl font-black tracking-[-0.06em] text-[#f1efe9] sm:text-6xl lg:text-[7rem]">
            LET&apos;S CONNECT
          </h2>
          <p className="mt-6 font-mono text-[0.62rem] uppercase tracking-[0.38em] text-white/60 sm:text-[0.7rem]">
            HAVE AN IDEA OR A PROJECT IN MIND? REACH OUT AND
            <span className="mt-2 block">LET&apos;S BUILD SOMETHING GREAT TOGETHER.</span>
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl overflow-hidden rounded-[26px] border border-white/10 bg-[#111315] shadow-[0_0_0_1px_rgba(255,255,255,0.02)] lg:grid-cols-[1.05fr_1.2fr]">
          <div className="border-b border-white/10 p-8 sm:p-10 lg:border-b-0 lg:border-r">
            <h3 className="text-4xl font-bold tracking-[-0.06em] text-[#f1efe9] sm:text-[3rem]">
              Get in touch
            </h3>

            <p className="mt-5 max-w-xs text-base leading-7 text-white/65">
              If you have any questions regarding our Services or need help,
              please fill out the form here. We do our best to respond within 1
              business day.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-3 text-white/80">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="text-base">Email</span>
                <span className="ml-auto text-sm text-white/55">elamrouchi.oualid@example.com</span>
              </div>

              <div className="flex items-center gap-3 text-white/80">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5">
                  <Phone className="h-4 w-4" />
                </span>
                <span className="text-base">Phone</span>
                <span className="ml-auto text-sm text-white/55"> (212) 633-010346</span>
              </div>

              
            </div>
          </div>

          <form className="p-8 sm:p-10">
            <div className="space-y-5">
              <label className="block">
                <span className="mb-2 block text-sm text-white/70">Name</span>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-white/10 bg-[#1a1d20] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-white/30"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm text-white/70">Email</span>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full rounded-xl border border-white/10 bg-[#1a1d20] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-white/30"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm text-white/70">Phone</span>
                <input
                  type="tel"
                  placeholder="+(555) 000-0000"
                  className="w-full rounded-xl border border-white/10 bg-[#1a1d20] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-white/30"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm text-white/70">Message</span>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#1a1d20] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-white/30"
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#f3f1ec] px-5 py-3 text-sm font-semibold text-black transition hover:bg-white"
            >
              Submit
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
