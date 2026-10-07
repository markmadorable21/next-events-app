// Fake JSON API types
type Post = {
  id: number;
  title: string;
  body: string;
};

// Simulate a slow API call
async function getPosts(): Promise<Post[]> {
  // Fake delay so you can actually SEE the loading.tsx
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=9',
    {
      // Disable caching so every navigation shows the loading state
      cache: 'no-store',
    },
  );

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  return res.json();
}

export default async function DashboardPage() {
  const posts = await getPosts();

  return (
    <div className="p-8">
      <h1 className="mb-6 text-2xl font-bold">Dashboard</h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
          >
            <h2 className="mb-2 font-semibold capitalize text-gray-900">
              {post.title}
            </h2>
            <p className="line-clamp-3 text-sm text-gray-600">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
