import { motion } from "framer-motion";
import { Code2, MousePointer2, RadioTower, Zap } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const features = [
  {
    icon: RadioTower,
    title: "Real-time editing",
    description:
      "Write, review, and fix code together with updates that land instantly.",
  },
  {
    icon: Code2,
    title: "Room codes",
    description:
      "Start a room and invite anyone with a short code. No long setup path.",
  },
  {
    icon: MousePointer2,
    title: "Live cursors",
    description:
      "See where collaborators are working so the session stays easy to follow.",
  },
  {
    icon: Zap,
    title: "Browser-first",
    description:
      "Open the editor, join the room, and start coding without installing tools.",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Features() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-6">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 max-w-2xl"
      >
        <p className="text-sm font-medium uppercase tracking-wider text-emerald-300">
          Features
        </p>

        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
          What the editor provides
        </h2>
      </motion.div>

      {/* Feature Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={feature.title}
              variants={item}
              transition={{ duration: 0.45, ease: "easeOut" }}
              whileHover={{ y: -6 }}
            >
              <Card className="h-full transition duration-200 hover:border-emerald-300/35 hover:bg-zinc-900/80">
                <CardHeader>
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-white/6 text-emerald-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="mt-3">
                  {feature.description}
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
