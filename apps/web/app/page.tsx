
import styles from "./page.module.css";
import { Button } from "@repo/ui/button";

export default function Page(): JSX.Element {
  return (
   <div>
      <Button appName="Web app">
        Click me
      </Button>
   </div>
  );
}
