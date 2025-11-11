import { useState } from "react";

const useModals = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return { isModalVisible, setIsModalVisible };
};

export default useModals;
