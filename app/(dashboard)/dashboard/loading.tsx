const Loading = () => {
  return (
    <div className="p-8">
      {/* Header skeleton */}
      <div className="mb-6 h-8 w-48 animate-pulse rounded bg-gray-200" />

      {/* Animated spinner + text */}
      <div className="mb-6 flex items-center gap-3">
        <div className="h-6 w-6 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600" />
        <p className="text-sm font-medium text-gray-500">Loading dashboard…</p>
      </div>

      {/* Skeleton card grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="animate-pulse rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
          >
            <div className="mb-3 h-4 w-3/4 rounded bg-gray-200" />
            <div className="mb-2 h-3 w-full rounded bg-gray-200" />
            <div className="mb-2 h-3 w-5/6 rounded bg-gray-200" />
            <div className="h-3 w-2/3 rounded bg-gray-200" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
