import { NextResponse } from 'next/server';

// Directus API configuration
const DIRECTUS_URL = process.env.DIRECTUS_URL; // e.g., 'https://your-directus-instance.com'
const DIRECTUS_API_TOKEN = process.env.DIRECTUS_API_TOKEN; // Static token for your API

// Handler for POST requests
export async function POST(request) {
  try {
    // Parse the request body to get tractor details
    const body = await request.json();
    const { make, model, price, hours_used, year_of_manufacturing, engine_power, fuel_type, image, quantity } = body;

    // Ensure all required fields are provided
    if (!make || !model || !price || !year_of_manufacturing || !fuel_type || !quantity) {
      return NextResponse.json(
        { message: 'Missing required fields.' },
        { status: 400 }
      );
    }

    // Extract session details (from directus_users)
    //The section below has been commented out for testing purposes.
    /*const session = await getServerSession(); // Replace with your session handling logic
    if (!session || !session.user || !session.user.id) {
      return NextResponse.json(
        { message: 'User is not authenticated.' },
        { status: 401 }
      );
    }
      */
    const directus_user_id = "eeb2e9d5-d5f9-4a92-ad53-a84f59db9617"; //Directly hard coded a directus_user_id for testing purposes

    // Fetch seller_id from the custom users table
    const sellerResponse = await fetch(
      `${DIRECTUS_URL}/items/users?filter[directus_user_id][_eq]=${directus_user_id}`,
      {
        headers: {
          Authorization: `Bearer ${DIRECTUS_API_TOKEN}`,
        },
      }
    );

    if (!sellerResponse.ok) {
      throw new Error('Failed to fetch seller information.');
    }

    const sellerData = await sellerResponse.json();

    if (!sellerData.data || sellerData.data.length === 0) {
      return NextResponse.json(
        { message: 'Seller not found in the custom users table.' },
        { status: 404 } 
      );
    }

    const seller_id = sellerData.data[0].id; // Seller ID from the custom `users` table
    let view_count = 0;

    // Prepare payload for Directus
    const payload = {
      make,
      model,
      price,
      hours_used,
      year_of_manufacturing,
      engine_power,
      fuel_type,
      image,
      view_count,
      quantity,
      seller_id, // Tie the tractor to the seller
    };

    // Call Directus API to add the tractor
    const tractorResponse = await fetch(`${DIRECTUS_URL}/items/tractor`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${DIRECTUS_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!tractorResponse.ok) {
      throw new Error(`Failed to add tractor: ${tractorResponse.statusText}`);
    }

    const responseData = await tractorResponse.json();

    // Return success response
    return NextResponse.json(
      { message: 'Tractor added successfully!', data: responseData },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error adding tractor:', error.message);
    return NextResponse.json(
      { message: 'Failed to add tractor.', error : error.message },
      { status: 500 }
    );
  }
}