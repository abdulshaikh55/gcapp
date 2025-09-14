import { supabase } from "@/lib/supabase";

export async function fetchMap() {
  const { data, error } = await supabase
  .from('map')
  .select('id, map_title');

  if (error) {
    console.error('Error fetching map', error);
    return [];
  }

  return data;
}


export async function fetchJourney(map_id: string) {
  const { data, error} = await supabase
  .from('journey')
  .select('id, journey_title, description, last_updated')
  .eq('map_id', map_id)

  if (error) {
    console.error("Error fetching Journeys", error);
    return [];
  }

  return data
}
