import Image from "next/image";
import Agent from "../../../../public/images/beagent.png"

function BeAgent() {
    return (
        <section id="agent" className="max-w-full w-auto flex justify-center relative mt-[220px] mb-[120px] px-[80px] max-[1400px]:px-[20px] max-[1400px]:mt-[100px] max-[1400px]:mb-[100px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="154" height="156" viewBox="0 0 154 156" fill="none" className="absolute top-[-70px] opacity-50 z-2 max-[1480px]:hidden">
                <ellipse opacity="0.5" cx="77" cy="77" rx="77" ry="77" transform="matrix(0.862514 -0.506033 0.493991 0.869467 -27 50)" fill="url(#paint0_linear_792_24781)" />
                <defs>
                    <linearGradient id="paint0_linear_792_24781" x1="77" y1="0" x2="77" y2="154" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#02836F" />
                        <stop offset="1" stopColor="#4361EE" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
            <div className="agent w-full h-[260px] bg-primary rounded-[40px] flex justify-between items-center pl-[200px] relative gap-[70px] max-[1480px]:w-full max-[1480px]:h-auto max-[1480px]:flex-col max-[1480px]:py-[40px] max-[1480px]:px-[20px] max-[1480px]:text-center max-[1480px]:pl-[0px] max-[1480px]:gap-[30px]">
                <Image
                    src={Agent}
                    alt="Be Agent"
                    width={356}
                    height={356}
                    className="w-[356px] h-[356px] top-[-96px] left-[0px] absolute max-[1400px]:relative max-[1400px]:top-0 max-[1400px]:left-0 max-[1400px]:w-[250px] max-[1400px]:h-[250px]"
                />
                <div className="agent-text gap-[24px] flex flex-col ml-[250px] max-[1480px]:ml-[0px] max-[1480px]:items-center">
                    <h5 className="text-[48px]/[44px] font-[500] text-white max-[1480px]:text-[36px]/[40px]">Agent ol</h5>
                    <p className="text-[20px]/[24px] text-white w-[412px] max-[1480px]:w-full max-[1480px]:text-[16px]/[20px]">Fusce venenatis tellus a felis scelerisque. venenatis tellus a felis scelerisque. </p>
                </div>
                <button className="agent-button w-[305px] text-center text-primary mr-[108px] bg-white rounded-[30px] border-1 border-[#096338] text-[16px] font-[500] px-[30px] py-[19px] hover:bg-[var(--yellow)] hover:text-white transition-colors duration-300 cursor-pointer z-2 max-[1480px]:w-full max-[1480px]:max-w-[305px] max-[1480px]:mx-auto">İndi Qeydiyyatdan Keçin</button>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none" className=" absolute right-[150px] top-[133px] max-[1480px]:hidden">
                <circle opacity="0.5" cx="29.6147" cy="29.6147" r="29" transform="rotate(30 29.6147 29.6147)" fill="url(#paint0_linear_792_24782)" />
                <defs>
                    <linearGradient id="paint0_linear_792_24782" x1="29.6147" y1="0.614735" x2="29.6147" y2="58.6147" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </section>
    )
}
export default BeAgent;