import { redirect } from "next/navigation";

export default function NotFound() {
  redirect("/portfolio/about");
  return null;
}
