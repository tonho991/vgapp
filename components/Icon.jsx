export default function Icon ({
  name,
  delay = 0,
  animation = 'zoom-in',
  wordmarker,
  className,
  color = 'white',
  from = "devicon",
  size = '6xl',
  sizemd = '7xl'
}) {
  if (from === "devicon") {
    return (
      <i
        className={`devicon-${name}-plain${
          wordmarker ? '-wordmark' : ''
        } text-${size} md:text-${sizemd} ${className} text-${color}`}
        data-aos={animation}
        data-aos-delay={delay}
      ></i>
    )
  } else if(from === "google") {
    return (
      <span
        className={`material-symbols-outlined text-${size} md:text-${sizemd} ${className} text-${color}`}
        data-aos={animation}
        data-aos-delay={delay}
      >
        {name}
      </span>
    )
  }
}
