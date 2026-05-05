export function RedirectIcon(
    { imagePath, url, alt }: { imagePath:string, url:string, alt:string }
) {
    return (
        <img 
        className="invert w-8 h-8 hover:cursor-pointer" 
        src={imagePath} 
        alt={alt} 
        onClick={() => window.location.href = url}/>
    )
}