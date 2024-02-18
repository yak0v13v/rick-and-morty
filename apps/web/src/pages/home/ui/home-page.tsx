import { Search } from "./search";
import ThemeToggle from "@/features/theme";
import { Page } from "@/shared/ui/page";

const HomePage = () => {
  return (
    <Page headerRightSlot={<ThemeToggle />}>
      <Search />
    </Page>
  );
};

export { HomePage };
