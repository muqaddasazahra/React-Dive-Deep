import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductCategory from "./ProductCategory";

export default function ProductTable({ products, searchText, isStockOnly }) {
  let rows = [];
  let lastCategory = null;
  let header = (
    <tr className="flex justify-between gap-24">
      <th>Name</th>
      <th>Price</th>
    </tr>
  );
  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1)
      return;
    if (!product.stocked && isStockOnly) return;
    if (product.category !== lastCategory) {
      rows.push(<ProductCategory category={product.category} />);
      rows.push(header);
    }

    rows.push(<ProductCategoryRow product={product} />);

    lastCategory = product.category;
  });
  return (
    <div className="py-4 my-4 mx-auto w-fit px-14 border-gray-800 border-2 rounded-md flex justify-center items-center">
      {rows.length < 1 ? (
        <h1>No Items Found!</h1>
      ) : (
        <table>
          <tbody>{rows}</tbody>
        </table>
      )}
    </div>
  );
}
