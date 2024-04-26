import star from "../assets/star.svg";
// eslint-disable-next-line react/prop-types
export default function Rating({ value }) {
  const NumberOfStars = Array(value).fill(star);
  return (
    <>
      {NumberOfStars.map((star, index) => (
        <img key={index} src={star} width="14" height="14" alt="star" />
      ))}
    </>
  );
}
