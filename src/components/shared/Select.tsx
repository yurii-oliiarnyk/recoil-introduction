import { css, StyleSheet } from "aphrodite/no-important";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

type Option<T extends string | number> = {
  id: T;
  name: string;
};

interface SelectProps<T extends string | number> {
  /**
   * Array of select options.
   */
  options: Option<T>[];
  /**
   * Select value
   * By default is equal to null
   */
  value?: T | null;
  /**
   * Handle function to be called when selected value is changed
   */
  setValue: (value: T) => void;
  /**
   * Number that represents the offset between the dropdown and the window element.
   * By default is equal to 8px
   */
  offsetBetweenDropdownAndWindow?: number;
}

export const Select = <T extends string | number>({
  options,
  value,
  setValue,
  offsetBetweenDropdownAndWindow = 8,
}: SelectProps<T>) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [verticalDirection, setVerticalDirection] = useState<"top" | "bottom">("bottom");
  const [horizontalDirection, setHorizontalDirection] = useState<"left" | "right">("right");

  /**
   * Recalulate the dropdown verticalDirection
   */
  const recalculateVerticalDropdownDirection = useCallback(() => {
    const { scrollY, innerHeight } = window;
    const bottomScrollY = scrollY + innerHeight;

    const { offsetTop, offsetHeight } = buttonRef.current?.parentElement as HTMLButtonElement;
    const buttonBottomPosition = offsetTop + offsetHeight;
    const dropdownBottomLimitPosition =
      buttonBottomPosition +
      (dropdownRef.current?.clientHeight ?? 0) +
      offsetBetweenDropdownAndWindow;

    if (bottomScrollY < dropdownBottomLimitPosition) {
      setVerticalDirection("top");
    } else {
      setVerticalDirection("bottom");
    }
  }, [offsetBetweenDropdownAndWindow]);

  /**
   * Recalulate the dropdown horizontalDirection
   */
  const recalculateHorizontalDropdownDirection = useCallback(() => {
    const { innerWidth, scrollX } = window;
    const rightScrollX = scrollX + innerWidth;

    const { offsetLeft, offsetWidth } = buttonRef.current?.parentElement as HTMLButtonElement;
    const buttonRightPosition = offsetLeft + offsetWidth;
    const dropdownRightLimitPosition =
      buttonRightPosition +
      (dropdownRef.current?.clientWidth ?? 0) +
      offsetBetweenDropdownAndWindow;

    if (rightScrollX < dropdownRightLimitPosition) {
      setHorizontalDirection("left");
    } else {
      setHorizontalDirection("right");
    }
  }, [offsetBetweenDropdownAndWindow]);

  /**
   * Recalulate the dropdown direction when dropdown is overlapping by scroll
   */
  const recalculateDropdownDirection = useCallback(() => {
    recalculateVerticalDropdownDirection();
    recalculateHorizontalDropdownDirection();
  }, [recalculateVerticalDropdownDirection, recalculateHorizontalDropdownDirection]);

  useEffect(() => {
    /**
     * Recalulate the dropdown direction only when the dropdown isOpen
     */
    if (isOpen) {
      window.addEventListener("scroll", recalculateDropdownDirection);
    }

    return () => {
      if (isOpen) {
        window.removeEventListener("scroll", recalculateDropdownDirection);
      }
    };
  }, [isOpen, recalculateDropdownDirection]);

  /**
   * Recalulate the dropdown direction after dropdown was opened.
   */
  useLayoutEffect(() => {
    if (isOpen) {
      recalculateDropdownDirection();
    }
  }, [isOpen, recalculateDropdownDirection]);

  return (
    <div style={{ position: "relative" }}>
      <button
        ref={buttonRef}
        className={css(styles.button)}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        {options.find((option) => option.id === value)?.name ?? "Select"}
      </button>
      {isOpen && (
        <div
          className={css([
            styles.dropdown,
            verticalDirection === "bottom" && styles.dropdownBottom,
            verticalDirection === "top" && styles.dropdownTop,
            horizontalDirection === "right" && styles.dropdownRight,
            horizontalDirection === "left" && styles.dropdownLeft,
          ])}
          ref={dropdownRef}
        >
          {options.map((option) => (
            <div
              key={option.id}
              onClick={() => {
                setValue(option.id);
                setIsOpen(false);
              }}
              className={css(styles.option)}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "blue",
    backgroundColor: "yellow",
    textAlign: "center",
    cursor: "pointer",
  },
  dropdown: {
    position: "absolute",
    overflow: "auto",
    borderRadius: 4,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "blue",
    backgroundColor: "#fff",
    width: "max-content",
  },
  dropdownBottom: {
    top: "100%",
  },
  dropdownTop: {
    bottom: "100%",
  },
  dropdownRight: {
    left: 0,
  },
  dropdownLeft: {
    right: 0,
  },
  option: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
  },
});
