import productsAPI from "@/shared/api";
import { useState, useEffect } from "react";

const useCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    productsAPI.getCategories().then(setCategories);
  }, []);

  return { categories };
};

export default useCategories;
