export const getProductsByCategory = (query) => async (disptach) => {
    try {
      const responce = await axios.get(
        "http://13.215.179.176:3002/api/product/search"
      );
       return responce
    } catch (error) {
      disptach({ type: GET_PRODUCTS_FAIL, payload: error.message });
    }
  };

  export const getProduct = async(id)=>{
    try {
      const { data } = await axios.get(
        `http://13.215.179.176:3002/api/product/${id}`
      );
     return data;
    } catch (error) {
      console.log('error', error)
    }
  }