import { Page } from "@/shared/ui/page";
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(() => import("@/features/theme"), { ssr: false });

export default function Home() {
  return <Page headerRightSlot={<ThemeToggle />}>Main</Page>;
}
