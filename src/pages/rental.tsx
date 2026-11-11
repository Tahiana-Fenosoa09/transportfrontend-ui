
function Rental() {
    return (
        <>
            <section className="w-full h-screen scroll-auto flex items-center flex-col">
                <div className="w-4/5 h-[10%] p-2 ">
                    <h1 className="text-5xl font-bold">Welcome</h1>
                </div>

                <div className="w-4/5 h-full flex flex-col gap-2 p-2">
                    <div className="w-full h-[10%]">
                        <h2 className="text-2xl font-medium">Available Cars</h2>

                    </div>
                    <div className="w-full h-full p-2 flex flex-col gap-10">
                        <div className="w-full h-[30vh] p-2 flex flex-col gap-4 shadow rounded-xl">
                            <div className="w-full h-[80%] flex gap-5">
                                <div className="h-full w-1/2 bg-black rounded-xl">
                                    <img src="" alt="" className="w-full h-full rounded-xl"/>
                                </div>
                                <div className="h-full w-1/2 flex flex-col gap-2">
                                    <h2 className="text-xl font-medium">Rental price</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quae reiciendis modi eveniet distinctio doloremque quis, accusantium doloribus culpa deleniti!</p>
                                </div>
                            </div>
                            <div className="w-full h-[20%]">
                                <button className="w-full h-full bg-black rounded-xl font-medium text-white">Book</button>
                            </div>
                        </div>
                        <div className="w-full h-[30vh] p-2 flex flex-col gap-4 shadow rounded-xl">
                            <div className="w-full h-[80%] flex gap-5">
                                <div className="h-full w-1/2 bg-black rounded-xl">
                                    <img src="" alt="" className="w-full h-full rounded-xl"/>
                                </div>
                                <div className="h-full w-1/2 flex flex-col gap-2">
                                    <h2 className="text-xl font-medium">Rental price</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quae reiciendis modi eveniet distinctio doloremque quis, accusantium doloribus culpa deleniti!</p>
                                </div>
                            </div>
                            <div className="w-full h-[20%]">
                                <button className="w-full h-full bg-black rounded-xl font-medium text-white">Book</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}

export default Rental;