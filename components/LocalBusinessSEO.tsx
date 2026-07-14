export default function LocalBusinessSEO() {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Campground",
      name: "Echo Haven",
      description:
        "Peaceful camping experience in Munnar with mountain views, comfortable tents, campfire with music, breakfast included, free Wi-Fi and parking.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "20 Acre",
        addressLocality: "Munnar",
        addressRegion: "Kerala",
        addressCountry: "IN",
      },
      telephone: "+91 86064 70462",
      email: "echohaventents@gmail.com",
      priceRange: "₹1500",
      amenityFeature: [
        {
          "@type": "LocationFeatureSpecification",
          name: "Campfire with Music",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Free Wi-Fi",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Parking Facility",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Breakfast Included",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Nature Friendly",
          value: true,
        },
      ],
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
    );
  }