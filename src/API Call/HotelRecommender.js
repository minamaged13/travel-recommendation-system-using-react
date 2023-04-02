async function recommendHotel(userId, city){

    fetch ('http://localhost:4000/hotels/recommender/'+userId+"/"+city, {
     method: 'GET',
     body:null,
   })
     .then ( async response => {
       console.log ('Response ---------->');
       const data = await response.json ();
       console.log (data);

     })
     .catch (error => console.error (error));

     return data;
}