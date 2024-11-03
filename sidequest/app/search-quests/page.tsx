import { useState } from "react";

export default function SearchQuests() {
  const [searchParams, setSearchParams] = useState({
    distance: "",
    cost: "",
    category: "",
    groupSize: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams({ ...searchParams, [name]: value });
  };

  const handleSearch = () => {
    // Implement your search logic here
  };

  return (
    <div>
      <h1>Search Quests</h1>
      <input
        type="text"
        name="distance"
        placeholder="Distance (miles)"
        onChange={handleChange}
      />
      <input
        type="text"
        name="cost"
        placeholder="Cost"
        onChange={handleChange}
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        onChange={handleChange}
      />
      <input
        type="text"
        name="groupSize"
        placeholder="Number of People"
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}