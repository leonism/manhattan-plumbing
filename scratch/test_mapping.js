import { getServiceData, getAllServices } from './src/lib/services.js'

async function test() {
  const slugs = ['emergency-service', 'drain-service', 'water-heater-service']
  for (const slug of slugs) {
    const data = await getServiceData(slug)
    console.log(`Slug: ${slug} -> Title: ${data?.title}`)
  }
}

test()
