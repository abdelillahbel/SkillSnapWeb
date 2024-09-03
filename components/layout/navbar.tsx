"use client";

import { useContext } from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useSession } from "next-auth/react";

import { docsConfig } from "@/config/docs";
import { marketingConfig } from "@/config/marketing";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { DocsSearch } from "@/components/docs/search";
import { ModalContext } from "@/components/modals/providers";
import { Icons } from "@/components/shared/icons";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

interface NavBarProps {
  scroll?: boolean;
  large?: boolean;
}

export function NavBar({ scroll = false }: NavBarProps) {
  const scrolled = useScroll(50);
  const { data: session, status } = useSession();
  const { setShowSignInModal } = useContext(ModalContext);

  const selectedLayout = useSelectedLayoutSegment();
  const documentation = selectedLayout === "docs";

  const configMap = {
    docs: docsConfig.mainNav,
  };

  const links =
    (selectedLayout &&  configMap[selectedLayout]) || marketingConfig.mainNav;

  return (
    <header
      className={`sticky top-0 z-40 flex w-full justify-center bg-background/60 backdrop-blur-xl transition-all ${scroll ? (scrolled ? "border-b" : "bg-transparent") : "border-b"
        }`}
    >
      <MaxWidthWrapper
        className="flex h-14 items-center justify-between py-4"
        large={documentation}
      >
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-1.5">
            {/* <Icons.logo /> */}
            <span className="font-urban text-xl font-bold">
              {/* {siteConfig.name} */}
              <svg xmlns="http://www.w3.org/2000/svg" width="150" height="40" fill="none" viewBox="0 0 377 84">
                <path fill="url(#a)"
                  d="M20.285 67H9.141l.07-8.227h11.074c2.766 0 5.098-.62 6.996-1.863 1.899-1.265 3.328-3.105 4.29-5.52.984-2.413 1.476-5.331 1.476-8.753V40.14c0-2.625-.281-4.934-.844-6.926-.539-1.992-1.348-3.668-2.426-5.028a10.146 10.146 0 0 0-3.972-3.058c-1.57-.703-3.375-1.055-5.414-1.055H8.93v-8.262h11.46c3.422 0 6.551.586 9.387 1.758 2.86 1.149 5.332 2.801 7.418 4.957 2.086 2.157 3.692 4.735 4.817 7.735 1.148 2.976 1.722 6.293 1.722 9.949v2.426c0 3.633-.574 6.949-1.722 9.949-1.125 3-2.73 5.578-4.817 7.734-2.062 2.133-4.535 3.786-7.418 4.957C26.918 66.426 23.754 67 20.285 67Zm-5.168-51.188V67H4.57V15.812h10.547Zm70.63 42.961V67H58.5v-8.227h27.246Zm-23.802-42.96V67H51.398V15.812h10.547Zm20.25 20.847v8.016H58.5V36.66h23.695Zm3.516-20.847v8.261H58.5v-8.262h27.21Zm24.644 40.5 12.059-40.5h11.742L116.332 67h-7.734l1.757-10.688Zm-11.109-40.5 12.024 40.5L113.098 67h-7.805L87.574 15.812h11.672Zm67.957 0h10.512v33.82c0 3.937-.844 7.254-2.531 9.949-1.664 2.695-3.973 4.723-6.926 6.082-2.93 1.36-6.305 2.04-10.125 2.04-3.821 0-7.219-.68-10.195-2.04-2.954-1.36-5.274-3.387-6.961-6.082-1.665-2.695-2.497-6.012-2.497-9.95v-33.82h10.547v33.82c0 2.298.364 4.173 1.09 5.626.727 1.453 1.77 2.52 3.129 3.199 1.383.68 3.012 1.02 4.887 1.02 1.922 0 3.551-.34 4.887-1.02 1.359-.68 2.39-1.746 3.093-3.2.727-1.452 1.09-3.327 1.09-5.624v-33.82Zm60.856 0V67h-10.547l-20.567-34.313V67h-10.547V15.812h10.547l20.602 34.348V15.813h10.512Zm20.39 0V67h-10.511V15.812h10.511Zm51.926 24.398v2.426c0 3.89-.527 7.383-1.582 10.476-1.055 3.094-2.543 5.73-4.465 7.91a19.363 19.363 0 0 1-6.89 4.958c-2.649 1.148-5.59 1.722-8.825 1.722-3.211 0-6.152-.574-8.824-1.722a19.79 19.79 0 0 1-6.891-4.958c-1.945-2.18-3.457-4.816-4.535-7.91-1.054-3.093-1.582-6.586-1.582-10.476V40.21c0-3.914.528-7.406 1.582-10.477 1.055-3.093 2.543-5.73 4.465-7.91a19.572 19.572 0 0 1 6.891-4.992c2.672-1.148 5.613-1.723 8.824-1.723 3.234 0 6.176.575 8.824 1.723a19.168 19.168 0 0 1 6.891 4.992c1.945 2.18 3.445 4.817 4.5 7.91 1.078 3.07 1.617 6.563 1.617 10.477Zm-10.652 2.426V40.14c0-2.72-.246-5.11-.739-7.172-.492-2.063-1.218-3.797-2.179-5.203-.961-1.407-2.133-2.461-3.516-3.164-1.383-.727-2.965-1.09-4.746-1.09-1.781 0-3.363.363-4.746 1.09-1.359.703-2.52 1.757-3.481 3.164-.937 1.406-1.652 3.14-2.144 5.203-.492 2.062-.738 4.453-.738 7.172v2.496c0 2.695.246 5.086.738 7.172.492 2.062 1.219 3.808 2.18 5.238.96 1.406 2.132 2.473 3.515 3.2 1.383.726 2.965 1.089 4.746 1.089 1.782 0 3.364-.363 4.746-1.09 1.383-.727 2.543-1.793 3.481-3.2.937-1.429 1.652-3.175 2.144-5.237.493-2.086.739-4.477.739-7.172Zm59.906-26.825V67h-10.547l-20.566-34.313V67h-10.547V15.812h10.547l20.601 34.348V15.813h10.512Z" />
                <circle cx="369.5" cy="58.5" r="7.5" fill="#E91E63" />
                <defs>
                  <linearGradient id="a" x1="0" x2="355" y1="42" y2="42" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E91E63" />
                    <stop offset="1" stopColor="#372D52" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </Link>

          {links && links.length > 0 ? (
            <nav className="hidden gap-6 md:flex">
              {links.map((item, index) => (
                <Link
                  key={index}
                  href={item.disabled ? "#" : item.href}
                  prefetch={true}
                  className={cn(
                    "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                    item.href.startsWith(`/${selectedLayout}`)
                      ? "text-foreground"
                      : "text-foreground/60",
                    item.disabled && "cursor-not-allowed opacity-80",
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          ) : null}
        </div>

      
      </MaxWidthWrapper>
    </header>
  );
}
