import { Button } from "../Button/Button";
import { theme } from "./model/theme";

export const Theme = () => {
  return (
    <div className="inline-flex bg-secondary p-2 items-center gap-3 rounded-xl">
      {theme.map((item) => (
        <Button key={item.id} variant="ghost" title={item.title} iconOnly>
          {item.icon}
        </Button>
      ))}
    </div>
  );
};
