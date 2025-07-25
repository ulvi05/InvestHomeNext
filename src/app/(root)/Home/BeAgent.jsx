import Image from "next/image";
import Agent from "../../../../public/images/beagent.png"

function BeAgent() {
    return (
        <>
            <section id="agent" className=" max-w-[1600px] mx-[auto] w-auto flex justify-center relative mt-[144px] max-[1025px]:mt-[60px] max-[426px]:mt-[20px] px-[80px] max-[1025px]:px-[20px] max-[426px]:px-[16px] max-[1400px]:mt-[100px] max-[1400px]:mb-[100px]">
                <div className="max-h-[260px] w-full flex max-[426px]:flex-row-reverse bg-primary pr-[100px] max-[769px]:pr-[0] max-[426px]:pl-[17px] rounded-[40px] max-[769px]:rounded-[12px] max-[426px]:rounded-[8px]">
                    <div className="shrink min-w-[100px] max-w-[356px] mt-[-5%] max-[425px]:basis-[10%]">
                        <Image
                            src={Agent}
                            alt="Be Agent"
                            width={0}
                            height={0}
                            className="w-full h-auto block align-baseline"
                        />
                    </div>
                    <div className="flex items-center justify-between w-full h-full">
                        <div className="max-w-[412px] flex flex-col gap-[10px]">
                            <h5 className="text-[48px]/[44px] font-[500] text-white max-[1480px]:text-[36px]/[40px] max-[426px]:text-[16px] max-[769px]:text-[20px] whitespace-nowrap">Agent ol</h5>
                            <p className="text-[20px]/[24px] text-white max-[1480px]:text-[16px]/[20px] max-[426px]:text-[8px] max-[769px]:text-[12px] max-[426px]:leading-[1.2]">Fusce venenatis tellus a felis scelerisque. venenatis tellus a felis scelerisque. </p>
                        </div>
                        <button className="max-[769px]:hidden min-w-0 px-[54px] py-[10px] text-[16px] font-[500] text-primary bg-white rounded-[30px] border border-[#096338] hover:bg-[var(--yellow)] hover:text-white transition-colors duration-300 cursor-pointer">
                            <span className="block overflow-hidden text-ellipsis whitespace-nowrap">
                                İndi Qeydiyyatdan Keçin
                            </span>
                        </button>
                    </div>
                </div>
            </section>
            {/* <section id="agent" className="max-w-[1600px] mx-[auto] w-auto flex justify-center relative mt-[220px] mb-[120px] px-[80px] max-[1400px]:px-[20px] max-[1400px]:mt-[100px] max-[1400px]:mb-[100px]">
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
        </section> */}
        </>
    )
}
export default BeAgent;