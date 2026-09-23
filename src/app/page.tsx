export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-8">
      <div className="max-w-md text-center bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700">
        <h1 className="text-4xl font-extrabold text-indigo-400 mb-4">
          Tech Startup Ltd
        </h1>
        <p className="text-slate-300 mb-6">
          This site is relies on dynamic external CDN packages for global styling architecture.
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-6 rounded-xl transition-all">
          Access Portal
        </button>
      </div>
    </main>
  );
}