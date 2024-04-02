import React from 'react'

const Popup = () => {
    return (
        <div>
            <div className="fixed bottom-0 left-0 w-full md:bottom-8 md:left-12 md:w-auto z-50">
                <div className="bg-slate-800 text-slate-50 text-sm p-3 md:rounded shadow-lg flex justify-between">
                    <div className="text-slate-500 inline-flex">
                        <a className="font-medium hover:underline text-emerald-400" href="https://api.whatsapp.com/send?phone=09224003487" target="_blank" rel="noreferrer">سوال یا مشاور با ما در تماس باشید</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup