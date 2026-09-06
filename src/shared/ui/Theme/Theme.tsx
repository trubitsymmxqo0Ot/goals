import { Fragment } from "react";
import { Button } from "../Button/Button";
import { useTheme } from "./hooks/useTheme";
import { themeList } from "./model/theme";
import clsx from "clsx";

export const Theme = () => {
  const { setTheme, theme } = useTheme();
  const PADDING = 8;
  const GAP = 12;
  const WIDTH = 48;
  const HEIGHT = 48;

  const activeTheme = (idx: number) => {
    if (idx === 0) {
      return PADDING;
    }

    if (idx === 1) {
      return PADDING + GAP + WIDTH * idx;
    }

    if (idx === 2) {
      return PADDING + GAP * 2 + WIDTH * idx;
    }
  };

  return (
    <div className="inline-flex bg-secondary p-2 items-center gap-3 rounded-xl relative">
      {themeList.map((item) => (
        <Fragment key={item.id}>
          <Button
            variant="ghost"
            size="t"
            onClick={() => setTheme(item.meta)}
            title={item.title}
            className={clsx(
              "rounded-xl relative z-10 flex justify-center items-center",
              "hover:bg-color-primary hover:text-primary duration-500",
              item.meta === theme && "text-primary",
            )}
            style={{
              padding: `${PADDING}px`,
              width: `${WIDTH}px`,
              height: `${HEIGHT}px`,
            }}
            iconOnly
          >
            {item.icon}
          </Button>
          {item.meta === theme && (
            <div
              className="absolute rounded-xl bg-color-tertiary"
              style={{
                left: activeTheme(item.id),
                width: `${WIDTH}px`,
                height: `${HEIGHT}px`,
              }}
            />
          )}
        </Fragment>
      ))}
    </div>
  );
};
