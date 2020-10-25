import React,{useEffect,useState} from 'react';

const App = () => {
  const [data,setData] = useState(null);
  const fetchURL = "https://jsonplaceholder.typicode.com";

  const getData = () => 
    fetch(`${fetchURL}/posts`)  
    .then(response => response.json())
   

  useEffect(() => {
    getData().then((data) => setData(data))
    getData().then(response   => console.log(response))
  }, [])

  return(
    <div>
      <h1>Hi I'm React Hook And Fetching Data Now.</h1>
      {data?.map((item) => 
      <li key={item.id}>{item.title}</li>
      )}
    </div>
  )
}

export default App;