import { ReactNode } from "react";
import { StyleSheet, css } from "aphrodite/no-important";

type PageProps = {
  children: ReactNode;
};

export const Page = ({ children }: PageProps) => {
  return <div className={css(styles.wrapper)}>{children}</div>;
};

const styles = StyleSheet.create({
  wrapper: {
    maxWidth: 780,
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: 32,
    paddingBottom: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
});
