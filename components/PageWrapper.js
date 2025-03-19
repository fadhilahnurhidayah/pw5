export default function PageWrapper({ children, title }) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 max-w-7xl">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
        {title}
      </h1>
      {children}
    </div>
  );
}