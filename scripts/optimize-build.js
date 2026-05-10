import { execSync } from 'child_process'
import path from 'path'
import fs from 'fs-extra'
import { globby } from 'globby'
import zlib from 'zlib'
import { promisify } from 'util'

const brotliCompress = promisify(zlib.brotliCompress)
const gzipCompress = promisify(zlib.gzip)

async function optimize() {
  console.log('Starting build optimization (Compression: Gzip, Brotli, Zstd)...')

  const distDir = path.resolve('dist')

  if (!(await fs.pathExists(distDir))) {
    console.error('Error: dist directory not found. Run npm run build first.')
    process.exit(1)
  }

  const files = await globby(['dist/**/*.{js,css,html,json,xml,svg,txt}'])

  console.log(`Found ${files.length} files to compress.`)

  for (const file of files) {
    // Skip already compressed files if re-running
    if (file.endsWith('.gz') || file.endsWith('.br') || file.endsWith('.zst')) continue

    const content = await fs.readFile(file)
    const fileName = path.basename(file)

    // Gzip
    try {
      const gzContent = await gzipCompress(content, { level: 9 })
      await fs.writeFile(`${file}.gz`, gzContent)
    } catch (e) {
      console.error(`Gzip failed for ${fileName}:`, e instanceof Error ? e.message : String(e))
    }

    // Brotli
    try {
      const brContent = await brotliCompress(content, {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
          [zlib.constants.BROTLI_PARAM_SIZE_HINT]: content.length,
        },
      })
      await fs.writeFile(`${file}.br`, brContent)
    } catch (e) {
      console.error(`Brotli failed for ${fileName}:`, e instanceof Error ? e.message : String(e))
    }

    // Zstd
    try {
      // Using -19 for ultra compression, similar to Brotli 11
      execSync(`zstd -19 -f "${file}" -o "${file}.zst"`, { stdio: 'ignore' })
    } catch (e) {
      console.warn(
        `Zstd failed for ${fileName} (is zstd installed?):`,
        e instanceof Error ? e.message : String(e)
      )
    }
  }

  console.log('Build optimization complete.')
}

optimize().catch((err) => {
  console.error('Optimization failed:', err)
  process.exit(1)
})
