import { RiAddLine, RiApps2Line, RiBankLine, RiBowlLine, RiCheckboxMultipleBlankLine, RiCheckLine, RiDatabaseLine, RiImage2Line, RiMapPin2Line, RiStarLine, RiTimeLine } from '@remixicon/react'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditFood = () => {

    const navigate = useNavigate();
    const params = useParams();
    const cate = params.category;
    const id = params.id;
    const [food, setFood] = useState([]);
    const [loading, setLoading] = useState(true);



    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [duration, setDuration] = useState('');
    const [recipe, setRecipe] = useState('');
    const [ratings, setRatings] = useState('');
    const [restaurant, setRestaurant] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    let [imgUrl, setImgUrl] = useState(``);

    useEffect(() => {
        const fetchFood = async () => {
            try {
                const res = await fetch(`http://localhost:4000/${cate}/${id}`);
                const data = await res.json();
                setFood(data);
                setName(data.name);
                setCategory(cate);
                setPrice(data.price);
                setDuration(data.duration);
                setRecipe(data.recipe);
                setRatings(data.ratings);
                setRestaurant(data.restaurant);
                setDescription(data.description);
                setAddress(data.address);
                setImgUrl(data.imgUrl);
            } catch (error) {
                console.log(`Error fetching ${cate} food `, error);
            }
            finally {
                setLoading(false);
            }

        }

        fetchFood();
    }, [cate, id]);

    

    const handleEditFood = (e) => {
        e.preventDefault();   

        let rate = parseInt(ratings);

        const mealData = {
            name, price, duration, recipe, ratings: rate, restaurant, description, address, imgUrl
        };

        updateMeal(mealData);
    }

    const updateMeal = async (mealData) => {
        try {
                const res = await fetch(`http://localhost:4000/${category}/${id}`, 
                {
                    method: 'PUT', 
                    headers: { 'Content-Type': 'application/json', },
                    body: JSON.stringify(mealData),
                });
                if (res) { 
                    alert('Meal updated successfully');
                     
                }
        } catch (error) {
            console.log("Error while updating meal ", error);
        }
        return navigate(`/category-page/${category}`)
    }
    

  return (
    <section className='bg-accent-secondary p-6'>
      <div className='text-2xl font-normal tracking-wider mb-11 flex flex-col justify-center items-center gap-1'>
           <span className='capitalize'> Edit {food.name} </span> 
           <div className='border-t-[3px] border-orange-400 w-[20rem]'></div>
        </div>


        <form onSubmit={handleEditFood}>
            <div className="input-wrapper">
                <div className="input-div">
                    <label htmlFor="name" className='label'>
                        <RiBowlLine size={15} />
                        <span>Name</span>
                    </label>

                    <input type="text" id='name' name='name' placeholder='Food name' className='input-field' 
                    value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="input-div">
                    <label htmlFor="category" className='label'>
                        <RiApps2Line size={15} />
                        <span>Category</span>
                    </label>

                    <select id='category' name='category' className='select-field' 
                    value={category} onChange={(e) => setCategory(e.target.value)} >
                        <option value="">Select Category</option>
                        <option value="appetizer">Appetizer</option>
                        <option value="chinese">Chinese</option>
                        <option value="continental">Continental</option>
                        <option value="confectioneries">Confectioneries</option>
                        <option value="drinks">Drinks</option>
                        <option value="favorities">favorities</option>
                        <option value="local">Local</option>
                        <option value="vegetarian">Vegetarian</option>                       
                    </select>
                </div>
            </div>

            <div className="input-wrapper">
                <div className="input-div">
                    <label htmlFor="Price" className='label'>
                        &#8358;
                        <span>Price</span>
                    </label>

                    <input type="text" id='price' name='price' placeholder='Price' className='input-field' 
                    value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>

                <div className="input-div">
                    <label category="category" className='label'>
                        <RiCheckboxMultipleBlankLine size={15} />
                        <span>Recipes</span>
                    </label>

                    <input type="text" id='recipes' name='recipes' placeholder='Recipe' className='input-field' 
                    value={recipe} onChange={(e) => setRecipe(e.target.value)}/>
                </div>
            </div>

            <div className="input-wrapper">
                <div className="input-div">
                    <label htmlFor="duration" className='label'>
                        <RiTimeLine size={15} />
                        <span>Duration</span>
                    </label>

                    <select id='duration' name='duration' className='select-field' 
                    value={duration} onChange={(e) => setDuration(e.target.value)}>
                        <option value="">Select Duration</option>
                        <option value="5m">5 minutes</option>
                        <option value="10m">10 minutes</option>
                        <option value="15m">15 minutes</option>
                        <option value="20m">20 minutes</option>
                        <option value="25m">25 minutes</option>
                        <option value="30m">30 minutes</option>
                        <option value="35m">35 minutes</option>
                        <option value="40m">40 minutes</option>                       
                    </select>
                </div>

                <div className="input-div">
                    <label htmlFor="ratings" className='label'>
                        <RiStarLine size={15} />
                        <span>Ratings</span>
                    </label>

                    <input type="text" id='ratings' name='ratings' placeholder='Ratings' className='input-field' value={ratings} onChange={(e) => setRatings(e.target.value)} />
                </div>
            </div>

            <div className="input-wrapper">
                <div className="input-div">
                    <label htmlFor="restaurant" className='label'>
                        <RiBankLine size={15} />
                        <span>Restaurant</span>
                    </label>

                    <input type="text" id='restaurant' name='restaurant' placeholder='Restaurant' className='input-field' 
                    value={restaurant} onChange={(e) => setRestaurant(e.target.value)} />
                </div>

                <div className="input-div">
                    <label htmlFor="imgUrl" className='label'>
                        <RiImage2Line size={15} />
                        <span>Upload Photo</span>
                    </label>
                    <label htmlFor="imgUrl" className='label'></label>

                    <input type="file" id='imgUrl' name='imgUrl' className='input-field' accept='.png, .jpeg, .jpg, .gif' 
                    style={{ width: '90%', display: 'none'}}/>
                </div>
            </div>

            <div className="input-wrapper">
                <div className="input-div">
                    <label htmlFor="description" className='label'>
                        <RiDatabaseLine size={15} />
                        <span>Description</span>
                    </label>

                    <textarea rows={2} type="text" id='description' name='description' placeholder='Description' className='input-field' 
                    value={description} onChange={(e) => setDescription(e.target.value)}> </textarea>
                </div>

                <div className="input-div">
                    <label htmlFor="address" className='label'>
                        <RiMapPin2Line size={15} />
                        <span>Address</span>
                    </label>

                    <textarea rows={2} type="text" id='address' name='address' placeholder='Address' className='input-field'
                    value={address} onChange={(e) => setAddress(e.target.value)} ></textarea>
                </div>
            </div>

            <div className="button-div">
                <button type='submit' className='btn-create'>
                    <RiCheckLine /> Update Meal
                </button>
            </div>
        </form>
    </section>
  )
}

export default EditFood
