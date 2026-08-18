const FARM_LAT = -0.71775;
const FARM_LNG = 36.43123;

const GoogleMap = () => (
  <div className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-xl border border-primary-foreground/20 shadow-md">
    <iframe
      title="Delamare Farm Location"
      src={`https://www.google.com/maps?q=${FARM_LAT},${FARM_LNG}&hl=en&z=15&output=embed`}
      width="100%"
      height="350"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
);

export default GoogleMap;
