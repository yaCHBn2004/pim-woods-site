function Hamburger({ onClick, isOpen = true }) {
    return (
        <button className="flex flex-col gap-1" onClick={onClick}>
            <div
                className={
                    "w-5 h-[2px] bg-text-white rounded-full transition-all" +
                    (isOpen ? " rotate-45 translate-y-1.5" : "")
                }
            ></div>
            <div
                className={
                    "w-5 h-[2px] bg-text-white rounded-full transition-all" +
                    (isOpen ? "opacity-0 w-0 bg-transparent" : "")
                }
            ></div>
            <div
                className={
                    "w-5 h-[2px] bg-text-white rounded-full transition-all" +
                    (isOpen ? " -rotate-45 -translate-y-1.5" : "")
                }
            ></div>
        </button>
    );
}

export default Hamburger;