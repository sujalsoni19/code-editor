import { motion } from "framer-motion"

import { Logo } from "./Logo"
import { Button } from "./ui/button"

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 sm:px-6"
    >
      <Logo />
      <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
        <Button variant="outline" size="sm">
          Sign In
        </Button>
      </motion.div>
    </motion.header>
  )
}
