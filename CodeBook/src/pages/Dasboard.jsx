import React from 'react'

const Dasboard = () => {
  return (
    <div className="bg-[#121212] text-white font-['Space_Grotesk'] selection:bg-[#00FFC2]/30 selection:text-white min-h-screen pb-16">
        {/* Top Navigation */}
        <div className="bg-[#0a0a0a] border-b border-neutral-800 flex justify-between items-center w-full px-6 h-12 fixed top-0 z-50">
            <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-white" data-icon="menu_book">menu_book</span>
                <span className="font-['Space_Grotesk'] text-lg font-bold text-white tracking-tighter">CodeBook</span>
            </div>
            <div className=" h-10 w-10 border border-white rounded-full flex justify-end items-center"></div>
        </div>

        {/* Main Content */}
        {/*we add this section dynamically */}

        {/*Footer*/}
        <footer className="bg-[#0a0a0a] border-t border-neutral-800 flex items-stretch w-full h-16 fixed bottom-0 z-50">
            {/* Dashboard */}
            <div className="flex-1 flex flex-col items-center justify-center border-r border-neutral-800 text-neutral-500 hover:text-[#00FFC2] cursor-pointer transition-colors">
                <span className="material-symbols-outlined text-[20px] mb-1 leading-none">grid_view</span>
                <span className="text-[10px] font-bold tracking-widest">DASHBOARD</span>
            </div>
            
            {/* Editor (Active) */}
            <div className="flex-1 flex flex-col items-center justify-center border-l-2 border-[#00FFC2] text-[#00FFC2] cursor-pointer">
                <span className="material-symbols-outlined text-[20px] mb-1 leading-none">edit_document</span>
                <span className="text-[10px] font-bold tracking-widest">EDITOR</span>
            </div>

            {/* Templates */}
            <div className="flex-1 flex flex-col items-center justify-center border-l border-r border-neutral-800 text-neutral-500 hover:text-[#00FFC2] cursor-pointer transition-colors">
                <span className="material-symbols-outlined text-[20px] mb-1 leading-none">space_dashboard</span>
                <span className="text-[10px] font-bold tracking-widest">TEMPLATES</span>
            </div>

            {/* Files */}
            <div className="flex-1 flex flex-col items-center justify-center text-neutral-500 hover:text-[#00FFC2] cursor-pointer transition-colors border-r border-neutral-800">
                <span className="material-symbols-outlined text-[20px] mb-1 leading-none">account_tree</span>
                <span className="text-[10px] font-bold tracking-widest">FILES</span>
            </div>

            {/* Concise Copyright */}
            <div className="flex items-center justify-center px-4 text-neutral-600">
                <span className="text-[9px] font-bold tracking-widest">© '26 CODEBOOK</span>
            </div>
            
            {/* Bottom Purple Accent Line */}
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#6D28D9]"></div>
        </footer>

    </div>
  )
}

export default Dasboard