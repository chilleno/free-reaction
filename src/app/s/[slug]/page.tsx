import supabase from "@/utils/supabase";
import { redirect } from 'next/navigation'

const home = async ({ params }: { params: { slug: string } }) => {
    const { data, error } = await supabase
        .from('reactions')
        .select('*')
        .eq('id', params.slug)
        .single()
    if (error) {
        console.log('error', error)
        return <h1>The page doens exist</h1>
    } else {
        redirect(data.reacted_content_url+'?free_reaction=https://www.reaction-free.com/reaction/'+data.youtube_video_code+'/'+data.reaction_start_time)
    }
}

export default home;