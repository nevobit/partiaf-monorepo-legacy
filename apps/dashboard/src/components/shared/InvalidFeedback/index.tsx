import styles from "./InvalidFeedback.module.css";

function InvalidFeedback({
  children,
  isError,
}: {
  children: React.ReactNode;
  isError: boolean | undefined;
}) {
  return isError ? (
    <div className={styles.container}>
      <p className={styles.message}>{children}</p>
    </div>
  ) : null;
}

export default InvalidFeedback;
