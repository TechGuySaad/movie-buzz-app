import '../styles/body.css'
import Card from './Card'


export default function Body({data}){
    // 'https://image.tmdb.org/t/p/original/'+huR3i1oxVkipuAJVF2UVVxV9alC.jpg 
    console.log(data)
    return <div className="body">

    {
        data.map((items)=>{
           return  <Card name={items.title} image={'https://image.tmdb.org/t/p/original/'+items.poster_path} description={items.overview}></Card>


        })
    }
       
        
        

    </div>

}