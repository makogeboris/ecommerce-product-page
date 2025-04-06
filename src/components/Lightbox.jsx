import { motion } from "motion/react";

function Lightbox() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.5, bounce: 0.5 },
      }}
      className="xs:max-w-[33.75rem] lg:max-w-[27.8125rem]"
    >
      <img
        className="sm:rounded-2xl"
        src="/images/image-product-1.jpg"
        alt=""
      />
    </motion.div>
  );
}

export default Lightbox;
