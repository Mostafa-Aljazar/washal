"use client"

// Error components must be Client Components
import { useEffect } from "react"
import { Button } from "@nextui-org/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h2>Something went wrong!</h2>
      <Button
        color="danger"
        onPress={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }>
        Try again
      </Button>
    </div>
  )
}
