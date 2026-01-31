import { NextRequest, NextResponse } from 'next/server'

const MONDAY_API_URL = 'https://api.monday.com/v2'
const LEADS_BOARD_ID = '5091042356'

interface FormData {
  name: string
  email: string
  phone: string
  role: string
  businessName: string
  industry: string
  businessStage: string
  currentWebsite: string
  socialLinks: string
  hasLogo: string
  hasBrandAssets: string
  inspiredSites: string
  projectType: string
  projectDescription: string
  timeline: string
  budget: string
}

function formatActivityLog(data: FormData): string {
  const businessStageMap: Record<string, string> = {
    'starting': 'Just starting out',
    'early': '1-3 years in business',
    'established': 'Established (3+ years)',
  }

  const logoMap: Record<string, string> = {
    'yes': 'Yes, ready to use',
    'needs-work': 'Yes, but needs work',
    'no': 'No, need one',
  }

  const brandAssetsMap: Record<string, string> = {
    'guidelines': 'Yes, have brand guidelines',
    'some-ideas': 'Have some ideas',
    'fresh': 'Starting fresh',
  }

  const projectTypeMap: Record<string, string> = {
    'new': 'New website from scratch',
    'refresh': 'Refresh/redesign existing site',
    'unsure': 'Not sure, need guidance',
  }

  const timelineMap: Record<string, string> = {
    'asap': 'ASAP (within a week)',
    '2-4-weeks': '2-4 weeks',
    '1-2-months': '1-2 months',
    'exploring': 'No rush, just exploring',
  }

  const budgetMap: Record<string, string> = {
    'under-500': 'Under $500',
    '500-1000': '$500 - $1,000',
    '1000-2000': '$1,000 - $2,000',
    '2000-plus': '$2,000+',
    'unsure': 'Not sure yet',
  }

  let html = `<p><strong>📋 New Website Inquiry</strong></p>`
  
  html += `<p><strong>👤 Contact Info</strong></p>`
  html += `<ul>`
  html += `<li>Name: ${data.name}</li>`
  html += `<li>Email: ${data.email}</li>`
  if (data.phone) html += `<li>Phone: ${data.phone}</li>`
  if (data.role) html += `<li>Role: ${data.role}</li>`
  html += `</ul>`

  html += `<p><strong>🏢 Business</strong></p>`
  html += `<ul>`
  html += `<li>Company: ${data.businessName}</li>`
  html += `<li>Industry: ${data.industry}</li>`
  html += `<li>Stage: ${businessStageMap[data.businessStage] || data.businessStage}</li>`
  if (data.currentWebsite) html += `<li>Current site: ${data.currentWebsite}</li>`
  if (data.socialLinks) html += `<li>Socials: ${data.socialLinks}</li>`
  html += `</ul>`

  html += `<p><strong>🎨 Brand</strong></p>`
  html += `<ul>`
  html += `<li>Logo: ${logoMap[data.hasLogo] || data.hasLogo}</li>`
  html += `<li>Brand assets: ${brandAssetsMap[data.hasBrandAssets] || data.hasBrandAssets}</li>`
  if (data.inspiredSites) html += `<li>Inspiration: ${data.inspiredSites}</li>`
  html += `</ul>`

  html += `<p><strong>📝 Project</strong></p>`
  html += `<ul>`
  html += `<li>Type: ${projectTypeMap[data.projectType] || data.projectType}</li>`
  html += `<li>Timeline: ${timelineMap[data.timeline] || data.timeline}</li>`
  if (data.budget) html += `<li>Budget: ${budgetMap[data.budget] || data.budget}</li>`
  html += `</ul>`

  html += `<p><strong>💬 Project Description</strong></p>`
  html += `<p>${data.projectDescription.replace(/\n/g, '<br>')}</p>`

  return html
}

async function createMondayLead(data: FormData, token: string) {
  // Create the lead item
  const columns: Record<string, unknown> = {
    lead_company: data.businessName,
    text: data.role || '',
    lead_email: { email: data.email, text: data.email },
    lead_status: { label: 'New Lead' },
  }
  
  // Only add phone if provided
  if (data.phone) {
    columns.lead_phone = { phone: data.phone, countryShortName: '' }
  }
  
  const columnValues = JSON.stringify(columns)

  const createItemQuery = `
    mutation {
      create_item(
        board_id: ${LEADS_BOARD_ID},
        item_name: "${data.name.replace(/"/g, '\\"')}",
        column_values: ${JSON.stringify(columnValues)}
      ) {
        id
      }
    }
  `

  console.log('Creating Monday lead with query:', createItemQuery)
  
  const createResponse = await fetch(MONDAY_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
    body: JSON.stringify({ query: createItemQuery }),
  })

  const createResult = await createResponse.json()
  console.log('Monday API response:', JSON.stringify(createResult))
  
  if (createResult.errors) {
    console.error('Monday create item error:', createResult.errors)
    throw new Error('Failed to create lead: ' + JSON.stringify(createResult.errors))
  }
  
  if (!createResult.data?.create_item?.id) {
    console.error('Monday unexpected response:', createResult)
    throw new Error('Unexpected Monday response')
  }

  const itemId = createResult.data.create_item.id

  // Add the full inquiry as an activity update
  const activityBody = formatActivityLog(data)
  
  const updateQuery = `
    mutation {
      create_update(
        item_id: ${itemId},
        body: ${JSON.stringify(activityBody)}
      ) {
        id
      }
    }
  `

  const updateResponse = await fetch(MONDAY_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
    body: JSON.stringify({ query: updateQuery }),
  })

  const updateResult = await updateResponse.json()

  if (updateResult.errors) {
    console.error('Monday create update error:', updateResult.errors)
    // Don't throw - lead was created, just log failed
  }

  return itemId
}

export async function POST(request: NextRequest) {
  try {
    const data: FormData = await request.json()

    // Validate required fields
    const required = ['name', 'email', 'businessName', 'industry', 'businessStage', 'hasLogo', 'hasBrandAssets', 'projectType', 'timeline', 'projectDescription']
    
    for (const field of required) {
      if (!data[field as keyof FormData]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Get Monday token from environment
    const mondayToken = process.env.MONDAY_API_TOKEN

    if (!mondayToken) {
      console.error('MONDAY_API_TOKEN not configured')
      // Still return success to user, but log the error
      console.log('Inquiry received (Monday not configured):', JSON.stringify(data, null, 2))
      return NextResponse.json({ 
        success: true, 
        message: 'Inquiry received' 
      })
    }

    // Create lead in Monday
    const leadId = await createMondayLead(data, mondayToken)

    console.log(`Lead created in Monday: ${leadId}`)

    return NextResponse.json({ 
      success: true, 
      message: 'Inquiry received successfully',
      leadId 
    })

  } catch (error) {
    console.error('Error processing inquiry:', error)
    return NextResponse.json(
      { error: 'Failed to process inquiry' },
      { status: 500 }
    )
  }
}
