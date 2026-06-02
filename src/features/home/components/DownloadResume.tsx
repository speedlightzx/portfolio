export function DownloadResume() {
    
    return (
        <div className="flex justify-center w-full">
            <a 
            href="/api/getResume"
            download
            className="downloadCv rounded-md border border-purple-500 flex p-3 gap-x-1.5 hover:cursor-pointer transition duration-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-download-icon lucide-download"><path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/></svg>
                <p className="text-white">Baixar currículo</p>
            </a>
        </div>
    )
}