"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Users, Briefcase } from "lucide-react";

const onboardingSteps = [
{
id: 1,
title: "Welcome to Wansati 🌸",
subtitle: "Your sisterhood for growth, mentorship, and career opportunities.",
image: "/onboarding_image0.png",
},
{
id: 2,
title: "Swipe & Connect",
subtitle:
"Meet mentors, peers, and mentees who understand your journey.",
image: "/onboariding_image1.png",
},
{
id: 3,
title: "Discover Jobs & Insights",
subtitle:
"Find opportunities, check company ratings, and explore salary insights.",
image: "/onboarding_image2.png",
},
{
id: 4,
title: "Track Your Growth",
subtitle:
"Build your profile, track skills, and celebrate achievements.",
image: "/images/onboarding/profile.png",
},
];

export default function OnboardingPage() {
const [stepIndex, setStepIndex] = useState(0);
const step = onboardingSteps[stepIndex];

const nextStep = () => {
if (stepIndex < onboardingSteps.length - 1) setStepIndex(stepIndex + 1);
else alert("Onboarding Complete! Redirect to dashboard.");
};

const prevStep = () => {
if (stepIndex > 0) setStepIndex(stepIndex - 1);
};

return (
<main className="min-h-screen bg-gradient-to-b from-[#FAF7FD] to-[#FDFBFF] flex flex-col items-center justify-center p-6">
<motion.div
key={step.id}
initial={{ opacity: 0, y: 40 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: -40 }}
transition={{ duration: 0.4 }}
className="w-full max-w-md bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center"
>
<div className="relative w-64 h-64 mb-6">
<Image src={step.image} alt={step.title} fill className="object-contain" />
</div>
<h1 className="text-xl font-bold text-[var(--dark-purple)] text-center">
{step.title}
</h1>
<p className="text-center text-[var(--light-grey)] mt-2">{step.subtitle}</p>

    <div className="flex justify-between w-full mt-6">
      <button
        onClick={prevStep}
        disabled={stepIndex === 0}
        className="px-5 py-2 rounded-full bg-[var(--off-white)] text-[var(--dark-purple)] hover:bg-purple-50 disabled:opacity-50"
      >
        Back
      </button>
      <button
        onClick={nextStep}
        className="px-5 py-2 rounded-full bg-[var(--dark-purple)] text-white hover:bg-purple-800 flex items-center gap-2"
      >
        {stepIndex === onboardingSteps.length - 1 ? "Finish" : "Next"}
        <Sparkles className="w-4 h-4" />
      </button>
    </div>

    <div className="flex justify-center gap-2 mt-4">
      {onboardingSteps.map((_, idx) => (
        <span
          key={idx}
          className={`w-2 h-2 rounded-full ${
            idx === stepIndex ? "bg-[var(--dark-purple)]" : "bg-[var(--light-grey)]"
          }`}
        ></span>
      ))}
    </div>
  </motion.div>
</main>


);
}