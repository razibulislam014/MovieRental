import Star from "../assets/star.svg";

export default function Rating({ value }) {
  const starts = Array(value).fill(Star);
  return (
    <>
      {starts.map((star, i) => (
        <img key={i} src={star} width="14" height="14" alt="Star" />
      ))}
    </>
  );
}
