export async function getFirstBanner() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/first-banner`,
        {
          next: { revalidate: 10 },
        },
      );
      return await res.json();
    } catch (error) {
      console.error("Error fetching banner:", error);
      throw error;
    }
  }