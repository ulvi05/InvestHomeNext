import Image from "next/image";
import Agent from "../../../../public/images/beagent.png"
import Link from "next/link";

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
                        <Link href="/become-agent" className="max-[769px]:hidden min-w-0 px-[54px] py-[10px] text-[16px] font-[500] text-primary bg-white rounded-[30px] border border-[#096338] hover:bg-[var(--yellow)] hover:text-white transition-colors duration-300 cursor-pointer">
                            <span className="block overflow-hidden text-ellipsis whitespace-nowrap">
                                İndi Qeydiyyatdan Keçin
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
export default BeAgent;