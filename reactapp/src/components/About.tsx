import React from 'react'

const About = () => {
    return (
        <section className='text-gray-700 border-t border-gray-200' id='about'>
            <div className='container px-5 py-24 mx-auto'>
                <div className='text-center mb-20'>
                    <h1 className='text-2xl sm:text-3xl font-medium mb-2 text-gray-900'>About Me</h1>
                    <p className='pb-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde blccanditiis, repellat ad nisi minus laborum quam tempore saepe dolore voluptatibus.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odio corporis deserunt eius eveniet! Beatae reiciendis quos nesciunt illum corporis praesentium quidem natus a laudantium deserunt quaerat animi eveniet, porro facere repudiandae repellendus saepe assumenda suscipit consectetur sunt fugiat! Quod, laborum cumque rerum a itaque laudantium enim repudiandae ex provident accusantium? Possimus dignissimos nihil iusto at assumenda, quis culpa, a earum vero fugiat aliquid laudantium vel laborum soluta est, deleniti odio! Velit enim, ipsam quaerat quae accusamus nihil. Optio dignissimos sint maxime amet voluptas, odio ratione, quae aspernatur enim error exercitationem suscipit harum assumenda maiores incidunt cum commodi minima repellat?</p>
                </div>
                {/* カードのdivタグ */}
                <div className='flex flex-wrap'>
                    <div className='md:w-1/3 p-4'>
                        <div className='bg-gray-200 rounded-lg p-8'>
                            <div className='flex items-center mb-3'>
                                <div className='bg-green-500 text-white rounded-full mr-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-activity" width={24} height={24} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M3 12h4l3 8l4 -16l3 8h4"></path>
                                    </svg>
                                </div>
                                <h2 className='text-gray-900 text-lg font-medium'>Web Developer</h2>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint placeat saepe porro eaque minus ea consectetur aut eos ab fugit.</p>
                                <a href="" className='flex mt-3 text-green-500 item-center'>もっと見る
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-big-right-line-filled" width={24} height={24} viewBox="0 0 24 24" stroke-width={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M12.089 3.634a2 2 0 0 0 -1.089 1.78l-.001 2.586h-4.999a1 1 0 0 0 -1 1v6l.007 .117a1 1 0 0 0 .993 .883l4.999 -.001l.001 2.587a2 2 0 0 0 3.414 1.414l6.586 -6.586a2 2 0 0 0 0 -2.828l-6.586 -6.586a2 2 0 0 0 -2.18 -.434l-.145 .068z" strokeWidth={0} fill="currentColor"></path>
                                        <path d="M3 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z" strokeWidth={0} fill="currentColor"></path>
                                    </svg>
                                </a>                            
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/3 p-4'>
                        <div className='bg-gray-200 rounded-lg p-8'>
                            <div className='flex items-center mb-3'>
                                <div className='bg-green-500 text-white rounded-full mr-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-activity" width={24} height={24} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M3 12h4l3 8l4 -16l3 8h4"></path>
                                    </svg>
                                </div>
                                <h2 className='text-gray-900 text-lg font-medium'>Web Developer</h2>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint placeat saepe porro eaque minus ea consectetur aut eos ab fugit.</p>
                                <a href="" className='flex mt-3 text-green-500 item-center'>もっと見る
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-big-right-line-filled" width={24} height={24} viewBox="0 0 24 24" stroke-width={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M12.089 3.634a2 2 0 0 0 -1.089 1.78l-.001 2.586h-4.999a1 1 0 0 0 -1 1v6l.007 .117a1 1 0 0 0 .993 .883l4.999 -.001l.001 2.587a2 2 0 0 0 3.414 1.414l6.586 -6.586a2 2 0 0 0 0 -2.828l-6.586 -6.586a2 2 0 0 0 -2.18 -.434l-.145 .068z" strokeWidth={0} fill="currentColor"></path>
                                        <path d="M3 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z" strokeWidth={0} fill="currentColor"></path>
                                    </svg>
                                </a>                            
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/3 p-4'>
                        <div className='bg-gray-200 rounded-lg p-8'>
                            <div className='flex items-center mb-3'>
                                <div className='bg-green-500 text-white rounded-full mr-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-activity" width={24} height={24} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M3 12h4l3 8l4 -16l3 8h4"></path>
                                    </svg>
                                </div>
                                <h2 className='text-gray-900 text-lg font-medium'>Web Developer</h2>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint placeat saepe porro eaque minus ea consectetur aut eos ab fugit.</p>
                                <a href="" className='flex mt-3 text-green-500 item-center'>もっと見る
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-big-right-line-filled" width={24} height={24} viewBox="0 0 24 24" stroke-width={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M12.089 3.634a2 2 0 0 0 -1.089 1.78l-.001 2.586h-4.999a1 1 0 0 0 -1 1v6l.007 .117a1 1 0 0 0 .993 .883l4.999 -.001l.001 2.587a2 2 0 0 0 3.414 1.414l6.586 -6.586a2 2 0 0 0 0 -2.828l-6.586 -6.586a2 2 0 0 0 -2.18 -.434l-.145 .068z" strokeWidth={0} fill="currentColor"></path>
                                        <path d="M3 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z" strokeWidth={0} fill="currentColor"></path>
                                    </svg>
                                </a>                            
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    )
}

export default About