import React from "react";
import { useParams } from "react-router-dom";

const cardDetails = {
  school: {
    title: "School at Home",
    fullText:
      "Here’s the full write-up for our ‘School at Home’ initiative…",
  },
  "old-age-home": {
    title: "Sainath Dada Dadi’s Old Age Home",
    fullText:
      "Full story about how we care for elderly citizens at our Old Age Home…",
  },
  "disability-center": {
    title: "Narayan Disability Home & Training Center",
    fullText:
      "Everything you need to know about our training center for persons with disabilities…",
  },
  "medical-camp": {
    title: "Medical Camp for Dental, Eye & Blood Donation",
    fullText:
      "Detailed info on organizing mobile medical camps including blood donation drives…",
  },
};

const DetailPage = () => {
  const { id } = useParams();
  const data = cardDetails[id];

  if (!data) return <p className="p-8">Page not found.</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p className="text-gray-700 leading-relaxed">{data.fullText}</p>
    </div>
  );
};

export default DetailPage;
