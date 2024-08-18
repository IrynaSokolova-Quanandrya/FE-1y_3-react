import { Button } from "components/Tasks/Button/Button";
import css from "./StatusFilter.module.css";
import { selectFilters } from "redux/tasks/selectors";
import { statusFilters } from "redux/tasks/constants";
import { setStatusFilter } from "redux/tasks/filterSlice";
import { useDispatch, useSelector } from "react-redux";

export const StatusFilter = () => {
  const filter = useSelector(selectFilters);
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