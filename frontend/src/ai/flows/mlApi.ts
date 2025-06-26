export const sendFileToML = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("http://127.0.0.1:8000/predict/", {
        method: "POST",
        body: formData,
    });

    if (!response.ok) {
        throw new Error("ML API call failed");
    }

    return await response.json();
};
