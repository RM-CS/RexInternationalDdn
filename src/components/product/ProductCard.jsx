import React from 'react'
import { Link } from 'react-router-dom'

const productsOne = [
    {
      _id: '1',
      name: 'Poop And Pee Odou...',
      longname: 'Poop And Pee Odour Eliminator',
      image: 'https://cizar.in/wp-content/uploads/2024/02/cizar-hygiene-care-pvt-ltd-deo1-8dd-320x320.jpg',
      imageLong: 'https://cizar.in/wp-content/uploads/2024/02/cizar-hygiene-care-pvt-ltd-deo1-8dd.jpg',
      description:
        'Cizar Care Poop & Pee Odor eliminator utilizes its unique enzyme blend for eliminating the unpleasant smell and stains caused by waste. It consists of 100% natural and organic ingredients, ensuring a safe and environmentally friendly solution. Finally, bid farewell to any unpleasant odor in your home and enjoy a stain-free environment for you and your furry friend.',
      brand: '',
      category: 'Pet Care', 
      delprice: 1195.00,
      price: 693,
      countInStock: 10,
      rating: 4.5,
      numReviews: 12,
    },
    {
      _id: '2',
      name: 'Herbal Pet Deodorizer',
      longname: 'Herbal Pet Deodorizer',
      image: 'https://cizar.in/wp-content/uploads/2024/02/cizar-hygiene-care-pvt-ltd-herbal1-66f-320x320.jpg',
      imageLong: 'https://cizar.in/wp-content/uploads/2024/02/cizar-hygiene-care-pvt-ltd-herbal1-66f.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti deserunt, praesentium, amet cum omnis doloribus, possimus id ut dolorem voluptatum perspiciatis libero.',
      brand: '',
      category: '',
      price: 693.99,
      delprice: 1195.00,
      countInStock: 7,
      rating: 4.0,
      numReviews: 8,
    },
    {
      _id: '3',
      name: 'Tap And Tile Cleaner',
      longname: 'Tap And Tile Cleaner',
      image: 'https://cizar.in/wp-content/uploads/2024/02/cizar-hygiene-care-pvt-ltd-tap2-851-320x320.jpg',
      imageLong: 'https://cizar.in/wp-content/uploads/2024/02/cizar-hygiene-care-pvt-ltd-tap2-851.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti deserunt, praesentium, amet cum omnis doloribus, possimus id ut dolorem voluptatum perspiciatis libero.',
      brand: 'Cannon',
      category: 'Electronics',
      price: 345,
      delprice: 595,
      countInStock: 5,
      rating: 3,
      numReviews: 12,
    },
    {
        _id: '4',
        name: 'All In One Detergent...',
        longname: 'All In One Detergent With Enzyme',
        image: 'https://cizar.in/wp-content/uploads/2024/02/cizar-hygiene-care-pvt-ltd-ditee1-77e-600x600.jpg',
        imageLong: 'https://cizar.in/wp-content/uploads/2024/02/cizar-hygiene-care-pvt-ltd-ditee1-77e.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti deserunt, praesentium, amet cum omnis doloribus, possimus id ut dolorem voluptatum perspiciatis libero.',
        brand: '',
        category: '',
        price: 345.00,
        delprice: 595.00,
        countInStock: 11,
        rating: 5,
        numReviews: 12,
      },
]

 
  
  

const ProductCard = () => {

  return (
    <>
        <div className='h-auto w-full font-philosopher flex flex-wrap flex-col items-center text-center p-10 bg-slate-100 '>
        
        <div className="w-[90%] h-auto flex flex-wrap justify-around">
        {
            productsOne.map((data, index)=>(
                <div key={index} className="w-64 flex flex-col items-center mb-12 shadow-md bg-white rounded-xl p-2">
                
                <button>
                    <img className="p-8 rounded-t-lg" src={data.image} alt="productimage" />
                </button>
                
                <div className="px-5 pb-5">
                    <Link to="/">
                        <h5 className="text-xl font-semibold tracking-tight text-green-600">{data.name}</h5>
                    </Link>
                    <div className="flex items-center mt-2.5 mb-5">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                        </div>
                        <span className="bg-blue-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                    </div>
                    <div className="flex items-center">
                            <del>₹ {data.delprice} </del> &nbsp;
                             ₹ {data.price}
                    </div>
                </div>
                </div>
                            
            ))}


            

         
        </div>


      </div>
    </>
  )
}

export default ProductCard