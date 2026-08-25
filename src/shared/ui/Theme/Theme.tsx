import { Button } from "../Button/Button";
import { useTheme } from "./hooks/useTheme";
import { themeList } from "./model/theme";

export const Theme = () => {
  const { setTheme } = useTheme();
  return (
    <div className="inline-flex bg-secondary p-2 items-center gap-3 rounded-xl">
      {themeList.map((item) => (
        <Button
          key={item.id}
          variant="ghost"
          onClick={() => setTheme(item.meta)}
          title={item.title}
          iconOnly
        >
          {item.icon}
        </Button>
      ))}
    </div>
  );
};
