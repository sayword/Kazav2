import './Gallery.css'
import datas from '../../data/api/logements.json'
import Card from '../Card/card'

export default function Gallery() {

    return (
        <main className='home_gallery'>
            {datas.map(data => {
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
        </main>
    )
}