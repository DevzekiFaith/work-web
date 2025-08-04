export default function notFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 text-center">
      <div>
        <h1 className="text-6xl font-bold text-purple-700 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6">Sorry, the page you’re looking for doesn’t exist or has been moved.</p>
        <a href="/" className="text-purple-600 hover:underline">Go back home →</a>
      </div>
    </div>
  );
}
