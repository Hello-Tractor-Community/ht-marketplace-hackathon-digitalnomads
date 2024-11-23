//This file is present for purposes of testing. Should be deleted.
import { NextResponse } from 'next/server';

// Directus API configuration
const DIRECTUS_URL = process.env.DIRECTUS_URL; // e.g., 'https://your-directus-instance.com'
const DIRECTUS_API_TOKEN = process.env.DIRECTUS_API_TOKEN; // DIRECTUS admin static API token.
// Handler for GET requests
export async function GET() {   
  try {
    // Fetch data from the directus_users table
    const usersResponse = await fetch(`${DIRECTUS_URL}/items/users`, {
        //This header sectoion should be removed if DIRECTUS doesn't require authentication
        headers: {
        Authorization: `Bearer ${DIRECTUS_API_TOKEN}`,
      },
    });

    if (!usersResponse.ok) {
      throw new Error(`Failed to fetch users: ${usersResponse.statusText}`);
    }

    const usersData = await usersResponse.json();

    // Return the user data
    return NextResponse.json(usersData, { status: 200 });
  } catch (error) {
    console.error('Error fetching users:', error.message);
    return NextResponse.json(
      { message: 'Failed to fetch users', error: error.message },
      { status: 500 }
    );
  }
}
