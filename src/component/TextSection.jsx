export default function TextSection({
  subtitle,
  title,
  color,
  fontSizeSubtitle,
  fontSizeTitle,
  width
}) {
  return (
    <>
      <h2
        style={{ color: color, fontSize: fontSizeSubtitle }}
        className="font-montez"
      >
        {subtitle}
      </h2>
      <h1
        style={{ color: color, fontSize: fontSizeTitle, width: `${width}px`}}
        className="font-manrope font-bold"
      >
        {title}
      </h1>
    </>
  );
}
