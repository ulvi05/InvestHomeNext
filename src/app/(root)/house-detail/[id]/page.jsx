import Details from '../Details'
import Hero from '../Hero'
import Map from '../Map'
import SimilarAnnouncements from '../SimilarAnnouncements'

const page = async ({ params }) => {

  const { id } = await params

  return (
    <>
      <Hero id={id} />
      <Details />
      <Map />
      <SimilarAnnouncements />
    </>
  )
}

export default page
