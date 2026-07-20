const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(12)
        .fill("")
        .map((_, index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmer-img"></div>
            <div className="shimmer-info">
              <div className="shimmer-line shimmer-title"></div>
              <div className="shimmer-line"></div>
              <div className="shimmer-line"></div>
              <div className="shimmer-line shimmer-cuisine"></div>
              <div className="shimmer-line"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export const MenuShimmer = () => {
  return (
    <div className="menu-shimmer-page">
      <div className="menu-shimmer-block menu-shimmer-heading"></div>
      <div className="menu-shimmer-block menu-shimmer-image"></div>
      <div className="menu-shimmer-block menu-shimmer-subtitle"></div>

      {Array.from({ length: 15 }).map((_, index) => (
        <div key={index} className="menu-shimmer-block menu-shimmer-line"></div>
      ))}
    </div>
  );
};

export default Shimmer;
