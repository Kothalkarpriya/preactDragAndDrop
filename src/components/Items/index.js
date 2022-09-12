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
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
  };

  const drop = () => {
    const copyListItems = [...list];
    setUpdateList(dragItem.current);
    console.log(dragItem.current);
    dragItem.current = null;
    dragOverItem.current = null;
    setList(copyListItems);
  };

  return (
    <div class={style.boxes}>
      <div class={style.firstBlock}>
        {list &&
          list.map((item, index) => (
            <div
              key={item}
              class={style.box}
              onDragStart={(e) => dragStart(e, index)}
              onDragEnter={(e) => dragEnter(e, index)}
              onDragEnd={drop}
              draggable="true"
            >
              {item}
            </div>
          ))}
      </div>
      <div class={style.secondBlock}>
        { updateListItem!==null && <div onMouseUp={drop} class={style.dropBox} onDragOver={drop} draggable>
          {list[updateListItem]}
        </div>}
      </div>
    </div>
  );
};

export default Items;
