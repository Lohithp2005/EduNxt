'use client';

import Card2 from '@/components/card2';
import { BookOpen, GitBranch, Layers, Sparkles } from "lucide-react";
import React from 'react';

const page = () => {
  return (
    <div className="min-h-screen max-w-screen p-5 bg-white
                flex flex-col items-center gap-6 md:grid md:grid-cols-4 mt-5 mx-auto
                md:justify-items-center md:items-start">

      <Card2
        href="/course"
        title="Personalized Study Path"
        description="AI-generated learning paths designed to help children learn at their own pace with structured lessons."
        tags={["Personalized Learning Path"]}
        badge="Course AI"
        colorScheme="cyan"
        buttonText="Start Learning"
        floatingIcons={[
          { icon: <BookOpen className="w-5 h-5 text-white" />, key: "book", className: "top-4 right-4", delay: "0s" },
          { icon: <GitBranch className="w-5 h-5 text-white" />, key: "flow", className: "top-14 right-20", delay: "0.2s" },
          { icon: <Layers className="w-5 h-5 text-white" />, key: "layers", className: "bottom-6 right-6", delay: "0.4s" },
          { icon: <Sparkles className="w-5 h-5 text-white" />, key: "sparkles", className: "bottom-3 right-24", delay: "0.6s" },
        ]}
      />

    </div>
  );
};

export default page;