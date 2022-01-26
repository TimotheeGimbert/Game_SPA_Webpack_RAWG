export { get };

const get = async (url) => {
  try {
    const response = await fetch(url);
    const jsonObject = await response.json();
    console.log(jsonObject);
    return jsonObject;
  }catch (error) { console.error('Error fetching data : ', error.message); }
};