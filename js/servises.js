const BASE = 'https://api.themoviedb.org/3/';
const  API_KEY = 'c3ba6234a03bc1dddcb6b770c299cd97';
const LANGUAGE = '&language=ru-RU';
///trending/all/day/
const getData = (url)=>{
 return fetch(url)
  .then(response=>{
      if(response.ok){
          return response.json()
      }else{
      throw `Somithing wrong ${response.status}`}
  })
  
  .catch(err => console.error(err));
   
};

//getData();

export const getTrands = async (type = 'all', period = 'week', page = 1)=>{
    const url = `${BASE}trending/${type}/${period}?api_key=${API_KEY}${LANGUAGE}&page=${page}`
  return await  getData(url);
   
  }

export const getTop = async(type, page=1)=>{
  const url = `${BASE}${type}/top_rated?api_key=${API_KEY}${LANGUAGE}&page=${page}`
  return await  getData(url);
}  

export const getPopular = async(type, page=1)=>{
  const url = `${BASE}${type}/popular?api_key=${API_KEY}${LANGUAGE}&page=${page}`
  return await  getData(url);
}  