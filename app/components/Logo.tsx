import { Kanit } from 'next/font/google'
import React from 'react'

const noto = Kanit({
    subsets: ["latin"],
    weight: "700"
})
function Logo() {


    return (
        <div className={noto.className + ` text-3xl`}><span className="text-blue-600">Kal.</span>Nirnaay</div>
    )
}

export default Logo