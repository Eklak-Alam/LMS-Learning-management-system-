'use client';

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-purple-50 p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white text-center">
          <h1 className="text-3xl font-bold">Oops!</h1>
          <p className="mt-2 opacity-90">Something went wrong</p>
        </div>
        <div className="p-8 text-center">
          <div className="mx-auto w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-6">
            <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Error Loading Content</h2>
          <p className="text-gray-600 mb-6">{error.message || "We encountered an unexpected issue"}</p>
          <button
            onClick={reset}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Try Again
          </button>
          <a
            href="/"
            className="mt-4 inline-block px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Return Home
          </a>
        </div>
      </div>
    </div>
  );
}