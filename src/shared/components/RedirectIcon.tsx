import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/shared/components/ui/tooltip";
import type { RedirectIcon } from "../types/iRedirectIcon";

export function RedirectIcon(
    { 
        alt, 
        imagePath, 
        url,
        imageSize, 
        toolTipMessage 
    }: RedirectIcon
) {

    const size = imageSize ? `w-${imageSize} h-${imageSize}` : 'w-8 h-8'
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <img 
                    className={`invert w-10 h-10 hover:cursor-pointer transform duration-200 hover:scale-110`} 
                    src={imagePath} 
                    alt={alt} 
                    onClick={() => {
                        if(!url) return
                        window.open(url, "_blank", "noopener,noreferrer")
                    }}/>
                </TooltipTrigger>
                <TooltipContent>
                    {toolTipMessage}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}