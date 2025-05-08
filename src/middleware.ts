import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    const isProtectedRoute =
        pathname === '/main' || pathname.startsWith('/product/');

    if (request.headers.get('referer') === null && isProtectedRoute) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/main', '/product/:path*'],
};
