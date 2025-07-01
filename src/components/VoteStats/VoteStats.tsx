import css from "./VoteStats.module.css";

interface VoteStatsProps {
  votes: { good: number; neutral: number; bad: number };
  totalVotes: number;
  positiveRate: number;
}

export default function VoteStats({
  votes,
  totalVotes,
  positiveRate,
}: VoteStatsProps) {
  return (
    <div className={css.container}>
      <p className={css.stat}>
        Good: <strong className={css.strong}>{votes.good}</strong>
      </p>
      <p className={css.stat}>
        Neutral: <strong className={css.strong}>{votes.neutral}</strong>
      </p>
      <p className={css.stat}>
        Bad: <strong className={css.strong}>{votes.bad}</strong>
      </p>
      <p className={css.stat}>
        Total: <strong className={css.strong}>{totalVotes}</strong>
      </p>
      <p className={css.stat}>
        Positive: <strong className={css.strong}>{positiveRate}%</strong>
      </p>
    </div>
  );
}
