export default function Loading() {
  return (
    <main className="container py-8">
      <div className="space-y-8">
        <div className="space-y-2">
          <div className="h-8 w-64 animate-pulse rounded-lg bg-muted"></div>
          <div className="h-4 w-48 animate-pulse rounded-lg bg-muted"></div>
        </div>

        <div className="space-y-4">
          <div className="h-10 w-full animate-pulse rounded-lg bg-muted"></div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-24 animate-pulse rounded-xl bg-muted"></div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
