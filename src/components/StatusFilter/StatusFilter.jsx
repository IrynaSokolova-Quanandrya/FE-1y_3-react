import { Button } from "components/Button/Button";
import css from "./StatusFilter.module.css";
import { getFilters } from "redux/selectors";
import { statusFilters } from "redux/constants";
import { setStatusFilter } from "redux/filterSlice";
import { useDispatch, useSelector } from "react-redux";

export const StatusFilter = () => {
  const filter = useSelector(getFilters);
  const dispatch = useDispatch();
 
 const handleFilterChange = filter => dispatch(setStatusFilter(filter));
  return (
   <div>
     <Button
       selected={filter === statusFilters.all}
       onClick={() => handleFilterChange(statusFilters.all)}
     >
       All
     </Button>
     <Button
       selected={filter === statusFilters.active}
       onClick={() => handleFilterChange(statusFilters.active)}
     >
       Active
     </Button>
     <Button
       selected={filter === statusFilters.completed}
       onClick={() => handleFilterChange(statusFilters.completed)}
     >
       Completed
     </Button>
   </div>
  );
};