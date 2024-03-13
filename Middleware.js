import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middleware(req) {
  const token = await getToken({ req });

  if (!token) {
    if (req.nextUrl.pathname.startsWith('/pages/api')) {
      return new NextResponse('Authentication Error', { status: 401 });
    }

    const { pathname, origin, basePath } = req.nextUrl;
    const signInUrl = new URL(`${basePath}/auth/signin`, origin);
    signInUrl.searchParams.append('callbackUrl', `${basePath}${pathname}`);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/moa/:path*', '/pages/api/:path*', '/register'],
};
