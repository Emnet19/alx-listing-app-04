
import { useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from "@/components/property/PropertyCard";

export default function Home() {
  // State to store properties
  const [properties, setProperties] = useState([]);
  // Loading state
  const [loading, setLoading] = useState(true);
  // Error state
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("https://example.com/api/properties"); // Replace with your API
        setProperties(response.data);
      } catch (err) {
        console.error("Error fetching properties:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) return <p>Loading properties...</p>;
  if (error) return <p>Error fetching properties!</p>;

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}

