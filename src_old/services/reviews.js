/* eslint-disable no-undef */
import Outscraper from 'outscraper'

const client = new Outscraper(import.meta.env.OUTSCRAPER_API_KEY)

export const getReviews = async () => {
  const response = await client.googleMapsReviews(['Restaurante El Tormo'])
  console.log(response)
}
