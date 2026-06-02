import { createClient } from '@supabase/supabase-js'

export async function GET() {

    console.log(process.env.SUPABASE_URL)
    const supabase = createClient(
        import.meta.env.SUPABASE_URL!,
        import.meta.env.SUPABASE_KEY!
    )

    const resumeFile = await supabase
    .storage
    .from('curriculo')
    .download('curriculo-allan-dev.pdf')

    return new Response(await resumeFile.data?.arrayBuffer(), {
        headers: {
            'Content-Type': 'application/octet-stream',
            'Content-Disposition': `attachment; filename="curriculo-allan-dev.pdf"`,
        }
    })
}