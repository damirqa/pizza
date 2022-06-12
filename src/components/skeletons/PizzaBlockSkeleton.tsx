import React from "react";
import ContentLoader from "react-content-loader";

const PizzaBlockSkeleton: React.FC = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={491}
    viewBox="0 0 280 491"
    backgroundColor="#eae6e6"
    foregroundColor="#d2d0d0"
  >
    <circle cx="140" cy="130" r="130" />
    <rect x="10" y="270" rx="5" ry="5" width="260" height="50" />
    <rect x="10" y="330" rx="5" ry="5" width="260" height="90" />
    <rect x="120" y="430" rx="5" ry="5" width="150" height="45" />
    <rect x="10" y="430" rx="5" ry="5" width="100" height="45" />
  </ContentLoader>
);

export default PizzaBlockSkeleton;
