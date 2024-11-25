import { NextResponse } from 'next/server';

// Directus API configuration
const DIRECTUS_URL = process.env.DIRECTUS_URL;
const DIRECTUS_API_TOKEN = process.env.DIRECTUS_API_TOKEN;

// Handler for POST requests
export async function POST(request) {
  try {
    // Parse the request body to get tractor details
    const body = await request.json();
    const { make, model, price, hours_used, year_of_manufacturing, engine_power, fuel_type, image, quantity, seller_id } = body;

    // Log the received request body for debugging
    console.log('Received request body:', body);

    // Ensure all required fields are provided
    if (!make || !model || !price || !year_of_manufacturing || !fuel_type || !quantity || !seller_id) {
      return NextResponse.json(
        { message: 'Missing required fields.' },
        { status: 400 }
      );
    }

    // Convert year_of_manufacturing to a valid date (e.g., "YYYY-01-01")
    const manufacturingDate = `${year_of_manufacturing}-01-01`;

    // Prepare payload for Directus
    const payload = {
      make,
      model,
      price,
      hours_used,
      year_of_manufacturing: manufacturingDate, // Ensure this is a valid date string
      engine_power,
      fuel_type,
      image,
      view_count: 0, // Initialize with 0 views
      quantity,
      seller_id, // Tie the tractor to the seller
    };

    // Log the payload before sending to Directus
    console.log('Payload to Directus:', payload);

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
      const errorDetails = await tractorResponse.text();
      console.error(`Failed to add tractor: ${tractorResponse.status} - ${errorDetails}`);
      throw new Error(`Failed to add tractor: ${tractorResponse.status}`);
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
      { message: 'Failed to add tractor.', error: error.message },
      { status: 500 }
    );
  }
}
