import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

// Get all the comments of a single post
export const GET = async (req) => {
  const { searchparams } = new URL(req.url);
  const postSlug = searchparams.get('postSlug');

  try {
    // inside the where condition, we are checking if postSlug exists if yes then find the comments based on that slug.
    const comments = prisma.comment.findMany({
      where: {
        ...(postSlug && { postSlug }), // same as this ,  where: postSlug ? { postSlug } : {},
      },
    });

    return new NextResponse(JSON.stringify(comments, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong!' }, { status: 500 })
    );
  }
};
