import React from 'react'
import { Skeleton } from "@/components/ui/skeleton";

function SkeletonLoader() {
    return (
        <div className="space-y-4">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-6 w-5/6" />
            <Skeleton className="h-4 w-2/3" />
        </div>
    )
}

export default SkeletonLoader