import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  // ここでNextAuthの設定を行う
  pages: {
    // デフォルトのページではなく、カスタムのページを使用する
    signIn: '/login',
  },
  callbacks: {
    // ユーザーが認証されているかどうかを確認し、ダッシュボードへのアクセス認可を行う
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
