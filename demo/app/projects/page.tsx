export default function Projects() {

    return (
        <div className="flex flex-col items-center justify-center h-screen text-5xl">
            <h1>Projects</h1>

            <div className="flex flex-row gap-2 items-center">

                <button className="mt-6 px-6 py-3 bg-gray-600
      text-white font-semibold rounded-xl shadow-md active:scale-95 transform">
                    Portfolio Website
                </button>

                <button className="mt-6 px-6 py-3 bg-gray-600
      text-white font-semibold rounded-xl shadow-md active:scale-95 transform">
                    Weather App
                </button>

            </div>

        </div>
    );
}
