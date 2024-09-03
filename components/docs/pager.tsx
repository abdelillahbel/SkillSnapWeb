import Link from "next/link"
import { docsConfig } from "@/config/docs"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/shared/icons"

interface DocsPagerProps {
  // doc: Doc
}

export function DocsPager({ }: DocsPagerProps) {
  

  

  return (
    <div className="flex flex-row items-center justify-between">
      
    </div>
  )
}

export function getPagerForDoc() {
 
}

export function flatten(links: { items?}[]) {
  return links.reduce((flat, link) => {
    return flat.concat(link.items ? flatten(link.items) : link)
  }, [])
}
