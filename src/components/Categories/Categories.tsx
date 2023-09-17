import React, {useState} from 'react'
import './Categories.scss';

interface MyObject {
    key: number;
    recents: string;
  };

  const categoriesItems : MyObject [] =[
    {key: 1, recents: "All"},
    {key: 2, recents: "React Js"},
    {key: 3, recents: "MK 11"},
    {key: 5, recents: "EA FC24 Update"},
    {key: 6, recents: "Fabrizo Romano"},
    {key: 7, recents: "Asus ROG"},
    {key: 8, recents: "Beta Squad"},
    {key: 8, recents: "Sports"},
    {key: 10, recents: "Recentlt Played"},

  ]

 

const Categories = () => {
    const [categories, setCategories] =useState<MyObject[]>(categoriesItems)
  return (
    <>
    <div className="categories">
    <section className="category-section active">
        {categories.map((category) => (
            <a className="category" key={category.key}>
                {category.recents}
            </a>
        ))}
    </section>
  </div>

    <div className="videos">
    <section className="video-section">
    </section>
    </div>
</>
  )
}

export default Categories