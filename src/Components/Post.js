import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from "../client.js";


// 1. import sanity client so we can interact with it.
// 2. import useState to use state and useEffect to query data from sanity
// 3. create a useState for the post data const [postData, setPost] = useState(null);
// 4. useEffect to get data from sanity. useEffect(()=> {sanityCLient.fetch`write grock in here`})
 

const Post = () => {

  const [postData, setPost] = useState(null);

  useEffect(() => {

    // 5. this code will capture what we want from sanity
    sanityClient.fetch(`*[_type == "post"]{
                title,
                slug,
                mainImage{
                  asset->{
                    _id,
                    url
                  },
                  alt
                }
    }`)
    .then((data) => setPost(data))
    .catch(console.error);
  }, []);

  // 6. in the return we will have a main element with a section filled with am h1 h2 and div, in the div will go an article element
  // filled with a span and img then another span with an h3 inside, then we surround the span with <Link> </Link>

  return (
    <main className="bg-green-100 min-h-screen p-12">
      <section className="container mx-auto">
      {/* title */}
        <h1 className='text-5xl flex justify-center cursive'>Blog Post page</h1>     
            {/*subtitle  */}
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">Welcome to my page of blogposts</h2>
        {/* use this div that surrounds everything below to map through the post data and fill in the information for the posts. */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{postData && postData.map((post, index) => (
          <article>

          {/* be sure to bring in react router dom to use Link */}
          <Link to={"/post/" + post.slug.current} key={post.slug.current}>
              <span 
                className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400" 
                key={index}>
              <img 
                src={post.mainImage.asset.url}
                alt={post.mainImage.alt}
                className='w-full h-full rounded-r object-cover absolute'
                 />
                <span className='block relative h-full flex justify-end items-end pr-4 pb-4'>
                  <h3 className='text-grey-800 text-lg font-bold px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded'>
                    {post.title}
                  </h3>
                </span>
              </span>
            </Link>
          </article>
          ))}
        </div>
      </section>
    </main>
  )

};

export default Post;