import type { ComponentPropsWithRef } from 'react'

import { cn } from '@/lib/utils'

interface ContainerProps extends ComponentPropsWithRef<'div'> {
    constrained?: boolean
}

const Container = ({ className, constrained = false, ref, ...props }: ContainerProps) => (
    <div
        className={cn(
            'mx-auto w-full max-w-7xl lg:max-w-(--breakpoint-xl) 2xl:max-w-(--breakpoint-2xl)',
            constrained ? 'sm:px-6 lg:px-8' : 'px-4 sm:px-6 lg:px-8',
            className
        )}
        {...props}
        ref={ref}
    />
)

export type { ContainerProps }
export { Container }
