import React from "react";

const FooterWrapper = () => {
    return (
        <>
            <div className="content-center h-[128px] bg-neutral-700">
                <div className="w-full max-w-[960px] mx-auto h-full flex justify-between items-center">
                    <div className="grid grid-cols-6 gap-[30px] text-white text-[11px] font-light leading-[16px]">
                        <div className="">会員登録</div>
                        <div className="">運営会社</div>
                        <div className="">利用規約</div>
                        <div className="">個人情報の取扱について</div>
                        <div className="">特定商取引法に基づく表記</div>
                        <div className="">お問い合わせ</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterWrapper
