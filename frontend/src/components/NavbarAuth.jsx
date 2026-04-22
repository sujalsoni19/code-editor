import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

import Profile from "./Profile.jsx";

export function NavbarAuth() {

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 sm:px-6"
    >
      <Link to={"/home"}>
        <Logo />
      </Link>
      <Profile />
    </motion.header>
  );
}
