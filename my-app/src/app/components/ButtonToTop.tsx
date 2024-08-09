"use client";

const button = window.document.getElementsByClassName("scrollToTop");

export default function ButtonToTop() {
    return (
        <div className="scrollToTop hidden z-50 fixed bottom-7 right-10">
            <div onClick={() => scrollTo(0, 0)} className="flex justify-center items-center md:h-[65px] md:w-[65px]
            mm:h-[52px] mm:w-[52px]
          bg-primary hover:bg-secondary active:bg-active rounded-full cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" 
                stroke="currentColor" className="size-14">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5"/>
                </svg>
            </div>
        </div>
    )
}

function buttonShow() {
    window.scrollY > 80 ? button[0].classList.remove("hidden") : button[0].classList.add("hidden");
}

setInterval(buttonShow, 1000);