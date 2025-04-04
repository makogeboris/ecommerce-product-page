function Avatar() {
  return (
    <a
      className="focus-visible:outline-2 focus-visible:outline-[var(--color-orange)]"
      href="#"
    >
      <img
        className="xs:size-[3.125rem] size-6 shrink-0 rounded-full border-2 border-transparent transition-all duration-300 hover:border-[var(--color-orange)]"
        src="/images/image-avatar.png"
        alt=""
      />
    </a>
  );
}

export default Avatar;
