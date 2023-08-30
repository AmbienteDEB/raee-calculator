import { cn } from "@/lib/utils";
import useDarkMode from "@/hooks/useDarkMode";

const DarkModeButton = () => {
  const [darkModeOn, setDarkModeOn] = useDarkMode();

  return (
    <button
      onClick={() => setDarkModeOn(!darkModeOn)}
      className="text-xl bg-slate-200 dark:bg-slate-800 rounded-md p-1 grid place-content-center hover:shadow-md dark:shadow-slate-800"
    >
      {darkModeOn ? "☀️" : "🌑"}
    </button>
  );
};

export function Nav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn(
        "flex items-center space-x-4 lg:space-x-6 w-full justify-between absolute p-2",
        className
      )}
      {...props}
    >
      <p className="font-bold text-xl flex gap-1">
        Calc
        <span className="rounded-md text-lg p-[2px] bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900">
          EU6
        </span>
      </p>
      <div className="flex gap-4 w-full">
        <a className="text-sm font-medium transition-colors hover:text-primary">
          Calculator
        </a>
        <a className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
          Documentación
        </a>
      </div>
      <DarkModeButton />
    </nav>
  );
}
