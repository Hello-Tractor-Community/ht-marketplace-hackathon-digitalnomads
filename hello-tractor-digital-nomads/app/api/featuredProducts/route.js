import { NextResponse } from 'next/server';

// Directus API configuration
const DIRECTUS_URL = process.env.DIRECTUS_URL; // e.g., 'https://your-directus-instance.com';
const DIRECTUS_API_TOKEN = process.env.DIRECTUS_API_TOKEN;

// Handler for GET requests
export async function GET() {
  try {
    // Fetch top 6 tractors by view count
    const tractorsResponse = await fetch(`${DIRECTUS_URL}/items/tractor?fields=*&sort=-view_count&limit=6`, {
      
      headers: {
        Authorization : `Bearer ${DIRECTUS_API_TOKEN}`,
      },
    });

    if (!tractorsResponse.ok) {
      throw new Error(`Failed to fetch tractors: ${tractorsResponse.statusText}`);
    }

    const tractorsData = await tractorsResponse.json();

    // Fetch top 6 spare parts by view count
    const sparePartsResponse = await fetch(`${DIRECTUS_URL}/items/spare_part?fields=*&sort=-view_count&limit=6`, {
      headers: {
        Authorization : `Bearer ${DIRECTUS_API_TOKEN}`,
      },
    });

    if (!sparePartsResponse.ok) {
      throw new Error(`Failed to fetch spare parts: ${sparePartsResponse.statusText}`);
    }

    const sparePartsData = await sparePartsResponse.json();

    // Construct the response
    const response = {
      tractors: tractorsData.data,
      spareParts: sparePartsData.data,
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error('Error fetching featured products:', error.message);
    return NextResponse.json(
      { message: 'Failed to fetch featured products', error: error.message },
      { status: 500 }
    );
  }
}
