function BodyComponent () {
    return (
        <div>

            <section id="about" className="flex text-white min-h-screen bg-black text-center">
                <h1 className="m-auto font-waterfall text-7xl text-purple-800 font-bold">Hero</h1>
            </section>

            <section id="blog" className="flex text-white min-h-screen bg-purple-800 text-center">
                <h1 className="m-auto font-waterfall text-7xl text-white font-bold">Blog</h1>
            </section>

            <section id="contact" className="flex text-white min-h-screen bg-black text-center">
                <h1 className="m-auto font-waterfall text-7xl text-purple-800 font-bold">Contact</h1>
            </section>

            <section id="projects" className="flex text-white min-h-screen bg-purple-800 text-center">
                <h1 className="m-auto font-waterfall text-7xl text-white font-bold">Projects</h1>
            </section>
        </div>
    );
}

export default BodyComponent;