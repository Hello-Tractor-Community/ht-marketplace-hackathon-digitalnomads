import { NextResponse } from 'next/server';

export async function POST(req) {
    console.log('this is the signin link')
    const { email, password } = await req.json();
    console.log('This is the email and password', email, password)
    const DIRECTUS_URL = process.env.DIRECTUS_URL;
    console.log('This is the directus link', DIRECTUS_URL)

    try {
        //Authenticate user with Directus
        const authResponse = await fetch(`${DIRECTUS_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        if (!authResponse.ok) {
            const error = await authResponse.json();
            return NextResponse.json({ error }, { status: authResponse.status });
        }

        const authData = await authResponse.json();

        return NextResponse.json({
            message: 'Login successful',
            access_token: authData.data.access_token,
            refresh_token: authData.data.refresh_token,

        });
    }
    catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });

    }
}