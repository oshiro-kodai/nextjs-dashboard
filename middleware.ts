import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth; // authConfigファイルを読み込んで、NextAuthに渡す

export const config = {
  // どのルートにこのミドルウェアを適用させるかの設定。ここでは適用させないルートを指定している。これがないと全てのルートでこのMiddlewareが適用される
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
