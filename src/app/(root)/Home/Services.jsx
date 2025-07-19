'use client';

function Services() {
    return (
        <section id="service" className="max-w-[1600px] mx-auto font-primary bg-text-6 py-20 px-[80px]">
            <div className="flex flex-col items-center text-center gap-10">
                <h4 className="text-primary text-[24px] leading-[28px] font-[400]">
                    XİDMƏTLƏRİMİZ
                </h4>
                <h2 className="text-text-1 font-[500] text-[34px] leading-[46px] max-w-2xl">
                    İnvest Home ilə əmlakı asanlıqla tapın.
                </h2>
            </div>

            <div className="flex flex-nowrap justify-between mt-[52px] overflow-x-hidden max-[1090px]:flex-col max-[1090px]:items-center max-[1090px]:gap-[30px]">
                <ServiceCard title="Satılıq" iconType="default" /> {/* Changed iconType to default */}
                <ServiceCard title="Kirayə" iconType="default" />
                <ServiceCard title="Günlük" iconType="custom" />
            </div>
        </section>
    );
}

function ServiceCard({ title, iconType }) {
    return (
        <>
            <div className="border border-primary shadow rounded-[30px] flex flex-nowrap pl-[50px] w-[413px] h-[260px] items-center relative max-[1090px]:w-full max-[1090px]:max-w-[413px] max-[1090px]:h-[220px] max-[1090px]:pl-[30px]">
                <div className="flex flex-wrap items-center w-[252px] h-[200px] max-[1090px]:w-[calc(100%-100px)] max-[1090px]:h-auto">
                    <h6 className="text-[32px] font-[500] max-[1090px]:text-[28px]">{title}</h6>
                    <p className="text-3 text-[16px] leading-[26px] w-[252px] max-[1090px]:w-full max-[1090px]:text-[14px] max-[1090px]:leading-[22px]">
                        Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.
                    </p>
                </div>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="150"
                    height="150"
                    fill="none"
                    viewBox="0 0 150 150"
                    className="absolute top-0 right-[-15px] max-[1090px]:w-[120px] max-[1090px]:h-[120px] max-[1090px]:right-[-5px]"
                >
                    <g filter="url(#dropShadow)">
                        <circle
                            cx="45"
                            cy="45"
                            r="45"
                            transform="matrix(-1 0 0 1 116 20)"
                            fill="#02836F"
                            fillOpacity="0.5"
                            shapeRendering="crispEdges"
                        />
                    </g>

                    {iconType === 'custom' ? (
                        <g transform="translate(45, 38)">
                            <path
                                d="M25.7165 2.90397C25.1036 2.90497 24.5133 3.13505 24.0615 3.54903L1.41155 23.5189L1.3905 23.538C0.661729 24.2121 0.492318 25.3123 0.859207 26.1152C1.2261 26.9182 2.08618 27.4931 3.06155 27.4936H8.9017V46.7944C8.9017 48.1121 10.0485 49.0949 11.306 49.0955H40.158C41.4155 49.0955 42.5623 48.1121 42.5623 46.7949V27.4936H48.403C49.3783 27.4936 50.2384 26.9192 50.6053 26.1157C50.9722 25.3128 50.8028 24.2121 50.074 23.538L50.053 23.5189L27.4031 3.54903C26.943 3.12752 26.3404 2.89688 25.7165 2.90397ZM25.7325 15.077C31.0454 15.077 35.3974 19.4175 35.3974 24.7148C35.3974 25.9904 35.1433 27.2104 34.6857 28.3276C34.587 28.6222 34.4636 28.9079 34.3168 29.1817L26.9038 41.7973C26.121 42.8583 25.4954 43.0919 24.5536 41.8624L17.8324 30.2437C16.6847 28.6285 16.0679 26.6963 16.0676 24.7148C16.0676 19.417 20.4196 15.0765 25.7325 15.0765M25.7325 19.5924C22.8716 19.5924 20.5961 21.8614 20.5961 24.7143C20.5961 27.5673 22.8716 29.8363 25.7325 29.8363C28.5934 29.8363 30.869 27.5673 30.869 24.7148C30.869 21.8619 28.5934 19.5934 25.7325 19.5934"
                                fill="white"
                            />
                        </g>
                    ) : (
                        <path
                            d="M57.6667 53.3721H75V67.3976H76.8462V62.6301C76.8483 59.929 77.6182 57.3393 78.9871 55.4293C80.3559 53.5193 82.2118 52.4449 84.1476 52.4419H88.3333V45H91V85H88.3333V79.4485L53.6667 79.8355V85H51V62.6744C51.002 60.2081 51.705 57.8437 52.9548 56.0998C54.2046 54.3559 55.8992 53.3749 57.6667 53.3721ZM88.3333 56.1628H84.1476C82.9188 56.1647 81.7407 56.8467 80.8719 58.0591C80.003 59.2715 79.5142 60.9153 79.5128 62.6299V67.3973H88.3333V56.1628ZM53.6667 76.1144L88.3333 75.7274V71.1185H53.6667V76.1144ZM53.6667 67.3976H72.3333V57.093H57.6667C56.6062 57.0947 55.5895 57.6833 54.8396 58.7296C54.0897 59.776 53.6679 61.1947 53.6667 62.6744V67.3976Z"
                            fill="white"
                        />
                    )}

                    <defs>
                        <filter
                            id="dropShadow"
                            x="0"
                            y="0"
                            width="150"
                            height="150"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dx="4" dy="10" />
                            <feGaussianBlur stdDeviation="15" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.262745 0 0 0 0 0.380392 0 0 0 0 0.933333 0 0 0 0.2 0"
                            />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </>
    );
}

export default Services;
