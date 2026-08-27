import { CSSProperties, useMemo } from "react";

type Props = {
  count: number;
  colour?: string;
  styles?: CSSProperties;
};

export default function Stars({ count, colour, styles }: Props) {
  // memoized - I thought given the potential scale of stars it would be best
  const stars = useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 3,
      })),
    [count],
  );

  return (
    <>
      {stars.map((star) => (
        <div
          key={`${star.top}-${star.left}-${star.delay}`}
          className="star"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            height: `2px`,
            width: `2px`,
            animationDelay: `${star.delay}s`,
            backgroundColor: colour,
            ...(styles ?? {}),
          }}
        />
      ))}
    </>
  );
}
