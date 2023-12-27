import { getFirstBanner } from "../lib/Actions"

export default async function page() {
    const banner = await getFirstBanner();
    console.log(banner)
    return (
      <div>page</div>
    )
  }



