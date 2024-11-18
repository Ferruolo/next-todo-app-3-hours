import {NextResponse} from "next/server";


export async function GET(request: Request) {
    try {
        // Example: Get URL parameters
        const { searchParams } = new URL(request.url)
        const id = searchParams.get('id')


        if (id) {
            const user = users.find(user => user.id === id)
            if (!user) {
                return NextResponse.json(
                    { error: 'User not found' },
                    { status: 404 }
                )
            }
            return NextResponse.json(user)
        }

        return NextResponse.json(users)
    } catch (error) {
        console.error('GET Error:', error)
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        )
    }
}
