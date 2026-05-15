const productsList = products.filter((p) => {

  const category =
    String(p.category || "")
      .toLowerCase()
      .trim();

  const subcategory =
    String(p.subcategory || "")
      .toLowerCase()
      .trim();

  return (
    category === "accessories" &&
    subcategory === "network-equipments"
  );
});