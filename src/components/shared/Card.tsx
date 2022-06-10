import { css, StyleSheet } from "aphrodite/no-important";
import { ReactNode } from "react";

type CardProps = {
  title: string;
  children: ReactNode;
  footer?: ReactNode;
};

export const Card = ({ title, children, footer }: CardProps) => {
  return (
    <div className={css(styles.card)}>
      <div className={css(styles.header)}>{title}</div>
      <div className={css(styles.body)}>{children}</div>
      {footer && <div className={css(styles.footer)}>{footer}</div>}
    </div>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#c1c1c1",
    borderStyle: "solid",
    backgroundColor: "#fff",
    borderRadius: 4,
    boxShadow: "rgb(0, 0, 0, 0.1) -3px 3px 5px",
  },
  header: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#c1c1c1",
    borderBottomStyle: "solid",
  },
  body: {
    padding: 16,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: "#c1c1c1",
    borderTopStyle: "solid",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
});
