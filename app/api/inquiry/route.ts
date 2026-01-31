import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Log the inquiry (for debugging)
    console.log('New inquiry received:', JSON.stringify(data, null, 2))

    // TODO: Create lead in Monday.com
    // TODO: Send confirmation email
    // TODO: Send notification to team

    // For now, just validate required fields
    const required = ['name', 'email', 'businessName', 'industry', 'businessStage', 'hasLogo', 'hasBrandAssets', 'projectType', 'timeline', 'projectDescription']
    
    for (const field of required) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Return success
    return NextResponse.json({ 
      success: true, 
      message: 'Inquiry received successfully' 
    })

  } catch (error) {
    console.error('Error processing inquiry:', error)
    return NextResponse.json(
      { error: 'Failed to process inquiry' },
      { status: 500 }
    )
  }
}
