import { cn } from "@/core/utils/cn";
import { ButtonHTMLAttributes } from "react";

const baseClass =
  "rounded-[10px] cursor-pointer px-2 py-1 border border-gray-300 data-[active=true]:bg-gray-100";

const disabledClass = "cursor-not-allowed";

const variants = {
  default: "",
  primary: "bg-blue-500 text-white",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  active?: boolean;
};

function Button({
  children,
  className,
  variant = "default",
  active,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      data-active={active}
      className={cn(
        baseClass,
        props.disabled && disabledClass,
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export { Button };
