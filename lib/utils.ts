import { Metadata } from "next";
import { clsx, type ClassValue } from "clsx";
import ms from "ms";
import { twMerge } from "tailwind-merge";

import { env } from "@/env.mjs";
import { siteConfig } from "@/config/site";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    keywords: [
      "DEVUNION",
      "devunion",
      "devunion.dev",
      "DevUnion",
      "DevUnion Foundation",
      "devunion.com",
      "devunion.io",
      "devocion union square",
      "deunionization",
      "devuniki sthothramu gaanamu song lyrics",
      "devour union 50",
      "divine union definition",
      "a definition",
      "a definition of formal poetry is verse that",
      "a definition by word origin is called",
      "a definition could be thought of as",
      "a definition of a narcissist",
      "a definition of muscular strength is",
      "a definition of muscular endurance is",
      "a definition of leukoderma is",
      "a definition of love",
      "b division credit union",
      "b div federal credit union",
      "b deveaux",
      "b union a",
      "union devolos",
      "c union declaration",
      "c union definition",
      "c union",
      "c define union",
      "de union",
      "d divincenzo",
      "e dues",
      "union de vegetal",
      "union.ed",
      "e edition san diego union-tribune",
      "f/v devotion",
      "fu debrosse",
      "f d community federal credit union",
      "game dev union",
      "g devo",
      "g devincentis construction",
      "g union",
      "g devincentis & son construction co",
      "g dev con",
      "union de hecho",
      "union h",
      "union de vecinos",
      "unión de hecho",
      "i definition",
      "i definition math",
      "i definition sociology",
      "i definition pronoun",
      "i definition synonym",
      "i definition english",
      "i definition in physics",
      "i definition oxford dictionary",
      "(i) definition chemistry",
      "i definition verb",
      "j devoti",
      "j devins construction",
      "j deveau artist",
      "j development",
      "j devise",
      "devotion kickboxing",
      "devotion kickboxing club",
      "k devices",
      "k divine",
      "kevin dunion northwestern mutual",
      "kc devotional",
      "l union",
      "l'union newspaper",
      "m dev",
      "m dev madison",
      "m devito landscaping",
      "m div degree",
      "n union",
      "union demo",
      "union dem",
      "o devours",
      "o divine",
      "o divine redeemer",
      "p dev340",
      "p dev313",
      "p dev320",
      "p dev318",
      "p dev310",
      "q definition",
      "q definition biology",
      "q definition chemistry",
      "q definition math",
      "q definition science",
      "q definition slang",
      "q definition in chat",
      "q definition physics",
      "q definition medical",
      "a definition for kids",
      "r devops",
      "r devino and son llc",
      "r denverbroncos",
      "r/devinbrugman",
      "r devincentis construction inc",
      "s d union tribune",
      "s-union",
      "s d union tribune subscriber services",
      "s union st",
      "t devon",
      "t union",
      "t denver",
      "t denny",
      "u decide",
      "union development company",
      "v definition",
      "hiv definition biology",
      "v definition math",
      "v definition chemistry",
      "v definition neck",
      "charles v definition",
      "article v definition",
      "dsm-v definition",
      "kt/v definition",
      "double v definition",
      "w union",
      "union de",
      "x^u derivative",
      "xivu destiny",
      "x denver",
      "xivu destiny 2",
      "y union",
      "y-12 credit union login",
      "y disciple",
      "z dev",
      "z union",
      "z devolution",
      "zu denon",
      "z development",
      "union 0-10-2",
      "dev-0243",
      "dev-0563",
      "dev-0193",
      "0 denominator",
      "0 undefined",
      "0 division",
      "0 denominator is equal to",
      "1 division street",
      "1 division army",
      "1 division ave massapequa ny",
      "1 division street east greenwich ri",
      "1 division st",
      "1 division table",
      "1 division grand rapids",
      "1 division street cambridge ny",
      "division 2 crossplay",
      "division 2 update",
      "division 2 football",
      "division 2 builds",
      "division 2 summer event 2024",
      "division 2 baseball tournament",
      "division 2 server status",
      "division 2 baseball world series",
      "division 2 baseball rankings",
      "2 deveaux court south barrington",
      "2 denarii",
      "2 union place",
      "2 union place huntington ny",
      "2 dues",
      "division 3",
      "division 3 football's finest cast",
      "division 3 college world series",
      "division 3 baseball tournament",
      "division 3 lacrosse rankings",
      "division 3 release date",
      "division 3 baseball rankings",
      "division 3 lacrosse",
      "division 3 colleges by state",
      "3 divisions of government",
      "3 division table",
      "3 divisions of trigeminal nerve",
      "3 divisions of small intestine",
      "3 divisions of pharynx",
      "3 divisions of tennessee",
      "3 division champion ufc",
      "3 divisions of the brain",
      "4 devas",
      "4 devils",
      "4 devas arc",
      "4 devils meaning",
      "4 devinne drive concord nh",
      "5 deuce",
      "5 deuce blood",
      "5 unions",
      "5 deveaux ct",
      "6 deveaux court south barrington",
      "6 union",
      "6 devonshire",
      "6 union st batavia ny",
      "6 decenas",
      "7 deveaux ct south barrington",
      "7 devereux st utica ny",
      "7 devon",
      "7 union",
      "7 denominations",
      "8 union circle danbury ct",
      "8 devon rd summit nj",
      "9 deuce",
      "9 devon",
      "9 deuce bloods",
      "9 devon avenue farmingville ny 11738",
    ],
    authors: [
      {
        name: "DevUnion Foundation",
      },
    ],
    creator: "DevUnion Foundation",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      title,
      description,
      siteName: title,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@devunion_foundation",
    },
    icons,
    metadataBase: new URL(siteConfig.url),
    manifest: `${siteConfig.url}/site.webmanifest`,
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function absoluteUrl(path: string) {
  return `${env.NEXT_PUBLIC_APP_URL}${path}`;
}

