import style from "./style.css";
import { useRef, useState } from "preact/hooks";

const Items = () => {
  const [list, setList] = useState([
    "Apple",
    "Banana",
    "Mango",
    "Guava",
    "Orange",
    "Some Fruit",
  ]);
  const [updateListItem, setUpdateList] = useState(null);

  const dragItem = useRef();
  const dragOverItem = useRef();
  const dragStart = (e, position) => {
    dragItem.current = position;
  };
console.log(list[4])
  const dragEnter = (e,position) => {
     dragOverItem.current = position;
  }

  const drop = () => {
     const copyListItems = [...list];
     // const dragItemContent = copyListItems[dragItem.current];
     // copyListItems.splice(dragItem.current, 1);
     setUpdateList(dragItem.current)
     console.log(dragItem.current)
     // copyListItems.splice(dragOverItem.current,0,dragItemContent);
     dragItem.current = null;
     dragOverItem.current = null;
     setList(copyListItems)
    
  }

  return (
    <div class={style.boxes}>
      <div class={style.firstBlock}>
        {list &&
          list.map((item,index) => (
            <div key={item} class={style.box} onDragStart={(e)=>dragStart(e,index)} onDragEnter={(e)=>dragEnter(e,index)} onDragEnd={drop} draggable="true">
              {item}
            </div>
          ))}
      </div>
      <div class={style.secondBlock}>
            <div onMouseUp={drop} onDragOver={drop} draggable >
             
               {list[updateListItem]}
               
               </div>
          </div>
    </div>
  );
};

export default Items;
