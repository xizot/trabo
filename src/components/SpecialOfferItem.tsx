import React from "react";

interface SpecialOfferItemProps {
  price: number;
  country: string;
  details: string;
  image: string;
}

function SpecialOfferItem({
  price,
  country,
  details,
  image,
}: SpecialOfferItemProps) {
  return <div>SpecialOfferItem</div>;
}

export default SpecialOfferItem;
