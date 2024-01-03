import copy from "copy-to-clipboard";
import toast from "react-hot-toast";

export const copyButton = (data) => {
  copy(data);
  toast.success("Copied!");
};
