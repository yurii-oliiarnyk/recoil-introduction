import { css, StyleSheet } from "aphrodite/no-important";

type ButtonNativeProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type ButtonProps = Omit<ButtonNativeProps, "className">;

export const Button = ({ children, ...restProps }: ButtonProps) => {
  return (
    <button className={css(styles.button)} {...restProps}>
      {children}
    </button>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#188810",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    transition: "0.1s",
    borderRadius: 4,
    ":hover": {
      backgroundColor: "#104e0c",
    },
    ":disabled": {
      backgroundColor: "#4f5e4e",
      cursor: "not-allowed",
    },
  },
});
