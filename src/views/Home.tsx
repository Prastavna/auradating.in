import Contact from "../components/Contact"
import Features from "../components/Features"

const Home = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2">
            <div className="md:mt-20">
                <div className="font-anton text-8xl uppercase mt-20 flex flex-col items-center">
                    <div className="relative">
                        Aura
                        <span className="absolute bottom-[-0.05rem] -right-7">
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-current text-foreground">
                                <g clip-path="url(#clip0_8_83)">
                                    <path d="M28.4469 17.9959C28.4471 17.2734 28.3049 16.558 28.0285 15.8904C27.7521 15.2229 27.3469 14.6164 26.836 14.1055C26.3252 13.5946 25.7186 13.1894 25.0511 12.913C24.3836 12.6366 23.6681 12.4944 22.9457 12.4946L21.4466 12.4946L21.4466 10.9955C21.4466 9.53649 20.867 8.13722 19.8353 7.10553C18.8036 6.07383 17.4043 5.49424 15.9453 5.49424C14.4863 5.49424 13.087 6.07383 12.0553 7.10553C11.0236 8.13722 10.444 9.53649 10.444 10.9955L10.444 12.4946L10.444 23.4972H21.4466H22.9457C23.6681 23.4973 24.3836 23.3552 25.0511 23.0788C25.7186 22.8024 26.3252 22.3971 26.836 21.8863C27.3469 21.3754 27.7521 20.7689 28.0285 20.1013C28.3049 19.4338 28.4471 18.7184 28.4469 17.9959Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_8_83">
                                        <rect width="24" height="24" fill="white" transform="translate(16.9706) rotate(45)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>
                    </div>
                    <div className="-mt-2">
                        Dating
                    </div>
                </div>

                <div className="text-center font-light text-lg mt-4">
                    AI driven invite only dating app for GenZ
                </div>
            </div>

            <div className="mt-24 flex justify-center md:row-start-2 md:row-end-2">
                <Contact />
            </div>

            <div className="mt-32 flex justify-center sm:w-[32rem] mx-6 sm:mx-auto md:row-start-1 md:row-end-3 md:col-start-2 md:mt-48 mb-40">
                <Features />
            </div>
        </div>
    )
}

export default Home