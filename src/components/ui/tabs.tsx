"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const Tabs = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { defaultValue?: string }>(
  ({ className, defaultValue, children, ...props }, ref) => {
    const [active, setActive] = React.useState(defaultValue || "");
    return (
      <div ref={ref} className={cn(className)} data-active={active} {...props}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<{ active?: string; setActive?: (v: string) => void }>, { active, setActive });
          }
          return child;
        })}
      </div>
    );
  }
);
Tabs.displayName = "Tabs";

const TabsList = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { active?: string; setActive?: (v: string) => void }>(
  ({ className, children, active, setActive, ...props }, ref) => (
    <div ref={ref} className={cn("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", className)} {...props}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<{ active?: string; setActive?: (v: string) => void }>, { active, setActive });
        }
        return child;
      })}
    </div>
  )
);
TabsList.displayName = "TabsList";

const TabsTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { value: string; active?: string; setActive?: (v: string) => void }>(
  ({ className, value, active, setActive, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        active === value ? "bg-background text-foreground shadow-sm" : "hover:bg-background/50",
        className
      )}
      onClick={() => setActive?.(value)}
      {...props}
    />
  )
);
TabsTrigger.displayName = "TabsTrigger";

const TabsContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { value: string; active?: string; setActive?: (v: string) => void }>(
  ({ className, value, active, setActive: _, ...props }, ref) => {
    if (active !== value) return null;
    return <div ref={ref} className={cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className)} {...props} />;
  }
);
TabsContent.displayName = "TabsContent";

export { Tabs, TabsList, TabsTrigger, TabsContent };
