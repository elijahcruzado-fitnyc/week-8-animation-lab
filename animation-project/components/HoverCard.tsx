import "./hover-card.css";

type HoverCardProps = {
  title: string;
  body: string;
};

/** CSS only: a transition on hover and a looping @keyframes pulse. No library. */
export function HoverCard({ title, body }: HoverCardProps) {
  return (
    <article className="hover-card" tabIndex={0}>
      <span className="hover-card__pulse" aria-hidden="true" />
      <h3 className="hover-card__title">{title}</h3>
      <p className="hover-card__body">{body}</p>
    </article>
  );
}
