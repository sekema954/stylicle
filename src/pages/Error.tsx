
function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 to-red-400 text-white">
      <div className="text-center z-10">
        <h1 className="text-6xl font-bold mb-4">Oops!</h1>
        <p className="text-xl mb-6">Something went wrong.</p>
        <a
          href="/"
          className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-full shadow-lg transition duration-300 hover:bg-gray-200"
        >
          Go Back Home
        </a>
      </div>
      <div className="relative w-72 h-72 mt-10 animate-float">
        <div className="absolute inset-0 w-full h-full bg-white bg-opacity-20 rounded-full animate-spin-slow"></div>
        <div className="absolute inset-10 w-full h-full bg-black bg-opacity-20 rounded-full blur-xl"></div>
      </div>
    </div>
  );
}

export default Error;