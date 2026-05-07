import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/shared/components/ui/tooltip";

export function RedirectIcon(
    { imagePath, url, alt, toolTipMessage }: { imagePath:string, url:string, alt:string, toolTipMessage?:string }
) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <img 
                    className="invert w-8 h-8 hover:cursor-pointer transform duration-200 hover:scale-110" 
                    src={imagePath} 
                    alt={alt} 
                    onClick={() => window.open(url, "_blank", "noopener,noreferrer")}/>
                </TooltipTrigger>
                <TooltipContent>
                    {toolTipMessage}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}