// Utils from precedent.dev
export const timeAgo = (timestamp: Date, timeOnly?: boolean): string => {
  if (!timestamp) return "never";
  return `${ms(Date.now() - new Date(timestamp).getTime())}${timeOnly ? "" : " ago"
    }`;
};

export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<JSON> {
  const res = await fetch(input, init);

  if (!res.ok) {
    const json = await res.json();
    if (json.error) {
      const error = new Error(json.error) as Error & {
        status: number;
      };
      error.status = res.status;
      throw error;
    } else {
      throw new Error("An unexpected error occurred");
    }
  }

  return res.json();
}

export function nFormatter(num: number, digits?: number) {
  if (!num) return "0";
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits || 1).replace(rx, "$1") + item.symbol
    : "0";
}

export function capitalize(str: string) {
  if (!str || typeof str !== "string") return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const truncate = (str: string, length: number) => {
  if (!str || str.length <= length) return str;
  return `${str.slice(0, length)}...`;
};

export const getBlurDataURL = async (url: string | null) => {
  if (!url) {
    return "data:image/webp;base64,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=";
  }

  if (url.startsWith("/_static/")) {
    url = `${siteConfig.url}${url}`;
  }

  try {
    const response = await fetch(
      `https://wsrv.nl/?url=${url}&w=50&h=50&blur=5`,
    );
    const buffer = await response.arrayBuffer();
    const base64 = Buffer.from(buffer).toString("base64");

    return `data:image/png;base64,${base64}`;
  } catch (error) {
    return "data:image/webp;base64,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=";
  }
};

export const placeholderBlurhash =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAoJJREFUWEfFl4lu4zAMRO3cx/9/au6reMaOdkxTTl0grQFCRoqaT+SQotq2bV9N8rRt28xms87m83l553eZ/9vr9Wpkz+ezkT0ej+6dv1X81AFw7M4FBACPVn2c1Z3zLgDeJwHgeLFYdAARYioAEAKJEG2WAjl3gCwNYymQQ9b7/V4spmIAwO6Wy2VnAMikBWlDURBELf8CuN1uHQSrPwMAHK5WqwFELQ01AIXdAa7XawfAb3p6AOwK5+v1ugAoEq4FRSFLgavfQ49jAGQpAE5wjgGCeRrGdBArwHOPcwFcLpcGU1X0IsBuN5tNgYhaiFFwHTiAwq8I+O5xfj6fOz38K+X/fYAdb7fbAgFAjIJ6Aav3AYlQ6nfnDoDz0+lUxNiLALvf7XaDNGQ6GANQBKR85V27B4D3QQRw7hGIYlQKWGM79hSweyCUe1blXhEAogfABwHAXAcqSYkxCtHLUK3XBajSc4Dj8dilAeiSAgD2+30BAEKV4GKcAuDqB4TdYwBgPQByCgApUBoE4EJUGvxUjF3Q69/zLw3g/HA45ABKgdIQu+JPIyDnisCfAxAFNFM0EFNQ64gfS0EUoQP8ighrZSjn3oziZEQpauyKbfjbZchHUL/3AS/Dd30gAkxuRACgfO+EWQW8qwI1o+wseNuKcQiESjALvwNoMI0TcRzD4lFcPYwIM+JTF5x6HOs8yI7jeB5oKhpMRFH9UwaSCDB2Jmg4rc6E2TT0biIaG0rQhNqyhpHBcayTTSXH6vcDL7/sdqRK8LkwTsU499E8vRcAojHcZ4AxABdilgrp4lsXk8oVqgwh7+6H3phqd8J0Kk4vbx/+sZqCD/vNLya/5dT9fAH8g1WdNGgwbQAAAABJRU5ErkJggg==";
