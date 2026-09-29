'use client';
import { Fragment } from "react";
import { Button } from "../button/button";
import clsx from "clsx";
import { themeList } from "./model/theme";
import { useTheme } from "./providers/theme-provider";

export const Theme = () => {
  const { theme, toggleTheme } = useTheme();
  const PADDING = 8;
  const GAP = 12;
  const WIDTH = 38;
  const HEIGHT = 38;

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
    <div
      className="inline-flex bg-primary py-1 px-2 items-center gap-3 rounded-xl relative"
      style={{ maxHeight: HEIGHT + 10 + 'px' }}
    >
      {themeList.map((item) => (
        <Fragment key={item.id}>
          <Button
            variant="ghost"
            size="t"
            onClick={() => toggleTheme(item.meta)}
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
