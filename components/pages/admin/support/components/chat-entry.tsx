import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { AllChatResponse, TrainerDetailsWithCounts } from "../Support";

export function ChatEntry({
  chat,
  trainerDetailsWithCounts,
}: {
  chat?: AllChatResponse;
  trainerDetailsWithCounts?: TrainerDetailsWithCounts | undefined;
}) {
  // const getIndicatorStyles = (type?: string) => {
  //   switch (type) {
  //     case "Live":
  //       return "bg-green-500 text-white"
  //     case "Alert":
  //       return "bg-yellow-500 text-white"
  //     case "Critical":
  //       return "bg-red-500 text-white"
  //     case "New":
  //       return "bg-blue-500 text-white"
  //     default:
  //       return ""
  //   }
  // }

  return (
    <div className="flex items-center justify-between rounded-lg p-3 hover:bg-muted/50">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback>
            {
            chat?.trainer.name
              .split(" ")
              .map((n) => n[0])
              .join("")
            }

{
            trainerDetailsWithCounts?.trainerName
              .split(" ")
              .map((n) => n[0])
              .join("")
            }
              
              
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">{chat?.trainer.name}{trainerDetailsWithCounts?.trainerName}</p>
          <p className="text-sm text-muted-foreground">{"Active with " + trainerDetailsWithCounts?.userCount.toString() + "client"}</p>
        </div>
      </div>
      {/* {indicator && (
        <Badge variant="secondary" className={cn("ml-auto", getIndicatorStyles(indicator))}>
          {indicator}
        </Badge>
      )} */}
    </div>
  );
}
