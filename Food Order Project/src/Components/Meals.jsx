import useHttp from "../useHttp";
import Error from "./Error";
import MealItem from "./Mealitem";
const requestConfig={
    method:'GET'
}
export default function Meals() {
   const {data:displayMeals,isLoading,error} =useHttp('http://localhost:3000/meals',requestConfig,[])

   if(isLoading){
    return(<p className="center">Fetching data</p>)
   }
   if(error){
    return(<Error title={"Failed to fetch Meals"} message={error} />)
   }
    return (
        <>
            {displayMeals &&
                <ul id="meals">
                    {displayMeals.map((meal) => {
                        return (
                            <MealItem meal={meal} key={meal.id}/>
                           
                        )
                    })}
                </ul>
            }
        </>
    )

}