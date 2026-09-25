export const asset = (path: string) => {
  const optimized = path.startsWith("/assets/") ? path.replace("/assets/", "/media/").replace(/\.(png|jpg)$/i, ".webp") : path;
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${optimized}`;
};
export const linkedin = "https://www.linkedin.com/in/pedro-henrique-queiroz-50301b221/";
export const github = "https://github.com/PedroHQC";
