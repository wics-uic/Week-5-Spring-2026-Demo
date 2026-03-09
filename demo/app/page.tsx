export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-5xl">
      <h1>Counter: 0</h1>
      <button className="mt-6 px-6 py-3 bg-gray-600
      text-white font-semibold rounded-xl shadow-md active:scale-95 transform">
        Add One
      </button>
    </div>
  );
}
