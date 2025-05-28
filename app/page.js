import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h2>Online-Ai-Learning-Platform</h2>
      <Button>Yashwanth Raj!</Button>
      <UserButton />
    </div>
  );
}
