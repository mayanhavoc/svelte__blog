import { fetchMarkdownPosts } from '$lib/utils'
import { json } from '@sveltejs/kit'

export const GET = async () => {
  try {
    const allPosts = await fetchMarkdownPosts()
  
    const sortedPosts = allPosts.sort((a, b) => {
      // @ts-ignore
      return new Date(b.meta.date) - new Date(a.meta.date)
    })
  
    return json(sortedPosts)
  } catch(error){
    console.error(error);
  }
}