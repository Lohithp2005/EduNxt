"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center text-sm overflow-hidden min-h-screen bg-linear-to-bl from-white to-purple-200/40 pt-40">
      <div
        className={cn(
          "absolute top-0 right-0 h-full w-1/2",
          "pointer-events-none"
        )}
      />

      <main className="relative z-10 flex flex-col items-center max-md:px-4 text-center px-6 mt-15">
        <h1 className="text-4xl md:text-6xl md:leading-20 font-semibold max-w-5xl text-slate-900 mt-1">
          AI Powered multilingual Personalized  Education Platform for Kids 
        </h1>

        <p className="text-xl text-slate-700 max-w-5xl mt-10">
      Our platform helps children with disabilities such as ADHD, dyslexia, autism,hearing-impaired, and other learning differences through interactive lessons, visual learning tools, and sign language learning support.
        </p>

        <div className="flex items-center gap-4 mt-8">
          <Link href="/child">
            <button className="flex items-center gap-2 bg-purple-600 text-white active:scale-95 rounded-lg px-7 h-11">
              Get Started
            </button>
          </Link>

          <Link href="/demoKju.mp4">
            <button className="border border-slate-600 active:scale-95 hover:bg-white/10 transition text-slate-600 rounded-lg px-8 h-11">
              Watch Demo
            </button>
          </Link>
        </div>
      </main>
    </section>
  );
}