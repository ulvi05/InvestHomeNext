"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from "next/image";
import PrivateInfo from './form/PrivateInfo';
import OtherInfo from './form/OtherInfo';
import Preview from './form/Preview';

const AgentForm = () => {

    const accordionRefs = useRef([React.createRef(), React.createRef(), React.createRef()]);
    const [height, setHeights] = useState(["0px", "0px", "0px"])
    const [formIndex, setFormIndex] = useState(0);

    useEffect(() => {
        openAccordion(0);
    }, []);

    const changeForm = (action) => {
        let index = formIndex;

        if (action === "increment" && index < 2) {
            index++;
        } else if (action === "decrement" && index > 0) {
            index--;
        } else {
            return; // prevent invalid range
        }

        setFormIndex(index);
        openAccordion(index);
    };


    const openAccordion = (indexToOpen) => {
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                const newHeights = accordionRefs.current.map((ref, i) => {
                    if (i === indexToOpen && ref.current) {
                        return `${ref.current.scrollHeight}px`;
                    }
                    return "0px";
                });
                setHeights(newHeights);
            });
        });
    };



    return (
        <>
            <section className='bg-white px-[32px] pt-[40px] pb-[68px] rounded-[12px] shadow-[0_4px_10px_rgba(0,0,0,0.15)]'>
                <div className='flex gap-[36px]'>
                    <div className='basis-[340px] min-h-[512px] px-[19px] pt-[34.5px] pb-[46px] rounded-[12px] border-[0.5px] border-[var(--primary-color)] shadow-[0_4px_10px_rgba(0,0,0,0.15)]'>
                        <div className="logo-container my-[15.5px]">
                            <div className='image-container flex items-center justify-center'>
                                <Image
                                    src="/images/logo_Invest_Home.png"
                                    alt="logo"
                                    width={57}
                                    height={57}
                                />
                            </div>
                            <div className='mt-[7px]'>
                                <h1 className='text-center text-[20px] font-[600]'>İnvest Home</h1>
                            </div>
                        </div>
                        <ul className="mt-[38px] flex flex-col gap-[16px]">
                            <div className="accordion">
                                {/* accordion-head */}
                                <div className='accordion-head flex gap-[6px]'>
                                    <div className={`transition-colors duration-300 ease-in-out line rounded-[3px] w-[3px] ${formIndex == 0 ? 'bg-[var(--primary-color)]' : 'bg-[#9CA3AF]'}`}></div>
                                    <li className={`transition-colors duration-300 ease-in-out w-[100%] font-[500] text-[14px] px-[20px] py-[16px] ${formIndex == 0 ? 'bg-[#02836F1A] text-[var(--primary-color)]' : 'shadow-[0px_4px_10px_rgba(217,217,217,0.32)] bg-[#fff] text-[#9CA3AF]'} rounded-[8px]`}>
                                        Şəxsi məlumatlar
                                    </li>
                                </div>
                                {/* accordion-body */}
                                <div
                                    ref={accordionRefs.current[0]}
                                    style={{ maxHeight: height[0] }}
                                    className={`transition-[max-height] overflow-hidden duration-300 ease-in-out accordion-body ml-[9px]`}
                                >
                                    <div className='mt-[16px] flex flex-col gap-[28px]'>
                                        <div className='flex items-center gap-[10px] relative'>
                                            <div className="radio-container">
                                                <div className="radio-outline rounded-[100%] flex items-center justify-center border-[2px] border-[var(--primary-color)] w-[20px] h-[20px]">
                                                    <div className="radio-base rounded-[100%] bg-[var(--primary-color)] w-[10px] h-[10px]"></div>
                                                </div>
                                            </div>
                                            <span className='text-[#737373] text-[16px]'>İş təcrübəsi 1</span>
                                            <div className='line absolute w-[1px] h-[28px] rounded-[1px] bg-[var(--primary-color)] left-[10px] top-[24px] translate-x-[-50%] translate-y-[0]'></div>
                                        </div>
                                        <div className='flex items-center gap-[10px] relative'>
                                            <div className="radio-container">
                                                <div className="radio-outline rounded-[100%] flex items-center justify-center border-[2px] border-[var(--primary-color)] w-[20px] h-[20px]">
                                                    <div className="radio-base rounded-[100%] bg-[var(--primary-color)] w-[10px] h-[10px]"></div>
                                                </div>
                                            </div>
                                            <span className='text-[#737373] text-[16px]'>İş təcrübəsi 2</span>
                                            <div className='line absolute w-[1px] h-[28px] rounded-[1px] bg-[var(--primary-color)] left-[10px] top-[24px] translate-x-[-50%] translate-y-[0]'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion">
                                <div className='accordion-head flex gap-[6px]'>
                                    <div className={`transition-colors duration-300 ease-in-out line rounded-[3px] w-[3px] ${formIndex == 1 ? 'bg-[var(--primary-color)]' : 'bg-[#9CA3AF]'}`}></div>
                                    <li className={`transition-colors duration-300 ease-in-out w-[100%] font-[500] text-[14px] px-[20px] py-[16px] ${formIndex == 1 ? 'bg-[#02836F1A] text-[var(--primary-color)]' : 'shadow-[0px_4px_10px_rgba(217,217,217,0.32)] bg-[#fff] text-[#9CA3AF]'} rounded-[8px]`}>
                                        Digər Məhsullar
                                    </li>
                                </div>
                                <div
                                    ref={accordionRefs.current[1]}
                                    style={{ maxHeight: height[1] }}
                                    className={`transition-[max-height] overflow-hidden duration-300 ease-in-out accordion-body ml-[9px]`}
                                >
                                    <div className='mt-[16px] flex flex-col gap-[28px]'>
                                        <div className='flex items-center gap-[10px] relative'>
                                            <div className="radio-container">
                                                <div className="radio-outline rounded-[100%] flex items-center justify-center border-[2px] border-[var(--primary-color)] w-[20px] h-[20px]">
                                                    <div className="radio-base rounded-[100%] bg-[var(--primary-color)] w-[10px] h-[10px]"></div>
                                                </div>
                                            </div>
                                            <span className='text-[#737373] text-[16px]'>İş təcrübəsi 1</span>
                                            <div className='line absolute w-[1px] h-[28px] rounded-[1px] bg-[var(--primary-color)] left-[10px] top-[24px] translate-x-[-50%] translate-y-[0]'></div>
                                        </div>
                                        <div className='flex items-center gap-[10px] relative'>
                                            <div className="radio-container">
                                                <div className="radio-outline rounded-[100%] flex items-center justify-center border-[2px] border-[var(--primary-color)] w-[20px] h-[20px]">
                                                    <div className="radio-base rounded-[100%] bg-[var(--primary-color)] w-[10px] h-[10px]"></div>
                                                </div>
                                            </div>
                                            <span className='text-[#737373] text-[16px]'>İş təcrübəsi 2</span>
                                            <div className='line absolute w-[1px] h-[28px] rounded-[1px] bg-[var(--primary-color)] left-[10px] top-[24px] translate-x-[-50%] translate-y-[0]'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion">
                                <div className=' accordion-head flex gap-[6px]'>
                                    <div className={`transition-colors duration-300 ease-in-out line rounded-[3px] w-[3px] ${formIndex == 2 ? 'bg-[var(--primary-color)]' : 'bg-[#9CA3AF]'}`}></div>
                                    <li className={`transition-colors duration-300 ease-in-out w-[100%] font-[500] text-[14px] px-[20px] py-[16px] ${formIndex == 2 ? 'bg-[#02836F1A] text-[var(--primary-color)]' : 'shadow-[0px_4px_10px_rgba(217,217,217,0.32)] bg-[#fff] text-[#9CA3AF]'} rounded-[8px]`}>
                                        Ön Baxış
                                    </li>
                                </div>
                                {/* <div
                                    ref={accordionRefs.current[2]}
                                    style={{ maxHeight: height[2] }}
                                    className={`transition-[max-height] overflow-hidden duration-300 ease-in-out accordion-body ml-[9px]`}
                                >
                                    <div className='mt-[16px] flex flex-col gap-[28px]'>
                                        <div className='flex items-center gap-[10px] relative'>
                                            <div className="radio-container">
                                                <div className="radio-outline rounded-[100%] flex items-center justify-center border-[2px] border-[var(--primary-color)] w-[20px] h-[20px]">
                                                    <div className="radio-base rounded-[100%] bg-[var(--primary-color)] w-[10px] h-[10px]"></div>
                                                </div>
                                            </div>
                                            <span className='text-[#737373] text-[16px]'>İş təcrübəsi 1</span>
                                            <div className='line absolute w-[1px] h-[28px] rounded-[1px] bg-[var(--primary-color)] left-[10px] top-[24px] translate-x-[-50%] translate-y-[0]'></div>
                                        </div>
                                        <div className='flex items-center gap-[10px] relative'>
                                            <div className="radio-container">
                                                <div className="radio-outline rounded-[100%] flex items-center justify-center border-[2px] border-[var(--primary-color)] w-[20px] h-[20px]">
                                                    <div className="radio-base rounded-[100%] bg-[var(--primary-color)] w-[10px] h-[10px]"></div>
                                                </div>
                                            </div>
                                            <span className='text-[#737373] text-[16px]'>İş təcrübəsi 2</span>
                                            <div className='line absolute w-[1px] h-[28px] rounded-[1px] bg-[var(--primary-color)] left-[10px] top-[24px] translate-x-[-50%] translate-y-[0]'></div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </ul>
                    </div>
                    <div className='basis-[calc(100%-376px)] flex flex-col justify-between'>
                        {
                            formIndex == 0
                                ?
                                <PrivateInfo />
                                :
                                formIndex == 1
                                    ?
                                    <OtherInfo />
                                    :
                                    <Preview />
                        }

                        <div className={`buttons-container ${formIndex == 0 ? 'justify-end' : 'justify-between'} flex mt-[16px]`}>
                            {formIndex == 0
                                ?
                                <button onClick={() => { changeForm("increment") }} className='cursor-pointer flex items-center gap-[12px] bg-[var(--primary-color)] text-[white] rounded-[8px] py-[12px] px-[34px]'>
                                    <span className='font-[500] text-[16px]'>Növbəti</span>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </button>
                                :
                                formIndex == 2
                                    ?
                                    <>
                                        <button onClick={() => { changeForm("decrement") }} className='cursor-pointer flex items-center gap-[12px] text-[white] bg-[var(--primary-color)] rounded-[8px] py-[12px] px-[34px]'>
                                            <i className="fa-solid fa-arrow-left"></i>
                                            <span className='font-[500] text-[16px]'>Geriyə Qayıt</span>
                                        </button>
                                        <button className='cursor-pointer bg-[var(--primary-color)] text-[white] rounded-[8px] py-[12px] px-[34px]'>
                                            <span className='font-[500] text-[16px]'>Təsdiqlə</span>
                                        </button>
                                    </>
                                    :
                                    <>
                                        <button onClick={() => { changeForm("decrement") }} className='cursor-pointer flex items-center gap-[12px] text-[white] bg-[var(--primary-color)] rounded-[8px] py-[12px] px-[34px]'>
                                            <i className="fa-solid fa-arrow-left"></i>
                                            <span className='font-[500] text-[16px]'>Geriyə Qayıt</span>
                                        </button>
                                        <button onClick={() => { changeForm("increment") }} className='cursor-pointer flex items-center gap-[12px] bg-[var(--primary-color)] text-[white] rounded-[8px] py-[12px] px-[34px]'>
                                            <span className='font-[500] text-[16px]'>Növbəti</span>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </button>
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AgentForm