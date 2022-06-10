import { css, StyleSheet } from "aphrodite/no-important";

type NativeInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type InputProps = Omit<NativeInputProps, "onChange" | "className"> & {
  onChange: (value: string) => void;
};

export const Input = ({ value, onChange }: InputProps) => {
  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange(event.target.value);
  };

  return <input className={css(styles.input)} value={value} onChange={onChangeHandler} />;
};

const styles = StyleSheet.create({
  input: {
    display: "block",
    width: "100%",
    height: 40,
    padding: 8,
    borderRadius: 4,
    borderWidth: 1,
  },
});
