function FilterBar({
  type,
  setType,
  limit,
  setLimit,
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        marginBottom: "20px",
        flexWrap: "wrap",
      }}
    >
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="">All</option>

        <option value="Placement">
          Placement
        </option>

        <option value="Result">
          Result
        </option>

        <option value="Event">
          Event
        </option>
      </select>

      <input
        type="number"
        value={limit}
        onChange={(e) =>
          setLimit(e.target.value)
        }
        placeholder="Top N"
      />
    </div>
  );
}

export default FilterBar;