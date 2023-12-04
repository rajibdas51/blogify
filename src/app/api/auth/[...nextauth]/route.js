import NextAuth from 'next-auth';
import { authOptions } from '@/utils/auth';
// handler as GET or POST
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
