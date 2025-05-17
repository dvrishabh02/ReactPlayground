function PropertyList({ properties }) {
  return (
    <div className="property-list">
      {properties.map((property) => (
        <div key={property.id} className="property-item">
          <h2>{property.name}</h2>
          <p>{property.description}</p>
          <p>Price: ${property.price}</p>
        </div>
      ))}
    </div>
  );
}
export default PropertyList;