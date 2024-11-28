import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="container mx-auto max-w-[1000px] p-4">
      <div className="flex flex-wrap gap-4 flex justify-center">
        <div className="w-40 flex items-center flex-col mb-5">
          {Card()}
        </div>
      </div>
    </div>
  );
}
