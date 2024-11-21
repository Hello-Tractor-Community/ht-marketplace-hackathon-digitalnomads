import { NextResponse } from 'next/server';

export async function POST(req) {
    const { email, password} = await req.json();

    const DIRECTUS_URL = process.env.DIRECTUS_URL;

    try {
        //Authenticate user with Directus
        const authResponse = await fetch(`${DIRECTUS_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
          });

        if (!authResponse.ok) {
            const error = await authResponse.json();
            return NextResponse.json({ error }, { status: authResponse.status});
        }

        const authData = await authResponse.json();

        return NextResponse.json({
            message: 'Login successful',
            access_token: authData.data.access_token,
            refresh_token: authData.data.refresh_token,

        });
    }
    catch (error) {
        return NextResponse.json({ error: error.message}, {status: 500});

    }
}