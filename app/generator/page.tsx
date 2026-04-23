import { SiteHeader } from "@/components/SiteHeader";
import { GeneratorWorkspace } from "./GeneratorWorkspace";

export default function GeneratorPage() {
  return (
    <div className="app-frame">
      <SiteHeader active="generator" />
      <GeneratorWorkspace />
    </div>
  );
}
