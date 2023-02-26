import React from 'react'

const Contact = () => {
    return (
        <section className='w-full text-center mx-auto text-gray-900 border-t  border-gray-200 flex justify-center' id='contact'>
            <div className='px-5 p-10 mb-6'>
                <div className='text-gray-900 font-medium mb-2 text-2xl sm:text-3xl'>
                    お問合せ
                </div>
                <div className='mt-20 flex justify-center'>
                    <div className='mr-5 text-2xl'>
                        名前
                    </div>
                    <div>
                        <input type="text" value="例：山田　太郎" className='py-2 px-4 bg-gray-200 rounded w-full focus:bg-white leading-tight text-gray-700' />
                    </div>
                </div>
                <div className='mt-20 flex justify-center'>
                    <div className='mr-5 text-2xl'>
                        メールアドレス
                    </div>
                    <div>
                    <input type="text" value="yamada@gmail.com" className='py-2 px-4 bg-gray-200 rounded w-full focus:bg-white leading-tight text-gray-700' />
                    </div>
                </div>
                <div className='mt-20 flex justify-center'>
                    <div className='mr-5 text-2xl md:w-1/3'>
                        お問合せ内容
                    </div>
                    <div>
                        <textarea value="" className='bg-gray-200 rounded md:w-2/3 w-full' />
                    </div>
                </div>
                <div>
                    <button type="submit" className='bg-green-600 px-6 py-2 rounded text-white hover:bg-green-800 duration-300 mt-8'>送信</button>
                </div>
            </div>
        </section>
    )
}

export default Contact